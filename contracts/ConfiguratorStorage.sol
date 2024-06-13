// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "./CometConfiguration.sol";

// Store the configuration on structs
// Map the Comet proxy address to their configuration
contract ConfiguratorStorage is CometConfiguration{
    uint public version;
    mapping(address => Configuration) internal configuratorParams;  // Comet Proxy -> Configuration
    address public governor;
    mapping(address => address) public factory;  // CometProxy -> Comet Factory Contract
}