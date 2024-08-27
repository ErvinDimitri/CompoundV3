/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  IOvmL2CrossDomainMessengerInterface,
  IOvmL2CrossDomainMessengerInterfaceInterface,
} from "../IOvmL2CrossDomainMessengerInterface";

const _abi = [
  {
    inputs: [],
    name: "xDomainMessageSender",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IOvmL2CrossDomainMessengerInterface__factory {
  static readonly abi = _abi;
  static createInterface(): IOvmL2CrossDomainMessengerInterfaceInterface {
    return new utils.Interface(
      _abi
    ) as IOvmL2CrossDomainMessengerInterfaceInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IOvmL2CrossDomainMessengerInterface {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as IOvmL2CrossDomainMessengerInterface;
  }
}
