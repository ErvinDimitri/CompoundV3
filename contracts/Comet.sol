// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "./CometMainInterface.sol";
contract Comet is CometMainInterface{


    // @return the utilization: ratio about the total amount borrowed from the supply pool in the protocol
    function getUtilization() override public view returns(uint){
        uint totalSupply_ = presentValueSupply( baseSupplyIndex, totalSupplyBase);
        uint totalBorrow_ = presentValueBorrow( baseBorrowIndex, totalBorrowBase);
        if( totalSupply_ == 0){
            return 0;
        }else{
            return totalBorrow_ * FACTOR_SCALE / totalSupply_;
        }

    }

    function mulFactor( uint n, uint factor) internal pure returns( uint){
        return n*factor/FACTOR_SCALE;
    }

    // @return the timestamp in uint40
    function getNowInternal() virtual internal view returns(uint40){
        if( block.timestamp >= 2**40) revert TimestampTooLarge();
        return uint40(block.timestamp);
    }
    
    function doTransferIn( address asset, address from, uint amount) internal{
        bool success = ERC20(asset).transferFrom( from, address(this), amount);
        if( !success) revert TransferInFailed();
    }

    // Calculate baseSupplyIndex and baseBorrowIndex
    function accruedInterestIndices( uint timeElapsed) internal view returns( uint64, uint64){
        uint64 baseSupplyIndex_ = baseSupplyIndex;
        uint64 baseBorrowIndex_ = baseBorrowIndex;
        if( timeElapsed > 0){
            uint utilization = getUtilization();
            uint supplyRate = getSupplyRate( utilization);
            uint borrowRate = getBorrowRate( utilization);
            baseSupplyIndex_ += safe64( mulFactor( baseSupplyIndex_, supplyRate * timeElapsed));
            baseBorrowIndex_ += safe64( mulFactor( baseBorrowIndex_, borrowRate * timeElapsed));        
        }
        return ( baseSupplyIndex_, baseBorrowIndex_);
    }

    // Updates trackingSupplyIndex and trackingBorrowIndex
    // It's called everytime the user interacts with the protocol
    function accrueInternal() internal{
        uint40 now_ = getNowInternal();
        uint timeElapsed = uint256( now_ - lastAccrualTime);
        if(timeElapsed > 0){
            (baseSupplyIndex, baseBorrowIndex) = accruedInterestIndices( timeElapsed);
            if( totalSupplyBase >= baseMinForRewards){
                trackingSupplyIndex += safe64( divBaseWei(basTrackingSupplySpeed * timeElapsed, totalSupplyBase));                
            }
            if( totalBorrowBase >= baseMinForRewards){
                trackingBorrowIndex += safe64(devBaseWei( baseTrackingBorrowSpeed * timeElapsed, totalBorrowBase));
            }
            lastAccrualTime = now_;
        }
    }

    /* F() called when a user deposits
       Updates the principal value of the user: 
        1.convert the principal value to present value and sum with deposited amount
        2. Convert back to principal value
       Update the totalizers vars: totalSupplyBase and totalBorrowBase
    */
    function supplyBase( address from, address dst, uint356 amount) internal{
        doTransferIn( baseToken, from, amount);

        accrueInternal();

        UserBasic memory dstUser = userBasic[dst];
        int104 dstPrincipal = dstUser.principal;
        int256 dstBalance = presentValue(dstPrincipal) + signed256( amount);
        int104 dstPrincipalNew = principalValue(dstBalance);

        (uint104 repayAmount, uint104 supplyAmount) = repayAndSupply( dstPrincipal, dstPrincipalNew);

        totalSupplyBase += supplyAmount;
        totalBorrowBase -= repayAmount;

        updateBasePrincipal( dst, dstUser, dstPrincipalNew);

        emit Supply( from, dst, amount);

        if( supplyAmount > 0){
            emit Transfer( address(0), dst, presentValueSupply( baseSupplyIndex, supplyAmount));
        }
    }


    // Get lender's balance; It increases over time as long as utilization doesnt become 0
    function balanceOf( address account) override public view returns( uint256){
        (uint64 baseSupplyIndex_, ) = accruedInterestIndices( getNowInternal() - lastAccrualTime);
        int104 principal = UserBasic[account].principal;
        return principal > 0 ? presentValueSupply( baseSupplyIndex_, unsigned104( principal)) : 0;
    }

    // Calculate present value of the total USDC deposited
    function totalSupply() override external view returns(uint256){
        (uint256 baseSupplyIndex_, ) = accruedInterestIndices( getNowInternal() - lastAccrualTime);
        return presentValueSupply( totalSupplyBase, baseSupplyIndex_);
    }

    // Calculate the present value of the total USDC borrowed (accrued interest is included)
    function totalBorrow() override external view returns( uint256){
        (, uint256 baseBorrowIndex_) = accruedInterestIndices( getNowInternal() - lastAccrualTime);
        return presentValueBorrow( totalBorrowBase, baseBorrowIndex_);
    }

    function transfer(address dst, uint256 amount) override external returns(bool){
        transferInternal( msg.sender, msg.sender, dst, baseToken, amount);
        return true;
    }

    function transferFrom( address src, address dst, uint256 amount) override external returns(bool){
        transferInternal( msg.sender, src, dst, baseToken, amount);
        return true;
    }
}