// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Stores vars used in Comet
contract CometStorage {
    uint64 internal baseSupplyIndex;
    uint64 internal baseBorrowIndex;

    uint104 internal totalSupplyBase;
    uint104 internal totalBorrowBase;
}