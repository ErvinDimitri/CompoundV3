// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "./CometConfiguration.sol";
import "./CometMath.sol";
import "./CometStorage.sol";
abstract contract CometCore is CometConfiguration, CometStorage, CometMath{

    // depends on time/rate scales and not on base token
    uint64 internal constant BASE_INDEX_SCALE = 1e15;

    uint64 internal constant FACTOR_SCALE = 1e18;

    // ------- PRESENT VALUE --------------
    // PresentValue() receives a signed value as parameter and returns a signed value
    function presentValue( int104 principalValue_) internal view returns(int256){
        if( principalValue_ >= 0){  // Supply balance
            return signed256( presentValueSupply( baseSupplyIndex, uint104( principalValue_)));
        }else{  // Borrower balance
            return -signed256( presentValueBorrow( baseBorrowIndex, uint104( -principalValue_)))
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
        return safe104( (presentValue_ * BASE_INDEX_SCALE + baseBorrowIndex_ -1) / baseBorrowIndex_);
    }
}