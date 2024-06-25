// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;


// Configuration's vars to deploy Comet's contracts
contract CometConfiguration{
    struct ExtConfiguration{
        bytes32 name32;
        bytes32 symbol32;
    }

    struct Configuration{
        address pauseGuardian;
        address baseToken;
        address baseTokenPriceFeed;
        address extensionDelegate;

        uint64 supplyKink;
        uint64 supplyPerYearInterestRateSlopeLow;
        uint64 supplyPerYearInterestRateSlopeHigh;
        uint64 supplyPerYearInterestRateBase;

        uint64 borrowKink;
        uint64 borrowPerYearInterestRateSlopeLow;
        uint64 borrowPerYearInterestRateSlopeHigh;
        uint64 borrowPerYearInterestRateBase;
        
        uint64 storeFromPriceFactor;
        uint64 trackingIndexScale;
        uint64 baseTrackingSupplySpeed;
        uint64 baseTrackingBorrowSpeed;
        uint64 baseMinForRewards;
        uint64 baseBorrowMin;
        uint64 targetReserves;

        AssetConfig[] assetConfigs;
    }

    // Uses 2 slots so the values are packet into 2 uint vars: assetXX_a and assetXX_b
    struct AssetConfig{
        // Slot 1 (256 bits)
        address asset;
        address priceFeed;  // Price in USD of the asset
        uint8 decimals;
        // Slot 2 (256 bits)
        uint64 borrowCollateralFactor;  // ration between borrow amount vs collateral amount
        uint64 liquidateCollateralFactor;  // Loan To Valur(LTV) at which the loan gets liquidated
        uint64 liquidationFactor;  // Liquidation penalty=1-liquidationFactor | encodes liquidation penalty
        uint128 supplyCap;
    }
}