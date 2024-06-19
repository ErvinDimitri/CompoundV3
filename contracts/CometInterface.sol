// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "./CometMainInterface.sol";
import "./CometExtInterface.sol";
// Joins both interfaces (CometMainInterface and CometExtInterface) into a single Interface
abstract contract CometInterface is CometMainInterface, CometExtInterface{}