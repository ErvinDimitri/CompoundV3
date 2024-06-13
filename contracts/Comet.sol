// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "./CometMainInterface.sol";
contract Comet is CometMainInterface{


    // @return the utilization: ratio about the total amount borrowed from the supply pool in the protocol
    function getUtilization() override public view returns(uint){
        uint totalSupply_ = presentValueSupply( baseSupplyIndex, totalSupplyBase);
        uint totalBorrow_ = presentValueBorrow( baseBorrowIndex, totalBorrowBase);
        if( totalSupply_ == 0){
            return 0;
        }else{
            return totalBorrow_ * FACTOR_SCALE / totalSupply_;
        }

    }

    function mulFactor( uint n, uint factor) internal pure returns( uint){
        return n*factor/FACTOR_SCALE;
    }
}