// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Stores vars used in Comet
contract CometStorage {
    struct UserBasic{
        int64 principal;  // Value of dollar inside the Compound
        uint64 baseTrackingIndex;  // similar to baseTrackingIndex; not in use
        uint64 baseTrackingAccrued;  // used by CometRewards to determine the amount of COMP to reward
        uint64 assetsIn;  // used by borrowers to know if a collateral is in use
        uint8 _reserved;  // Not used
    }

    uint64 internal baseSupplyIndex;  // it's an "exchange rate" to swap present value to principal value and vice versa
    uint64 internal baseBorrowIndex;  // Tracks the accumulation of debt
    uint64 internal trackingSupplyIndex;
    uint64 internal trackingBorrowIndex;
    uint104 internal totalSupplyBase;  // sum of all amount deposited by lenders
    uint104 internal totalBorrowBase;  // sum of all amount deposited by borrowers
    uint40 internal lastAccrualTime;  // updated @ Comet::accrueInternal()
    uint8 internal pauseFlags;
}