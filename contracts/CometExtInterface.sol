// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "./CometCore.sol";

// Interface for Comet.sol
abstract contract CometExtInterface is CometCore{
    error BadAmount();

    function approve( address spender, uint256 amount) virtual external returns(bool);

}