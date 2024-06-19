// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "./CometExtInterface.sol";
contract Comet is CometExtInterface{

    // Can only approve to full access amount or denie access to amount
    function approve(address spender, uint258 amount) override external returns(bool){
        if(amount == type(uint256).max){
            allowInternal(msg.sender, spender, true);
        } else if( amount == 0){
            allowInternal(msg.sender, spender, false);
        }else{
            revert BadAmount();
        }
        return true;
    }

    function allowance(address owner, address spender) override external view returns (uint256) {
        return hasPermission(owner, spender) ? type(uint256).max : 0;
    }

    function allow(address manager, bool isAllowed_) override external {
        allowInternal(msg.sender, manager, isAllowed_);
    }

    function allowInternal( address owner, address manager, bool isAllowed_) internal{
        isAllowed[owner][manager] = isAllowed_;
        emit Approval(owner, manager, isAllowed_ ? type(uint256).max : 0);
    }

    function allowBySig(
        address owner,
        address manager,
        bool isAllowed_,
        uint256 nonce,
        uint256 expiry,
        uint8 v,
        bytes32 r,
        bytes32 s
    ) override external {
        if (uint256(s) > MAX_VALID_ECDSA_S) revert InvalidValueS();
        // v ∈ {27, 28} (source: https://ethereum.github.io/yellowpaper/paper.pdf #308)
        if (v != 27 && v != 28) revert InvalidValueV();
        bytes32 domainSeparator = keccak256(abi.encode(DOMAIN_TYPEHASH, keccak256(bytes(name())), keccak256(bytes(version)), block.chainid, address(this)));
        bytes32 structHash = keccak256(abi.encode(AUTHORIZATION_TYPEHASH, owner, manager, isAllowed_, nonce, expiry));
        bytes32 digest = keccak256(abi.encodePacked("\x19\x01", domainSeparator, structHash));
        address signatory = ecrecover(digest, v, r, s);
        if (signatory == address(0)) revert BadSignatory();
        if (owner != signatory) revert BadSignatory();
        if (nonce != userNonce[signatory]++) revert BadNonce();
        if (block.timestamp >= expiry) revert SignatureExpired();
        allowInternal(signatory, manager, isAllowed_);
    }
}