// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "./CometMainInterface.sol";
import "./ERC20.sol";
import "./IPriceFeed.sol";
contract Comet is CometMainInterface{

    /** Collateral asset configuration (packed) 
        AssetInfo = assetXX_a + assetXX_b
    **/
    // number of assets the protocol supports
    uint8 public override immutable numAssets;
    uint public override immutable baseScale;
    uint public override immutable baseMinForRewards;
    uint public override immutable baseTrackingSupplySpeed;  // Reward per unit of time
    uint public override immutable baseTrackingBorrowSpeed;  // Reward per unit of time
    address public override immutable baseToken;
    address public override immutable extensionDelegate;
    address public override immutable baseTokenPriceFeed;
    uint public override immutable targetReserves;
    uint8 public override immutable decimals;

    uint public override immutable supplyKink;  //The point in the supply rates separating the low interest rate slope and the high interest rate slope (factor)
    uint public override immutable borrowKink;  //The point in the borrow rate separating the low interest rate slope and the high interest rate slope 

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
        uint8 decimals_=ERC20( config.baseToken).decimals();
        if( decimals_ >MAX_BASE_DECIMALS) revert BadDecimals();
        if(config.storeFromPriceFactor > FACTOR_SCALE) revert BadDiscount();
        if(config.assetConfigs.length > MAX_ASSETS) revert TooManyAssets();
        if(config.baseMinForRewards ==0) revert BadMinimum();
        if(IPriceFeed( config.baseTokenPriceFeed).decimals() != PRICE_FEED_DECIMALS) revert BadDecimals();
        unchecked{
            supplyKink = config.supplyKink;
            borrowKink = config.borrowKink;
            targetReserves = config.targetReserves;
            baseMinForRewards = config.baseMinForRewards;
            baseTrackingSupplySpeed = config.baseTrackingSupplySpeed;
            baseTrackingBorrowSpeed = config.baseTrackingBorrowSpeed;
            baseToken = config.baseToken;
            extensionDelegate = config.extensionDelegate;
            baseTokenPriceFeed = config.baseTokenPriceFeed;
            decimals = decimals_;
            baseScale = uint64( 10 ** decimals_);
        }
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
    function getPackedAssetInternal(AssetConfig[] memory assetConfigs, uint8 i) internal view returns(uint256, uint256){
        AssetConfig memory assetConfig;
        if( i<assetConfigs.length){
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

    function getAssetInfoByAddress( address asset) override public view returns( AssetInfo memory){
        for(uint8 i=0; i<numAssets;){
            AssetInfo memory assetInfo = getAssetInfo(i);
            if( assetInfo.asset == asset){
                return assetInfo;
            }
            unchecked{ i++;}
        }
        revert BadAsset();
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
    function mulPrice(uint n, uint price, uint64 fromScale) internal pure returns (uint) {
        return n * price / fromScale;
    }
    function divBaseWei(uint n, uint baseWei) internal view returns (uint) {
        return n * baseScale / baseWei;
    }

    function divPrice(uint n, uint price, uint64 toScale) internal pure returns (uint) {
        return n * toScale / price;
    }
    // Since assetsIn stores the flags(1) for what assets are being used as collateral
    // This f() checks if the borrower holds a particular asset
    function isInAsset( uint16 assetsIn, uint8 assetOffset) internal pure returns(bool){
        return (assetsIn & (uint16(1) << assetOffset) != 0);
    }

    // Change state if the user has or not the asset
    function updateAssetsIn(
        address account,
        AssetInfo memory assetInfo,
        uint128 initialUserBalance,
        uint128 finalUserBalance
    ) internal{
        if( initialUserBalance == 0 && finalUserBalance != 0){
            userBasic[account].assetsIn |= (uint16(1) << assetInfo.offset);
        } else if( initialUserBalance != 0 && finalUserBalance == 0){
            userBasic[account].assetsIn &= ~(uint16(1) << assetInfo.offset);
        }
    }
    function signedMulPrice(int n, uint price, uint64 fromScale) internal pure returns (int) {
        return n * signed256(price) / int256(uint256(fromScale));
    }
    // @return the timestamp in uint40
    function getNowInternal() virtual internal view returns(uint40){
        if( block.timestamp >= 2**40) revert TimestampTooLarge();
        return uint40(block.timestamp);
    }
    
     function isSupplyPaused() override public view returns (bool) {
        return toBool(pauseFlags & (uint8(1) << PAUSE_SUPPLY_OFFSET));
    }
    function isTransferPaused() override public view returns(bool){
        return toBool( pauseFlags & (uint8(1) << PAUSE_TRANSFER_OFFSET));
    }

    function isAbsorbPaused() override public view returns (bool) {
        return toBool(pauseFlags & (uint8(1) << PAUSE_ABSORB_OFFSET));
    }

    function isBuyPaused() override public view returns (bool) {
        return toBool(pauseFlags & (uint8(1) << PAUSE_BUY_OFFSET));
    }

    function doTransferIn( address asset, address from, uint amount) internal{
        bool success = ERC20(asset).transferFrom( from, address(this), amount);
        if( !success) revert TransferInFailed();
    }

    function doTransferOut( address asset, address to, uint amount) internal{
        bool success = ERC20(asset).transfer(to, amount);
        if(!success) revert TransferOutFailed();
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
            if( totalSupplyBase >= baseMinForRewards){  // TrackingSupplyIndex will not increase when the totalSupplyBase is less than the baseMinForRewards, avoiding the trackingSupplyIndex to overflow quickly
                trackingSupplyIndex += safe64( divBaseWei(baseTrackingSupplySpeed * timeElapsed, totalSupplyBase));                
            }
            if( totalBorrowBase >= baseMinForRewards){
                trackingBorrowIndex += safe64(divBaseWei( baseTrackingBorrowSpeed * timeElapsed, totalBorrowBase));
            }
            lastAccrualTime = now_;
        }
    }

    // Used by CometRewards
    function accrueAccount( address account) override external{
        accrueInternal();
        UserBasic memory basic = userBasic[account];
        updateBasePrincipal( account, basic, basic.principal);
    }

    /* F() called when a user deposits
       Updates the principal value of the user: 
        1.convert the principal value to present value and sum with deposited amount
        2. Convert back to principal value
       Update the totalizers vars: totalSupplyBase and totalBorrowBase

       @return The per second supply rate at `utilization`
    */    
    function getSupplyRate( uint utilization) override public view returns( uint64){
        if( utilization <= supplyKink){
            // interestRateBase + interestRateSlopeLow * utilization
            return safe64( supplyPerSecondInterestRateBase + mulFactor( supplyPerSecondInterestRateSlopeLow, utilization));
        }else{
            // interestRateBase + interestRateSlopeLow * kink + interestRateSlopeHigh * (utilization - kink)
            return safe64( supplyPerSecondInterestRateBase + mulFactor( supplyPerSecondInterestRateSlopeLow, supplyKink) + mulFactor( supplyPerSecondInterestRateSlopeHigh, utilization-kink));
        }
    }

    // @return The per second borrow rate at `utilization`
    function getBorrowRate( uint utilization) override public view returns( uint64){
        if( utilization <= borrowKink){
            //interestRateBase + interestRateSlopeLow *utilization
            return safe64( borrowPerSecondInterestRateBase + mulFactor( borrowPerSecondInterestRateSlopeLow, utilization));
        }else{
            // interestRateBase + interestRateSlopeLow * kink + interestRateSlopeHigh * (utilization-kink)
            return safe64( borrowPerSecondInterestRateBase + mulFactor( borrowPerSecondInterestRateSlopeLow, kink) + mulFactor( borrowPerSecondInterestRateSlopeHigh, utilization-borrowKink));
        }
    }

    // ToDo To implement
    function repayAndSupplyAmount( int104 oldPrincipal, int104 newPrincipal) internal pure returns( uint104, uint104){

    }

    // 1. Calculates the amount of rewards since last time the user interacted with the protocol
    // 2.Updates userbasic.baseTrackingAccrued and userBasic.baseTrackingIndex
    function updateBasePrincipal( address account, UserBasic memory userBasic, int104 principalNew) internal{
        int104 principal = basic.principal;
        basic.principal = principalNew;

        if( principal >= 0){  // For lenders
            uint indexDelta = uint256( trackingSupplyIndex - basic.baseTrackingIndex);
            basic.baseTrackingAccrued += safe64(uint104(principal) * indexDelta /trackingIndexScale / accrualDescaleFactor);
        }else{  // For Borrowers
            uint indexDelta = uint256( trackingBorrowIndex - basic.baseTrackingIndex);
            basic.baseTrackingAccrued += safe64(uint104( -principal) * indexDelta/ trackingIndexScale/ accrualDescaleFactor);
        }

        if(principalNew>=0){
            basic.baseTrackingIndex = trackingSupplyIndex;
        }else{
            basic.baseTrackingIndex = trackingBorrowIndex;
        }
        userBasic[account] = basic;
    }

    function supply(address asset, uint amount) override external{
        return supplyInternal( msg.sender, msg.sender, msg.sender, asset, amount);
    }
    function supplyTo(address dst, address asset, uint amount) override external{
        return supplyInternal( msg.sender, msg.sender, dst, asset, amount);
    }
    function supplyFrom(address from, address dst, address asset, uint amount) override external{
        return supplyInternal( msg.sender, from, dst, asset, amount);
    }
    // Lend Base token into protocol, in case amount == uint256.max, it will be used as a flag to repay the borrow amount
    // In case it is not the base token, it will supply the collateral
    function supplyInternal(address operator, address from, address dst, address asset, uint amount) internal{
        if( isSupplyPaused()) revert Paused();
        if( !hasPermission(from, operator)) revert Unauthorized();

        if(asset == baseToken){
            if( amount == type(uint256).max){
                amount = borrowBalanceOf(dst);
            }
            return supplyBase( from, dst, amount);
        }else{
            return supplyCollateral( from, dst, asset, safe128(amount));
        }
    }
    function supplyBase( address from, address dst, uint256 amount) internal{
        doTransferIn( baseToken, from, amount);

        accrueInternal();

        UserBasic memory dstUser = userBasic[dst];
        int104 dstPrincipal = dstUser.principal;
        int256 dstBalance = presentValue(dstPrincipal) + signed256( amount);
        int104 dstPrincipalNew = principalValue(dstBalance);

        (uint104 repayAmount, uint104 supplyAmount) = repayAndSupplyAmount( dstPrincipal, dstPrincipalNew);

        totalSupplyBase += supplyAmount;
        totalBorrowBase -= repayAmount;

        updateBasePrincipal( dst, dstUser, dstPrincipalNew);

        emit Supply( from, dst, amount);

        if( supplyAmount > 0){
            emit Transfer( address(0), dst, presentValueSupply( baseSupplyIndex, supplyAmount));
        }
    }

    function supplyCollateral( address from, address dst, address asset, uint128 amount) internal{
        doTransferIn( asset, from, amount);

        AssetInfo memory assetInfo = getAssetInfoByAddress(asset);
        TotalsCollateral memory totals = totalsCollateral[asset];
        totals.totalSupplyAsset += amount;
        if( totals.totalSupplyAsset > assetInfo.supplyCap) revert SupplyCapExceeded();

        uint128 dstCollateral = userCollateral[dst][asset].balance;
        uint128 dstCollateralNew = dstCollateral + amount;

        totalsCollateral[asset] =totals;
        userCollateral[dst][asset].balance = dstCollateralNew;

        updateAssetsIn( dst, assetInfo, dstCollateral, dstCollateralNew);

        emit SupplyCollateral(from, dst, asset, amount);
    }

    // Get lender's balance; It increases over time as long as utilization doesnt become 0
    function balanceOf( address account) override public view returns( uint256){
        (uint64 baseSupplyIndex_, ) = accruedInterestIndices( getNowInternal() - lastAccrualTime);
        int104 principal = userBasic[account].principal;
        return principal > 0 ? presentValueSupply( baseSupplyIndex_, unsigned104( principal)) : 0;
    }

    /**
     * GET BORROW's balance
     * @notice Query the current negative base balance of an account or zero
     * @dev Note: uses updated interest indices to calculate
     * @param account The account whose balance to query
     * @return The present day base balance magnitude of the account, if negative
     */
    function borrowBalanceOf(address account) override public view returns (uint256) {
        (, uint64 baseBorrowIndex_) = accruedInterestIndices(getNowInternal() - lastAccrualTime);
        int104 principal = userBasic[account].principal;
        return principal < 0 ? presentValueBorrow(baseBorrowIndex_, unsigned104(-principal)) : 0;
    }

    // Calculate present value of the total USDC deposited
    function totalSupply() override external view returns(uint256){
        (uint64 baseSupplyIndex_, ) = accruedInterestIndices( getNowInternal() - lastAccrualTime);
        return presentValueSupply( baseSupplyIndex_, totalSupplyBase);
    }

    // Calculate the present value of the total USDC borrowed (accrued interest is included)
    function totalBorrow() override external view returns( uint256){
        (, uint64 baseBorrowIndex_) = accruedInterestIndices( getNowInternal() - lastAccrualTime);
        return presentValueBorrow( baseBorrowIndex_, totalBorrowBase);
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
    function transferInternal( address operator, address src, address dst, address asset, uint256 amount) internal{
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

    // ToDo To implement
    function transferBase( address src, address dst, uint256 amount) internal{

    }

    // ToDo to implement
    function transferCollateral( address src, address dst, address asset, uint128 amount) internal{

    }
    function isLiquidatable( address account) override public view returns(bool){
        int104 principal = userBasic[account].principal;
        if( principal>=0){
            return false;  // Means that it is not a borrower
        }
        uint16 assetsIn = userBasic[account].assetsIn;
        int liquidity = signedMulPrice(  // Calculate the borrow amount in USD, it start negative
            presentValue(principal),
            getPrice(baseTokenPriceFeed),
            uint64(baseScale)
        );

        for( uint8 i=0; i<numAssets;){
            if( isInAsset( assetsIn, i)){
                if(liquidity >= 0){  // checks if the amount of collateral sumed until now is greater than the borrow amount 
                    return false;
                }

                AssetInfo memory asset = getAssetInfo(i);
                uint newAmount = mulPrice(  // balance of the asset's collateral * price in USD
                    userCollateral[account][asset.asset].balance,
                    getPrice(asset.priceFeed),
                    asset.scale
                );
                liquidity += signed256( mulFactor(  // each collateral asset is weight according to its liquidateCollateralFactor
                    newAmount,
                    asset.liquidateCollateralFactor
                ));
            }
            unchecked{ i++;}
        }
        return liquidity < 0;  // it continues negative, isLiquidatable
    }

    // Liquidates a list of accounts.
    function absorb(address absorber, address[] calldata accounts) override external{
        if( isAbsorbPaused()) revert Paused();

        uint256 startGas = gasleft();
        accrueInternal();

        for(uint256 i=0; i<accounts.length;){
            absorbInternal( absorber, accounts[i]);
            unchecked{i++;}
        }

        uint256 gasUsed = startGas - gasleft();
        LiquidatorPoints memory points = liquidatorPoints[ absorber];
        points.numAbsorbs++;
        points.numAbsorbed += safe64( accounts.length);
        points.approxSpend += safe128( gasUsed * block.basefee);
        liquidatorPoints[absorber] = points;
    }

    function absorbInternal( address absorber, address account) internal{
        if( !isLiquidatable(account)) revert NotLiquidatable();

        UserBasic memory accountUser = userBasic[account];
        int104 oldPrincipal = accountUser.principal;
        int256 oldBalance = presentValue( oldPrincipal);
        uint16 assetsIn = accountUser.assetsIn;

        uint256 basePrice = getPrice( baseTokenPriceFeed);
        uint deltaValue = 0;  // stores the sum of account's all assets value based on LiquidationFactor

        for( uint8 i=0; i<numAssets;){
            // Reset the user's collateral on each asset
            if( isInAsset(assetsIn, i)){
                AssetInfo memory assetInfo = getAssetInfo(i);
                address asset = assetInfo.asset;
                uint128 seizeAmount = userCollateral[account][asset].balance;
                userCollateral[account][asset].balance = 0;
                totalsCollateral[asset].totalSupplyAsset -= seizeAmount;

                // value = asset amount in usdc
                uint256 value = mulPrice( seizeAmount, getPrice(assetInfo.priceFeed), assetInfo.scale);
                // deltaValue = sum of collaterals for penalties
                deltaValue += mulFactor( value, assetInfo.liquidationFactor);

                emit AbsorbCollateral( absorber, account, asset, seizeAmount, value);
            }
            unchecked{ i++;}
        }
        // convert to usd
        uint256 deltaBalance = divPrice( deltaValue, basePrice, uint64(baseScale));
        int256 newBalance = oldBalance + signed256( deltaBalance);

        // After liquidation, the borrower becomes the supplyer, so in case the balance is still negative, it's set to zero
        if( newBalance < 0){
            newBalance = 0;
        }

        int104 newPrincipal = principalValue( newBalance);
        updateBasePrincipal( account, accountUser, newPrincipal);

        userBasic[account].assetsIn = 0;

        (uint104 repayAmount, uint104 supplyAmount) = repayAndSupplyAmount( oldPrincipal, newPrincipal);

        totalSupplyBase += supplyAmount;
        totalBorrowBase -= repayAmount;

        uint256 basePaidOut = unsigned256( newBalance - oldBalance);
        uint256 valueOfBasePaidOut = mulPrice( basePaidOut, basePrice, uint64( baseScale));
        emit AbsorbDebt( absorber, account, basePaidOut, valueOfBasePaidOut);

        if(newPrincipal > 0){
            emit Transfer( address(0), account, presentValueSupply( baseSupplyIndex, unsigned104(newPrincipal)));
        }
    }

    function buyCollateral( address asset, uint256 minAmount, uint256 baseAmount, address recipient) override external{
        if( isBuyPaused()) revert Paused();

        int reserves = getReserves();
        if( reserves >= 0 && uint(reserves) >= targetReserves) revert NotForSale();

        doTransferIn( baseToken, msg.sender, baseAmount);

        uint256 collateralAmount = quoteCollateral( asset, baseAmount);
        if( collateralAmount < minAmount) revert TooMuchSlippage();
        if( collateralAmount > getCollateralReserves( asset)) revert InsufficientReserves();
        
        doTransferOut( asset, recipient, safe128( collateralAmount));
        emit BuyCollateral( msg.sender, asset, baseAmount, collateralAmount);
    }

    function getCollateralReserves( address asset) override public view returns(uint){
        return ERC20(asset).balanceOf( address(this)) - totalsCollateral[asset].totalSupplyAsset;
    }
    function getReserves() override public view returns(int){
        (uint64 baseSupplyIndex_, uint64 baseBorrowIndex_) = accruedInterestIndices( getNowInternal() - lastAccrualTime);
        uint balance = ERC20(baseToken).balanceOf( address(this));
        uint totalSupply_ = presentValueSupply(baseSupplyIndex_, totalSupplyBase);
        uint totalBorrow_ = presentValueBorrow( baseBorrowIndex_, totalBorrowBase);
        return signed256(balance) - signed256(totalSupply_) + signed256(totalBorrow_);
    }

    function getPrice(address priceFeed) override public view returns (uint256) {
        (, int price, , , ) = IPriceFeed(priceFeed).latestRoundData();
        if (price <= 0) revert BadPrice();
        return uint256(price);
    }
    function quoteCollateral( address asset, uint baseAmount) override public view returns(uint){
        AssetInfo memory assetInfo = getAssetInfoByAddress( asset);
    }
    // Responsable from calling ComitExt.sol f()
    fallback() external payable{
        address delegate = extensionDelegate;
        assembly{
            calldatacopy(0,0,calldatasize())
            let result := delegatecall( gas(), delegate, 0, calldatasize(),0,0)
            returndatacopy(0,0,returndatasize())
            switch result
            case 0 {revert( 0, returndatasize())}
            default {return( 0, returndatasize())}
        }
    }
}