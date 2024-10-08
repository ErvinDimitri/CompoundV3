// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "./CometCore.sol";

// Interface for Comet.sol
abstract contract CometExtInterface is CometCore{
    error BadAmount();
    error BadNonce();
    error BadSignatory();
    error InvalidValueS();
    error InvalidValueV();
    error SignatureExpired();

    function approve( address spender, uint256 amount) virtual external returns(bool);
    function name() virtual public view returns (string memory);
    function symbol() virtual external view returns (string memory);
    function allowance(address owner, address spender) virtual external view returns (uint256);
    function allow(address manager, bool isAllowed_) virtual external;
    function allowBySig(
        address owner,
        address manager,
        bool isAllowed_,
        uint256 nonce,
        uint256 expiry,
        uint8 v,
        bytes32 r,
        bytes32 s
    ) virtual external;
    function version() virtual external view returns (string memory);

    event Approval( address indexed owner, address indexed spender, uint256 amount);
}