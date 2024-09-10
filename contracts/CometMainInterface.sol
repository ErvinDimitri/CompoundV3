// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "./CometCore.sol";

// Interface for Comet.sol
abstract contract CometMainInterface is CometCore{
    error Absurd();
    error AlreadyInitialized();
    error BadAsset();
    error BadDecimals();
    error BadDiscount();
    error BadMinimum();
    error BadPrice();
    error BorrowCFTooLarge();
    error BorrowTooSmall();
    error InsufficientReserves();
    error LiquidateCFTooLarge();
    error NotCollateralized();
    error NoSelfTransfer();
    error NotForSale();
    error NotLiquidatable();
    error Paused();
    error SupplyCapExceeded();
    error TimestampTooLarge();
    error TooManyAssets();
    error TooMuchSlippage();
    error TransferInFailed();
    error TransferOutFailed();
    error Unauthorized();

    event Supply( address indexed from, address indexed dst, uint amount);
    event Transfer( address indexed from, address indexed to, uint amount);
    event Withdraw( address indexed src, address indexed to, uint amount);

    event WithdrawReserves( address indexed to, uint amount);  // Withdrawn by governor

    event AbsorbCollateral( address indexed absorber, address indexed borrower, address indexed asset, uint collateralAbsorbed, uint usdValue);
    event BuyCollateral( address indexed buyer, address indexed asset, uint256 baseAmount, uint256 collateralAmount);
    event SupplyCollateral( address indexed from, address indexed dst, address indexed asset, uint amount);
    event TransferCollateral( address indexed src, address indexed dst, address indexed asset, uint amount);
    event WithdrawCollateral(address indexed src, address indexed to, uint amount);
    
    // Used in scroll
    event AbsorbDebt( address indexed absorber, address indexed account, uint256 basePaidOut, uint256 valueOfBasePaidOut);

    event PauseAction( bool supplyPaused, bool transferPaused, bool withdrawPaused, bool absorbPaused, bool buyPaused);

    function getAssetInfo( uint8 i) virtual public view returns( AssetInfo memory);
    function getUtilization() virtual public view returns(uint);
    function totalSupply() virtual external view returns(uint256);
    function totalBorrow() virtual external view returns(uint256);
    function isLiquidatable( address account) virtual public view returns(bool);
    function isTransferPaused() virtual public view returns(bool);
    function isAbsorbPaused() virtual public view returns (bool);
    function isBuyPaused() virtual public view returns (bool);
    function absorb(address absorber, address[] calldata accounts) virtual external;
    function buyCollateral( address asset, uint256 minAmount, uint256 baseAmount, address recipient) virtual external;
    function balanceOf( address account) virtual public view returns( uint256);
    function transfer(address dst, uint256 amount) virtual external returns(bool);
    function transferFrom( address src, address dst, uint256 amount) virtual external returns(bool);
    function getSupplyRate( uint utilization) virtual public view returns( uint64);
    function getBorrowRate( uint utilization) virtual public view returns( uint64);
    function getReserves() virtual public view returns(int);
    function quoteCollateral( address asset, uint baseAmount) virtual public view returns(uint);
    function getAssetInfoByAddress( address asset) virtual public view returns( AssetInfo memory);
    function getCollateralReserves( address asset) virtual public view returns(uint);
    function getPrice(address priceFeed) virtual public view returns (uint256);
    function numAssets() virtual external view returns(uint8);
    function baseScale() virtual external view returns(uint);
    function baseMinForRewards() virtual external view returns(uint);
    function baseTrackingSupplySpeed() virtual external view returns(uint);
    function baseTrackingBorrowSpeed() virtual external view returns(uint);
    function baseToken() virtual external view returns(address);
    function extensionDelegate() virtual external view returns(address);
    function baseTokenPriceFeed() virtual external view returns(address);
    function targetReserves() virtual external view returns(uint);
    function decimals() virtual external view returns(uint8);
    function accrueAccount( address account) virtual external;

}   