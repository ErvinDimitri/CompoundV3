// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "./CometCore.sol";

// Interface for Comet.sol
abstract contract CometMainInterface is CometCore{

    function getUtilization() virtual public view returns(uint);
    function totalSupply() virtual external view returns(uint256);
    function totalBorrow() virtual external view returns(uint256);
    function isTransferPaused() virtual public view returns(bool);
    function balanceOf( address account) virtual public view returns( uint256);
    function transfer(address dst, uint256 amount) virtual external returns(bool);
    function transferFrom( address src, address dst, uint256 amount) virtual external returns(bool);
}   