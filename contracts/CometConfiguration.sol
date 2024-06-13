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

    struct AssetConfig{
        address asset;
        address priceFeed;
        uint8 decimals;
        uint64 borrowCollateralFactor;  // ration between borrow amount vs collateral amount
        uint64 liquidationCollateralFactor;
        uint64 liquidationFactor;
        uint64 supplyCap;
    }
}