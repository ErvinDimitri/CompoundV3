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

    function balanceOf( address account) override public view returns( uint256){
        (uint64 baseSupplyIndex_, ) = accruedInterestIndices( getNowInternal() - lastAccrualTime);
        int104 principal = UserBasic[account].principal;
        return principal > 0 ? presentValueSupply( baseSupplyIndex_, unsigned104( principal)) : 0;
    }
}