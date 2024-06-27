// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "./CometCore.sol";

// Interface for Comet.sol
abstract contract CometMainInterface is CometCore{
    error Absurd();
    error BadAsset();
    error BadDecimals();
    error BadPrice();
    error BorrowCFTooLarge();
    error InsufficientReserves();
    error LiquidateCFTooLarge();
    error NoSelfTransfer();
    error NotForSale();
    error NotLiquidatable();
    error Paused();
    error TimestampTooLarge();
    error TooMuchSlippage();
    error TransferInFailed();
    error Unauthorized();

    event Supply( address indexed from, address indexed dst, uint amount);
    event Transfer( address indexed from, address indexed to, uint amount);
    event AbsorbCollateral( address indexed absorber, address indexed borrower, address indexed asset, uint collateralAbsorbed, uint usdValue);
    event AbsorbDebit( address indexed absorber, address indexed account, uint256 basePaidOut, uint256 valueOfBasePaidOut);
    event BuyCollateral( address indexed buyer, address indexed asset, uint256 baseAmount, uint256 collateralAmount);

    function getAssetInfo( uint8 i) virtual public view returns( AssetInfo memory);
    function getUtilization() virtual public view returns(uint);
    function totalSupply() virtual external view returns(uint256);
    function totalBorrow() virtual external view returns(uint256);
    function isLiquidatable( address account) virtual public view returns(bool);
    function isTransferPaused() virtual public view returns(bool);
    function absorb(address absorber, address[] calldata accounts) virtual external;
    function buyCollateral( address asset, uint256 minAmount, uint256 baseAmount, address recipient) virtual external;
    function balanceOf( address account) virtual public view returns( uint256);
    function transfer(address dst, uint256 amount) virtual external returns(bool);
    function transferFrom( address src, address dst, uint256 amount) virtual external returns(bool);
    function getSupplyRate( uint utilization) virtual public view returns( uint64);
    function getBorrowRate( uint utilization) virtual public view returns( uint64);

}   