// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract IPriceFeed{
    function decimals() external view returns(uint8);
    function description() external view returns(string memory);
    function version() external view returns(uint256);
    function latestRoundData() external view returns(
        uint80 roundId,
        int256 answer,  // @note WHY
        uint256 startedAt,
        uint256 updatedAt,
        uint80 answeredInRound
    );
}