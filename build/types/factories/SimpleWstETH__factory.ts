/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  Overrides,
  BigNumberish,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { SimpleWstETH, SimpleWstETHInterface } from "../SimpleWstETH";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokensPerStEth_",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "tokensPerStEth",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60a0806040523461005c57601f61013a38819003918201601f19168301916001600160401b038311848410176100615780849260209460405283398101031261005c575160805260405160c2908161007882396080518160490152f35b600080fd5b634e487b7160e01b600052604160045260246000fdfe6080806040526004361015601257600080fd5b600090813560e01c908163313ce56714606f5750639576a0c814603457600080fd5b34606c5780600319360112606c5760206040517f00000000000000000000000000000000000000000000000000000000000000008152f35b80fd5b9050346088578160031936011260885780601260209252f35b5080fdfea2646970667358221220d80a76b214617348932f4fc9ffccb2fa830f1e66a07b9f40736797b73a3b499b64736f6c634300080f0033";

type SimpleWstETHConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SimpleWstETHConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SimpleWstETH__factory extends ContractFactory {
  constructor(...args: SimpleWstETHConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    tokensPerStEth_: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<SimpleWstETH> {
    return super.deploy(
      tokensPerStEth_,
      overrides || {}
    ) as Promise<SimpleWstETH>;
  }
  getDeployTransaction(
    tokensPerStEth_: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(tokensPerStEth_, overrides || {});
  }
  attach(address: string): SimpleWstETH {
    return super.attach(address) as SimpleWstETH;
  }
  connect(signer: Signer): SimpleWstETH__factory {
    return super.connect(signer) as SimpleWstETH__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SimpleWstETHInterface {
    return new utils.Interface(_abi) as SimpleWstETHInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SimpleWstETH {
    return new Contract(address, _abi, signerOrProvider) as SimpleWstETH;
  }
}