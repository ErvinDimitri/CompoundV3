// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "./CometMainInterface.sol";
import "./ERC20.sol";
import "./IPriceFeed.sol";
contract Comet is CometMainInterface{

    /** Collateral asset configuration (packed) 
        AssetInfo = assetXX_a + assetXX_b
    **/

    uint256 internal immutable asset00_a;
    uint256 internal immutable asset00_b;
    uint256 internal immutable asset01_a;
    uint256 internal immutable asset01_b;
    uint256 internal immutable asset02_a;
    uint256 internal immutable asset02_b;
    uint256 internal immutable asset03_a;
    uint256 internal immutable asset03_b;
    uint256 internal immutable asset04_a;
    uint256 internal immutable asset04_b;
    uint256 internal immutable asset05_a;
    uint256 internal immutable asset05_b;
    uint256 internal immutable asset06_a;
    uint256 internal immutable asset06_b;
    uint256 internal immutable asset07_a;
    uint256 internal immutable asset07_b;
    uint256 internal immutable asset08_a;
    uint256 internal immutable asset08_b;
    uint256 internal immutable asset09_a;
    uint256 internal immutable asset09_b;
    uint256 internal immutable asset10_a;
    uint256 internal immutable asset10_b;
    uint256 internal immutable asset11_a;
    uint256 internal immutable asset11_b;
    uint256 internal immutable asset12_a;
    uint256 internal immutable asset12_b;
    uint256 internal immutable asset13_a;
    uint256 internal immutable asset13_b;
    uint256 internal immutable asset14_a;
    uint256 internal immutable asset14_b;

    constructor( Configuration memory config){
        // Set asset info
        numAssets = uint8(config.assetConfigs.length);

        (asset00_a, asset00_b) = getPackedAssetInternal(config.assetConfigs, 0);
        (asset01_a, asset01_b) = getPackedAssetInternal(config.assetConfigs, 1);
        (asset02_a, asset02_b) = getPackedAssetInternal(config.assetConfigs, 2);
        (asset03_a, asset03_b) = getPackedAssetInternal(config.assetConfigs, 3);
        (asset04_a, asset04_b) = getPackedAssetInternal(config.assetConfigs, 4);
        (asset05_a, asset05_b) = getPackedAssetInternal(config.assetConfigs, 5);
        (asset06_a, asset06_b) = getPackedAssetInternal(config.assetConfigs, 6);
        (asset07_a, asset07_b) = getPackedAssetInternal(config.assetConfigs, 7);
        (asset08_a, asset08_b) = getPackedAssetInternal(config.assetConfigs, 8);
        (asset09_a, asset09_b) = getPackedAssetInternal(config.assetConfigs, 9);
        (asset10_a, asset10_b) = getPackedAssetInternal(config.assetConfigs, 10);
        (asset11_a, asset11_b) = getPackedAssetInternal(config.assetConfigs, 11);
        (asset12_a, asset12_b) = getPackedAssetInternal(config.assetConfigs, 12);
        (asset13_a, asset13_b) = getPackedAssetInternal(config.assetConfigs, 13);
        (asset14_a, asset14_b) = getPackedAssetInternal(config.assetConfigs, 14);
    }

    //     getPacketAssetInternal()                             getAssetInfo()
    // AssetConfig -> assetXX_a, assetXX_b       assetXX_a, assetXX_b -> AssetInfo   assetXX_a, assetXX_b store the  AssetInfo values
    // Pack one asset at time
    function getPackedAssetInternal(AssetConfig[] memory assetConfigs, uint8 i) internal view return(uint256, uint256){
        AssetConfig memory assetConfig;
        if( i<assetConfig.length){
            assembly{  // store in assetConfig = assetConfigs[i]
                assetConfig := mload( add( add( assetConfigs, 0x20), mul( i, 0x20)))
            }
        }else{
            return (0,0);
        }
        //Extract data from assetConfig
        address asset = assetConfig.asset;
        address priceFeed = assetConfig.priceFeed;
        uint8 decimals_ = assetConfig.decimals;

        if(asset == address(0)){
            return (0,0);
        }
        // Price feed must have 8 decimals
        if( IPriceFeed(priceFeed).decimals() != PRICE_FEED_DECIMALS) revert BadDecimals();
        if( ERC20( asset).decimals() != decimals_) revert BadDecimals();
    
        // borrowCollateralFactor < liquidateCollateralFactor <= MAX_COLLATERAL_FACTOR (FACTOR SCALE)
        if( assetConfig.borrowCollateralFactor >= assetConfig.liquidateCollateralFactor) revert BorrowCFTooLarge();
        if( assetConfig.liquidateCollateralFactor > MAX_COLLATERAL_FACTOR) revert LiquidateCFTooLarge();

        unchecked{
            // keep 4 decimals for each factor; The factors are stored in 4 decimals; when the asset is needed, it is scaled back to 18 decimals
            uint64 descale = FACTOR_SCALE/1e4;  // descale = 1e14
            uint16 borrowCollateralFactor = uint16( assetConfig.borrowCollateralFactor / descale);
            uint16 liquidateCollateralFactor = uint16( assetConfig.liquidateCollateralFactor / descale);
            uint16 liquidationFactor = uint16( assetConfig.liquidationFactor / descale);

            if( borrowCollateralFactor >= liquidateCollateralFactor) revert BorrowCFTooLarge();

            uint64 supplyCap = uint64( assetConfig.supplyCap / (10 ** decimals_));

            uint256 word_a = (  // liquidationFactor | liquidateCollateralFactor | borrowCollateralFactor | asset
                                uint160(asset) << 0 |
                                uint256(borrowCollateralFactor) << 160 |
                                uint256( liquidateCollateralFactor) <<176|
                                uint256( liquidationFactor) << 192
                            );
            uint256 word_b = (
                                uint160(priceFeed) << 0 |
                                uint256(decimals_) << 160 |
                                uint256(supplyCap) << 168
                            );
            return (word_a, word_b);
        }
    }
    

    // first get the words for the specific asset then extract the data enpacked in the words
    function getAssetInfo( uint8 i) override public view returns( AssetInfo memory){
        if( i> numAssets) revert BadAsset();

        uint256 word_a;
        uint256 word_b;

        if (i == 0) {
            word_a = asset00_a;
            word_b = asset00_b;
        } else if (i == 1) {
            word_a = asset01_a;
            word_b = asset01_b;
        } else if (i == 2) {
            word_a = asset02_a;
            word_b = asset02_b;
        } else if (i == 3) {
            word_a = asset03_a;
            word_b = asset03_b;
        } else if (i == 4) {
            word_a = asset04_a;
            word_b = asset04_b;
        } else if (i == 5) {
            word_a = asset05_a;
            word_b = asset05_b;
        } else if (i == 6) {
            word_a = asset06_a;
            word_b = asset06_b;
        } else if (i == 7) {
            word_a = asset07_a;
            word_b = asset07_b;
        } else if (i == 8) {
            word_a = asset08_a;
            word_b = asset08_b;
        } else if (i == 9) {
            word_a = asset09_a;
            word_b = asset09_b;
        } else if (i == 10) {
            word_a = asset10_a;
            word_b = asset10_b;
        } else if (i == 11) {
            word_a = asset11_a;
            word_b = asset11_b;
        } else if (i == 12) {
            word_a = asset12_a;
            word_b = asset12_b;
        } else if (i == 13) {
            word_a = asset13_a;
            word_b = asset13_b;
        } else if (i == 14) {
            word_a = asset14_a;
            word_b = asset14_b;
        } else {
            revert Absurd();
        }
        // word_a
        address asset = address( uint160(word_a & type(uint160).max));
        uint64 rescale = FACTOR_SCALE/1e4;  //in getPackedAssetInternal, the factors were reduced to have only 4 decimals, now with the rescale, we're scaling it back to have 18 decimals
        uint64 borrowCollateralFactor = uint64( ((word_a >> 160) & type(uint16).max) * rescale);
        uint64 liquidateCollateralFactor = uint64(((word_a>>176) & type(uint16).max) * rescale);
        uint64 liquidationFactor = uint64( ((word_a >> 192) & type(uint16).max) * rescale);

        // word_b
        address priceFeed = address( uint160( word_b & type(uint160).max));
        uint8 decimals_ = uint8( (word_b >> 160) & type(uint8).max);
        uint64 scale = uint64( 10 ** decimals_);  // @note :WHY?
        uint120 supplyCap = uint120( ((word_b >> 168) & type(uint64).max) * scale);
    
        return AssetInfo({
            offset:i,
            asset: asset,
            priceFeed: priceFeed,
            scale: scale,
            borrowCollateralFactor: borrowCollateralFactor,
            liquidateCollateralFactor: liquidateCollateralFactor,
            liquidationFactor: liquidationFactor,
            supplyCap: supplyCap
        });
    }

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
    function getNowInternal() override internal view returns(uint40){
        if( block.timestamp >= 2**40) revert TimestampTooLarge();
        return uint40(block.timestamp);
    }
    
    function isTransferPaused() override public view returns(bool){
        return toBool( pauseFlags & (uint8(1) << PAUSE_TRANSFER_OFFSET));
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

    // can transfer base asset or collateral
    function transferInternal( address operator, address src, address dst, address baseToken, uint256 amount) internal{
       if(isTransferPaused()) revert Paused();
       if (!hasPermission( src, operator)) revert Unauthorized();
       if( src==dst) revert NoSelfTransfer();
       if( asset == baseToken){
            if( amount == type(uint256).max){
                amount=balanceOf(src);
            }
            return transferBase( src, dst, amount);
       }else{
        return transferCollateral( src, dst, asset,safe128(amount));
       }
    }

    // Responsable from calling ComitExt.sol f()
    fallback() external payable{
        address delegate = extensionDelegate;
        assembly{
            calldatacopy(0,0,calldatasize())
            let result := delegatecall( gas(), delegate, 0 calldatasize(),0,0)
            returndatacopy(0,0,returndatasize())
            switch result
            case 0 {revert( 0, returndatasize())}
            default {return( 0, returndatasize())}
        }
    }
}