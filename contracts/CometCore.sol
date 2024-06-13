// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "./CometConfiguration.sol";
import "./CometMath.sol";
import "./CometStorage.sol";
abstract contract CometCore is CometConfiguration, CometStorage, CometMath{

    // depends on time/rate scales and not on base token
    uint64 internal constant BASE_INDEX_SCALE = 1e15;

    uint64 internal constant FACTOR_SCALE = 1e18;

    function presentValueSupply( uint64 baseSupplyIndex_, uint104 principalValue_) internal pure returns(uint256){
        return uint256( principalValue_) * baseSupplyIndex_ / BASE_INDEX_SCALE;
    }
    function presentValueBorrow (uint64 baseBorrowIndex_, uint104 principalValue_) internal pure returns(uint256){
        return uint256(principalValue_) * baseBorrowIndex_/ BASE_INDEX_SCALE;
    }
    
}