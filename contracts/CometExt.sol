// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "./CometExtInterface.sol";
contract Comet is CometExtInterface{

   /// @notice The major version of this contract
    string public override constant version = "0";

    /** Internal constants **/

    /// @dev The EIP-712 typehash for the contract's domain
    bytes32 internal constant DOMAIN_TYPEHASH = keccak256("EIP712Domain(string name,string version,uint256 chainId,address verifyingContract)");

    /// @dev The EIP-712 typehash for allowBySig Authorization
    bytes32 internal constant AUTHORIZATION_TYPEHASH = keccak256("Authorization(address owner,address manager,bool isAllowed,uint256 nonce,uint256 expiry)");

    /// @dev The highest valid value for s in an ECDSA signature pair (0 < s < secp256k1n ÷ 2 + 1)
    ///  See https://ethereum.github.io/yellowpaper/paper.pdf #307)
    uint internal constant MAX_VALID_ECDSA_S = 0x7FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF5D576E7357A4501DDFE92F46681B20A0;

    function name() override public view returns (string memory) {
        uint8 i;
        for (i = 0; i < 32; ) {
            if (name32[i] == 0) {
                break;
            }
            unchecked { i++; }
        }
        bytes memory name_ = new bytes(i);
        for (uint8 j = 0; j < i; ) {
            name_[j] = name32[j];
            unchecked { j++; }
        }
        return string(name_);
    }

    function symbol() override external view returns (string memory) {
        uint8 i;
        for (i = 0; i < 32; ) {
            if (symbol32[i] == 0) {
                break;
            }
            unchecked { i++; }
        }
        bytes memory symbol_ = new bytes(i);
        for (uint8 j = 0; j < i; ) {
            symbol_[j] = symbol32[j];
            unchecked { j++; }
        }
        return string(symbol_);
    }
    
    // Can only approve to full access amount or denie access to amount
    function approve(address spender, uint256 amount) override external returns(bool){
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