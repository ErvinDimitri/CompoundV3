// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Stores vars used in Comet
contract CometStorage {

    struct TotalsCollateral{
        uint128 totalSupplyAsset;
        uint128 _reserved;
    }
    struct UserBasic{
        int64 principal;  // Value of dollar inside the Compound; if > 0 ? lender : borrower (principal value of the user debt)
        uint64 baseTrackingIndex;  // similar to baseTrackingIndex; not in use
        uint64 baseTrackingAccrued;  // used by CometRewards to determine the amount of COMP to reward
        uint16 assetsIn;  // used by borrowers to know if a collateral is in use
        uint8 _reserved;  // Not used
    }

    struct UserCollateral{
        uint128 balance;  // Amount of collateral in a particular asset
        uint128 _reserved;  // Not used
    }

    struct LiquidatorPoints{  // Used by governance, to reward absorbers
        uint32 numAbsorbs;
        uint64 numAbsorbed;
        uint128 approxSpend;  // Gas spent
        uint32 _reserved;
    }

    uint64 internal baseSupplyIndex;  // it's an "exchange rate" to swap present value to principal value and vice versa
    uint64 internal baseBorrowIndex;  // Tracks the accumulation of debt
    uint64 internal trackingSupplyIndex;
    uint64 internal trackingBorrowIndex;
    uint104 internal totalSupplyBase;  // sum of all amount deposited by lenders
    uint104 internal totalBorrowBase;  // sum of all amount deposited by borrowers
    uint40 internal lastAccrualTime;  // updated @ Comet::accrueInternal()
    uint8 internal pauseFlags;

    mapping( address => TotalsCollateral) public totalsCollateral;  // Total of deposited collateral by asset
    mapping(address => mapping( address => bool)) public isAllowed;
    mapping(address=>uint) public userNonce; //Next expected nonce for an addr
    mapping( address => UserBasic) public userBasic;
    mapping( address => mapping( address => UserCollateral)) public userCollateral;  // Stores the collateral deposited on any of the assets( Comp, wBtc, wEth, Link, Uni)
    mapping( address => LiquidatorPoints) public liquidatorPoints;
}