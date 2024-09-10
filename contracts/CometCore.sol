// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "./CometConfiguration.sol";
import "./CometMath.sol";
import "./CometStorage.sol";
abstract contract CometCore is CometConfiguration, CometStorage, CometMath{

    uint8 internal constant MAX_BASE_DECIMALS=18;
    uint8 internal constant MAX_ASSETS=15;  // In binary: 1111 where each bit represents an asset
    uint64 internal constant MAX_COLLATERAL_FACTOR = FACTOR_SCALE;  // 1:1
    uint8 internal constant PAUSE_SUPPLY_OFFSET = 0;
    uint8 internal constant PAUSE_TRANSFER_OFFSET = 1;
    uint8 internal constant PAUSE_WITHDRAW_OFFSET = 2;
    uint8 internal constant PAUSE_ABSORB_OFFSET = 3;
    uint8 internal constant PAUSE_BUY_OFFSET = 4;
    
    uint8 internal constant PRICE_FEED_DECIMALS = 8;

    // depends on time/rate scales and not on base token
    uint64 internal constant BASE_INDEX_SCALE = 1e15;
    uint64 internal constant BASE_ACCRUAL_SCALE = 1e6;

    uint64 internal constant FACTOR_SCALE = 1e18;

    uint64 internal constant SECONDS_PER_YEAR = 31_536_000;
    uint64 internal constant PRICE_SCALE = uint64(10 ** PRICE_FEED_DECIMALS);
    
    struct AssetInfo{  // From the the same from CometConfiguration.sol
        uint8 offset;
        address asset;
        address priceFeed;
        uint64 scale;
        uint64 borrowCollateralFactor;  // Amount that can be borrowed (%)
        uint64 liquidateCollateralFactor;   // Point when the collateral gets liquidated (%)
        uint64 liquidationFactor;  // Liquidation penality = 1 - liquidationFactor | A fee to pay for being liquidated
        uint128 supplyCap;
    } 
    
    function hasPermission( address owner, address manager) public view returns(bool){
        return owner==manager || isAllowed[owner][manager];
    }

    // ------- PRESENT VALUE --------------
    // PresentValue() receives a signed value as parameter and returns a signed value
    function presentValue( int104 principalValue_) internal view returns(int256){
        if( principalValue_ >= 0){  // Supply balance
            return signed256( presentValueSupply( baseSupplyIndex, uint104( principalValue_)));
        }else{  // Borrower balance
            return -signed256( presentValueBorrow( baseBorrowIndex, uint104( -principalValue_)));
        }
    }
    function presentValueSupply( uint64 baseSupplyIndex_, uint104 principalValue_) internal pure returns(uint256){
        return uint256( principalValue_) * baseSupplyIndex_ / BASE_INDEX_SCALE;
    }
    function presentValueBorrow (uint64 baseBorrowIndex_, uint104 principalValue_) internal pure returns(uint256){
        return uint256(principalValue_) * baseBorrowIndex_/ BASE_INDEX_SCALE;
    }
    
    // -------- PRINCIPAL VALUE -----------
    // PrincipalValue() receives a signed value as parameter and returns a signed value
    function principalValue( int256 presentValue_) internal view returns( int104){
        if( presentValue_ >= 0){
            return signed104( principalValueSupply( baseSupplyIndex, uint256( presentValue_)));
        }else{
            return -signed104( principalValueBorrow( baseBorrowIndex, uint256( -presentValue_)));
        }
    }
    function principalValueSupply( uint64 baseSupplyIndex_, uint256 presentValue_) internal pure returns(uint104){
        return safe104( (presentValue_ * BASE_INDEX_SCALE) / baseSupplyIndex_);
    }

    function principalValueBorrow( uint64 baseBorrowIndex_, uint256 principalValue_) internal pure returns(uint104){
        return safe104( (principalValue_ * BASE_INDEX_SCALE + baseBorrowIndex_ -1) / baseBorrowIndex_);
    }
}