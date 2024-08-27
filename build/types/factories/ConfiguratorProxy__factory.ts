/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  PayableOverrides,
  BytesLike,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ConfiguratorProxy,
  ConfiguratorProxyInterface,
} from "../ConfiguratorProxy";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_logic",
        type: "address",
      },
      {
        internalType: "address",
        name: "_admin",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    stateMutability: "payable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "previousAdmin",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
    ],
    name: "AdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "beacon",
        type: "address",
      },
    ],
    name: "BeaconUpgraded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "implementation",
        type: "address",
      },
    ],
    name: "Upgraded",
    type: "event",
  },
  {
    stateMutability: "payable",
    type: "fallback",
  },
  {
    inputs: [],
    name: "admin",
    outputs: [
      {
        internalType: "address",
        name: "admin_",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
    ],
    name: "changeAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "implementation",
    outputs: [
      {
        internalType: "address",
        name: "implementation_",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
    ],
    name: "upgradeTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "upgradeToAndCall",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x608060405262000c22803803806200001781620000d6565b9283398101606082820312620000ba5762000032826200010b565b9162000041602082016200010b565b604082015190916001600160401b038211620000ba57019282601f85011215620000ba578351936200007d620000778662000120565b620000d6565b9385855260208683010111620000ba57620000aa94620000a491602080870191016200014e565b620001c6565b6040516106c99081620005398239f35b600080fd5b50634e487b7160e01b600052604160045260246000fd5b6040519190601f01601f191682016001600160401b03811183821017620000fc57604052565b62000106620000bf565b604052565b51906001600160a01b0382168203620000ba57565b6020906001600160401b0381116200013e575b601f01601f19160190565b62000148620000bf565b62000133565b918091926000905b8282106200017057501162000169575050565b6000910152565b9150806020918301518186015201829162000156565b81811062000192570390565b634e487b7160e01b600052601160045260246000fd5b15620001b057565b634e487b7160e01b600052600160045260246000fd5b91620001d36001620001a8565b823b15620002d4577f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc80546001600160a01b0319166001600160a01b038516908117909155604051620002aa9491907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a2815115801590620002cb575b620002ac575b5050620002a46200028d60017fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d610462000186565b60008051602062000c0283398151915214620001a8565b6200032f565b565b620002c291620002bb620003ec565b9162000435565b5038806200025a565b50600062000254565b60405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201526c1bdd08184818dbdb9d1c9858dd609a1b6064820152608490fd5b60008051602062000c028339815191528054604080516001600160a01b0380841682529094166020850181905292937f7e644d79422f17c01e4894b5f4f588d331ebfa28653d42ae832dc59e38c9798f9190a1811562000398576001600160a01b031916179055565b60405162461bcd60e51b815260206004820152602660248201527f455243313936373a206e65772061646d696e20697320746865207a65726f206160448201526564647265737360d01b6064820152608490fd5b620003f86060620000d6565b9060278252660819985a5b195960ca1b6040837f416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c60208201520152565b9190823b1562000486576000816200047a9460208394519201905af43d156200047d573d9062000469620000778362000120565b9182523d6000602084013e620004da565b90565b606090620004da565b60405162461bcd60e51b815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f6044820152651b9d1c9858dd60d21b6064820152608490fd5b90919015620004e7575090565b815115620004f85750805190602001fd5b6044604051809262461bcd60e51b8252602060048301526200052a81518092816024860152602086860191016200014e565b601f01601f19168101030190fdfe6080604052600436101561002c575b361561001f575b61001d610350565b005b610027610350565b610015565b6000803560e01c9081633659cfe614610093575080634f1ef2861461008a5780635c60da1b146100815780638f283970146100785763f851a4400361000e57610073610306565b61000e565b50610073610224565b506100736101be565b5061007361011a565b346100fe5760203660031901126100fe576100ae6004610101565b600080516020610654833981519152548290336001600160a01b03909116036100f4576100ef916100e66100e1836103d4565b6103a2565b908282526103fe565b604051f35b50506100ef610350565b80fd5b35906001600160a01b038216820361011557565b600080fd5b506040366003190112610115576101316004610101565b6001600160401b0360243581811161011557366023820112156101155780600401359182116101155736602483830101116101155760008051602061065483398151915254336001600160a01b03909116036101b35761001d9260006020848060246101a16100e16001996103d4565b968288520183870137840101526103fe565b50505061001d610350565b503461011557600036600319011261011557600080516020610654833981519152546020906001600160a01b039060009033908316036102165750806000805160206106748339815191525416905b60405191168152f35b9061021f610350565b61020d565b5034610115576020366003190112610115576102406004610101565b60008051602061065483398151915280549091906001600160a01b039033908216036101b3577f7e644d79422f17c01e4894b5f4f588d331ebfa28653d42ae832dc59e38c9798f604084549281519481851686521693846020820152a181156102b2576001600160a01b031916179055005b60405162461bcd60e51b815260206004820152602660248201527f455243313936373a206e65772061646d696e20697320746865207a65726f206160448201526564647265737360d01b6064820152608490fd5b5034610115576000366003190112610115576020600060018060a01b0360008051602061065483398151915281815416331460001461034b5754604051911681529050f35b5061021f5b5060008051602061067483398151915254600090819081906001600160a01b0316368280378136915af43d82803e15610387573d90f35b3d90fd5b50634e487b7160e01b600052604160045260246000fd5b6040519190601f01601f191682016001600160401b038111838210176103c757604052565b6103cf61038b565b604052565b6020906001600160401b0381116103f1575b601f01601f19160190565b6103f961038b565b6103e6565b9091813b1561048d5760008051602061067483398151915280546001600160a01b0319166001600160a01b0384169081179091556040517fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a282511590811591610485575b50610470575050565b6104829161047c6104e8565b9161052f565b50565b905038610467565b60405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201526c1bdd08184818dbdb9d1c9858dd609a1b6064820152608490fd5b6104f260606103a2565b9060278252660819985a5b195960ca1b6040837f416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c60208201520152565b9190823b156105785760008161056d9460208394519201905af43d15610570573d9061055d6100e1836103d4565b9182523d6000602084013e6105cc565b90565b6060906105cc565b60405162461bcd60e51b815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f6044820152651b9d1c9858dd60d21b6064820152608490fd5b909190156105d8575090565b8151156105e85750805190602001fd5b6040519062461bcd60e51b82528160208060048301528251928360248401526000915b84831061063a57505091806044931161062d575b601f01601f19168101030190fd5b600083828401015261061f565b818301810151868401604401528593509182019161060b56feb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d6103360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbca264697066735822122014bb262dbb1bda60b084ef7e009112208576e35e7d8f74cbd4832e275fc466f464736f6c634300080f0033b53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d6103";

type ConfiguratorProxyConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ConfiguratorProxyConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ConfiguratorProxy__factory extends ContractFactory {
  constructor(...args: ConfiguratorProxyConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    _logic: string,
    _admin: string,
    _data: BytesLike,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ConfiguratorProxy> {
    return super.deploy(
      _logic,
      _admin,
      _data,
      overrides || {}
    ) as Promise<ConfiguratorProxy>;
  }
  getDeployTransaction(
    _logic: string,
    _admin: string,
    _data: BytesLike,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_logic, _admin, _data, overrides || {});
  }
  attach(address: string): ConfiguratorProxy {
    return super.attach(address) as ConfiguratorProxy;
  }
  connect(signer: Signer): ConfiguratorProxy__factory {
    return super.connect(signer) as ConfiguratorProxy__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ConfiguratorProxyInterface {
    return new utils.Interface(_abi) as ConfiguratorProxyInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ConfiguratorProxy {
    return new Contract(address, _abi, signerOrProvider) as ConfiguratorProxy;
  }
}
