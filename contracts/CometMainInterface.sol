// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "./CometCore.sol";

// Interface for Comet.sol
abstract contract CometMainInterface is CometCore{

    function getUtilization() virtual public view returns(uint);
}