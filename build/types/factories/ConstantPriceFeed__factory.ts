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
import type {
  ConstantPriceFeed,
  ConstantPriceFeedInterface,
} from "../ConstantPriceFeed";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint8",
        name: "decimals_",
        type: "uint8",
      },
      {
        internalType: "int256",
        name: "constantPrice_",
        type: "int256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "constantPrice",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256",
      },
    ],
    stateMutability: "view",
    type: "function",
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
    name: "description",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "latestRoundData",
    outputs: [
      {
        internalType: "uint80",
        name: "roundId",
        type: "uint80",
      },
      {
        internalType: "int256",
        name: "answer",
        type: "int256",
      },
      {
        internalType: "uint256",
        name: "startedAt",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "updatedAt",
        type: "uint256",
      },
      {
        internalType: "uint80",
        name: "answeredInRound",
        type: "uint80",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "version",
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
  "0x60c0806040523461007f57601f6102ce38819003918201601f19168301916001600160401b0383118484101761008457808492604094855283398101031261007f5780519060ff8216820361007f57602001519060805260a052604051610233908161009b8239608051816101d9015260a0518181816075015260c80152f35b600080fd5b634e487b7160e01b600052604160045260246000fdfe60806040818152600436101561001457600080fd5b600091823560e01c908163313ce567146101c05750806354fd4d50146101a55780637284e416146100eb578063eea72e28146100b15763feaf968c1461005957600080fd5b346100ad57816003193601126100ad578060a0915190600182527f00000000000000000000000000000000000000000000000000000000000000006020830152429082015242606082015260016080820152f35b5080fd5b50346100ad57816003193601126100ad57602090517f00000000000000000000000000000000000000000000000000000000000000008152f35b50346100ad57816003193601126100ad578051918282016001600160401b03811184821017610191578293919352601381526020907210dbdb9cdd185b9d081c1c9a58d94819995959606a1b828201528251938285938452825192838286015282915b848310610179575050821061016d575b50601f01601f19168101030190f35b8382840101523861015e565b8183018101518884018801528795509182019161014e565b634e487b7160e01b82526041600452602482fd5b50346100ad57816003193601126100ad576020905160018152f35b8390346100ad57816003193601126100ad5760209060ff7f0000000000000000000000000000000000000000000000000000000000000000168152f3fea2646970667358221220cc853b15913b2f2d38c56ecd592d1ec00c2aa58cd297edbe042091de44fb7bd164736f6c634300080f0033";

type ConstantPriceFeedConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ConstantPriceFeedConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ConstantPriceFeed__factory extends ContractFactory {
  constructor(...args: ConstantPriceFeedConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    decimals_: BigNumberish,
    constantPrice_: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ConstantPriceFeed> {
    return super.deploy(
      decimals_,
      constantPrice_,
      overrides || {}
    ) as Promise<ConstantPriceFeed>;
  }
  getDeployTransaction(
    decimals_: BigNumberish,
    constantPrice_: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      decimals_,
      constantPrice_,
      overrides || {}
    );
  }
  attach(address: string): ConstantPriceFeed {
    return super.attach(address) as ConstantPriceFeed;
  }
  connect(signer: Signer): ConstantPriceFeed__factory {
    return super.connect(signer) as ConstantPriceFeed__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ConstantPriceFeedInterface {
    return new utils.Interface(_abi) as ConstantPriceFeedInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ConstantPriceFeed {
    return new Contract(address, _abi, signerOrProvider) as ConstantPriceFeed;
  }
}
