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
  ScalingPriceFeed,
  ScalingPriceFeedInterface,
} from "../ScalingPriceFeed";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "underlyingPriceFeed_",
        type: "address",
      },
      {
        internalType: "uint8",
        name: "decimals_",
        type: "uint8",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "InvalidInt256",
    type: "error",
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
    name: "underlyingPriceFeed",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
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
  "0x61010060409080825234620003e0578181620009698038038091620000258285620003e5565b833981010312620003e05780516001600160a01b038116808203620003e0576200005360208094016200041f565b9160a052816080528351633942720b60e11b81526000918282600481845afa918215620001fa57839262000303575b5081516001600160401b038111620002ef578354926001938481811c91168015620002e4575b88821014620002d0579081601f8994931162000279575b508290601f83116001146200021057600494929187918362000204575b5050600019600383901b1c191690851b1785555b875163313ce56760e01b815292839182905afa948515620001fa578395620001b6575b505060ff831660ff851610600014620001ae57905b5060c08190521562000194576200014862000154926200014e926200042e565b62000457565b62000469565b60e052516104db90816200048e8239608051816103ec015260a051818181607e0152610424015260c0518160bf015260e05181818160e501526101bd0152f35b620001486200014e91620001a8936200042e565b62000154565b508062000128565b9080929550813d8311620001f2575b620001d18183620003e5565b81010312620001ee57620001e5906200041f565b92388062000113565b5080fd5b503d620001c5565b86513d85823e3d90fd5b015190503880620000dc565b93918591601f1982169088805285892091895b81811062000260575096836004981062000246575b505050811b018555620000f0565b015160001960f88460031b161c1916905538808062000238565b8289015184558c978a9690940193928301920162000223565b90919250858052878620601f840160051c810191898510620002c5575b8994939291601f88920160051c01915b828110620002b6575050620000bf565b8881558a9550879101620002a6565b909150819062000296565b634e487b7160e01b86526022600452602486fd5b90607f1690620000a8565b634e487b7160e01b84526041600452602484fd5b9091503d8084833e620003178183620003e5565b8101908581830312620003dc5780516001600160401b0391828211620003d8570182601f82011215620003c0578051918211620003c45787519262000366601f8401601f1916890185620003e5565b828452878383010111620003c0578491879183905b828210620003a45750811062000397575b505050903862000082565b830101528285386200038c565b928092945081840101518282870101520191859288926200037b565b8480fd5b634e487b7160e01b85526041600452602485fd5b8580fd5b8380fd5b600080fd5b601f909101601f19168101906001600160401b038211908210176200040957604052565b634e487b7160e01b600052604160045260246000fd5b519060ff82168203620003e057565b60ff918216911681811062000441570390565b634e487b7160e01b600052601160045260246000fd5b60ff16604d81116200044157600a0a90565b6001600160ff1b0381116200047b5790565b60405163e7e828ad60e01b8152600490fdfe608060408181526004918236101561001657600080fd5b600090813560e01c9081632ac0a1a51461041057508063313ce567146103d257806354fd4d50146103b25780637284e416146102805763feaf968c1461005b57600080fd5b3461026b578060031936011261026b578151633fabe5a360e21b815260a08185817f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03165afa908115610276578280809181938295610213575b507f0000000000000000000000000000000000000000000000000000000000000000156101bb577f0000000000000000000000000000000000000000000000000000000000000000918082138184136001600160ff1b0382821686820486111661019557600160ff1b92848712929083168685058812166101a857868587129405861290841616610195578590058412911616610182575060a0975002945b80516001600160501b03958616815260208101969096528501526060840152166080820152f35b634e487b7160e01b815260118952602490fd5b634e487b7160e01b845260118c52602484fd5b634e487b7160e01b855260118d52602485fd5b7f000000000000000000000000000000000000000000000000000000000000000091821561020057600160ff1b8214600019841416610182575060a09750059461015b565b634e487b7160e01b815260128952602490fd5b9550509250505060a0823d821161026e575b8161023260a09383610453565b8101031261026b576102438261048c565b602083015192848101519261025f60806060840151930161048c565b929493919293386100bc565b80fd5b3d9150610225565b83513d84823e3d90fd5b5091346103ae57826003193601126103ae5781519280815490600182811c9281811680156103a4575b602096878610821461039157508489528893929187908215610371575050600114610335575b506102df92509592950382610453565b8251938285938452825192838286015282915b84831061031d5750508210610311575b50601f01601f19168101030190f35b83828401015238610302565b818301810151888401880152879550918201916102f2565b8591508480528185209085915b8583106103595750506102df9350820101386102cf565b8054838b018501528994508793909201918101610342565b60ff1916858201526102df95151560051b85010192503891506102cf9050565b634e487b7160e01b875260229052602486fd5b93607f16936102a9565b8280fd5b5090346103ce57816003193601126103ce576020905160018152f35b5080fd5b5090346103ce57816003193601126103ce576020905160ff7f0000000000000000000000000000000000000000000000000000000000000000168152f35b9050346103ce57816003193601126103ce577f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168152602090f35b601f909101601f19168101906001600160401b0382119082101761047657604052565b634e487b7160e01b600052604160045260246000fd5b51906001600160501b03821682036104a057565b600080fdfea2646970667358221220d65b0e422ffa429e2f83478c3c72b0b71a787f9490b191232f9c1cd07728857964736f6c634300080f0033";

type ScalingPriceFeedConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ScalingPriceFeedConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ScalingPriceFeed__factory extends ContractFactory {
  constructor(...args: ScalingPriceFeedConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    underlyingPriceFeed_: string,
    decimals_: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ScalingPriceFeed> {
    return super.deploy(
      underlyingPriceFeed_,
      decimals_,
      overrides || {}
    ) as Promise<ScalingPriceFeed>;
  }
  getDeployTransaction(
    underlyingPriceFeed_: string,
    decimals_: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      underlyingPriceFeed_,
      decimals_,
      overrides || {}
    );
  }
  attach(address: string): ScalingPriceFeed {
    return super.attach(address) as ScalingPriceFeed;
  }
  connect(signer: Signer): ScalingPriceFeed__factory {
    return super.connect(signer) as ScalingPriceFeed__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ScalingPriceFeedInterface {
    return new utils.Interface(_abi) as ScalingPriceFeedInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ScalingPriceFeed {
    return new Contract(address, _abi, signerOrProvider) as ScalingPriceFeed;
  }
}