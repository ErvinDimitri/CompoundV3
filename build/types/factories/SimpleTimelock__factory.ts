/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  SimpleTimelock,
  SimpleTimelockInterface,
} from "../SimpleTimelock";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "admin_",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "Unauthorized",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "txHash",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "signature",
        type: "string",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "eta",
        type: "uint256",
      },
    ],
    name: "CancelTransaction",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "txHash",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "signature",
        type: "string",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "eta",
        type: "uint256",
      },
    ],
    name: "ExecuteTransaction",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
    ],
    name: "NewAdmin",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "txHash",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "signature",
        type: "string",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "eta",
        type: "uint256",
      },
    ],
    name: "QueueTransaction",
    type: "event",
  },
  {
    inputs: [],
    name: "GRACE_PERIOD",
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
  {
    inputs: [],
    name: "acceptAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "admin",
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
    inputs: [
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "signature",
        type: "string",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "eta",
        type: "uint256",
      },
    ],
    name: "cancelTransaction",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "delay",
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
  {
    inputs: [
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "signature",
        type: "string",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "eta",
        type: "uint256",
      },
    ],
    name: "executeTransaction",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "targets",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]",
      },
      {
        internalType: "string[]",
        name: "signatures",
        type: "string[]",
      },
      {
        internalType: "bytes[]",
        name: "data",
        type: "bytes[]",
      },
    ],
    name: "executeTransactions",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "proposalCount",
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
  {
    inputs: [
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "signature",
        type: "string",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "eta",
        type: "uint256",
      },
    ],
    name: "queueTransaction",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "queuedTransactions",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
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
    name: "setAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x6080806040523461007857601f610a9b38819003918201601f19168301916001600160401b0383118484101761007d5780849260209460405283398101031261007857516001600160a01b0381169081900361007857600080546001600160a01b031916919091179055604051610a0790816100948239f35b600080fd5b634e487b7160e01b600052604160045260246000fdfe60406080815260049081361015610020575b5050361561001e57600080fd5b005b600091823560e01c9081630825f38f1461051e5781630e18b681146105095781633a66f901146104655781634bc24c8914610284578163591fcdfe146101cf5781636a42b8f8146101b4578163704b6c0214610137578163c1a287e214610119578163da35c664146100fd578163f2b06537146100cc575063f851a4400361001157346100c857816003193601126100c857905490516001600160a01b039091168152602090f35b5080fd5b9050346100f95760203660031901126100f9578160209360ff923581526001855220541690519015158152f35b8280fd5b5050346100c857816003193601126100c8576020905160018152f35b5050346100c857816003193601126100c85760209051621275008152f35b919050346100f95760203660031901126100f9576001600160a01b03823581811693908490036101b057845491821633036101a357506001600160a01b0319168217835551907f71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c8383a2f35b82516282b42960e81b8152fd5b8480fd5b5050346100c857816003193601126100c85751908152602090f35b9050346100f9576101e03682610797565b8754939592946001600160a01b03949093919291908516330361027757507f2fffc091a501fd91bfbff27141450d3acb40fb8e6d8382b243ec7a812a3aaf879392916102719187895161024d8161023f86868d60208501978c896108aa565b03601f198101835282610707565b51902096878b526001602052898b2060ff19815416905589519586951698856108ec565b0390a351f35b87516282b42960e81b8152fd5b905060803660031901126100f9576001600160401b039080358281116101b0576102b1903690830161087a565b9190928560249485358381116100f9576102ce903690860161087a565b604493918435868111610461576102e8903690890161087a565b606499919997883590811161045d576103049036908b0161087a565b95546001600160a01b039692908716330361044e578e808f5b8683106103275751f35b8f8f908f86869361033985838361094a565b151590506103f6575050505061035c915061035590878761094a565b369161075b565b905b61036983888d6109a1565b358a811681036100c8578190610380858c8c6109a1565b35908451916020809601915af161039561091a565b50156103c2575060001981146103af576001018f8f61031d565b50634e487b7160e01b8f5260118b528c8ffd5b8f8f8c8f928f94926d19985a5b1959081d1bc818d85b1b60921b93600e92519562461bcd60e51b8752860152840152820152fd5b61044894610407926103559261094a565b80516020918201206001600160e01b03191694610425888c8c61094a565b919082915197889485015285840137810186848201520390810184520182610707565b9061035e565b8d516282b42960e81b81528b90fd5b8580fd5b8380fd5b828434610506576104763684610797565b855493976001600160a01b039594919391861633036102775750926104fd7f76e2796dc3a81d57b0e8504b647febcbeeb5f4af818e164f11eef8131a6a763f9389969389989660209b8a516104d7818f87878761023f938501978d896108aa565b5190209a888c809a5260018e5220600160ff1982541617905589519586951698856108ec565b0390a351908152f35b80fd5b5050346100c857816003193601126100c85751f35b90508261052b3683610797565b85546001600160a01b0398939693959290891633036106f857855196602097888101906105608161023f8787878d8c896108aa565b519020948581526001895260ff8882205416156106a1578581526001895287812060ff19815416905580898b8451801560001461065d57505050835b8a8151910189885af1986105ae61091a565b99156106065750610602979899927fa560e3198060a2f10670c1ec5b403077ea6ae93ca8de1c32b451dc1a943cd6e794926105f09289519586951698856108ec565b0390a351928284938452830190610855565b0390f35b875162461bcd60e51b8152908101899052603d60248201526000805160206109b283398151915260448201527f616e73616374696f6e20657865637574696f6e2072657665727465642e0000006064820152608490fd5b61069c9160249163ffffffff60e01b9085890120168d519485918183015261068d8a518092868501908d01610820565b81010390810184520182610707565b61059c565b875162461bcd60e51b8152808b018a9052603d60248201526000805160206109b283398151915260448201527f616e73616374696f6e206861736e2774206265656e207175657565642e0000006064820152608490fd5b85516282b42960e81b81528890fd5b601f909101601f19168101906001600160401b0382119082101761072a57604052565b634e487b7160e01b600052604160045260246000fd5b6001600160401b03811161072a57601f01601f191660200190565b92919261076782610740565b916107756040519384610707565b829481845281830111610792578281602093846000960137010152565b600080fd5b919060a0838203126107925782356001600160a01b038116810361079257926020810135926001600160401b0392604083013584811161079257830181601f8201121561079257818160206107ee9335910161075b565b93606084013590811161079257830181601f820112156107925760809181602061081a9335910161075b565b92013590565b918091926000905b828210610840575011610839575050565b6000910152565b91508060209183015181860152018291610828565b9060209161086e81518092818552858086019101610820565b601f01601f1916010190565b9181601f84011215610792578235916001600160401b038311610792576020808501948460051b01011161079257565b959493906080936108e7936108d99260018060a01b03168952602089015260a0604089015260a0880190610855565b908682036060880152610855565b930152565b94939261090c6060936108e7938852608060208901526080880190610855565b908682036040880152610855565b3d15610945573d9061092b82610740565b916109396040519384610707565b82523d6000602084013e565b606090565b919081101561098b5760051b81013590601e19813603018212156107925701803591906001600160401b038311610792576020018236038113610792579190565b634e487b7160e01b600052603260045260246000fd5b919081101561098b5760051b019056fe54696d656c6f636b3a3a657865637574655472616e73616374696f6e3a205472a2646970667358221220677763fbbb027a06b21d6a9e0f5f87b47e80e74b8db641e048c857edd09c1e9164736f6c634300080f0033";

type SimpleTimelockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SimpleTimelockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SimpleTimelock__factory extends ContractFactory {
  constructor(...args: SimpleTimelockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    admin_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<SimpleTimelock> {
    return super.deploy(admin_, overrides || {}) as Promise<SimpleTimelock>;
  }
  getDeployTransaction(
    admin_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(admin_, overrides || {});
  }
  attach(address: string): SimpleTimelock {
    return super.attach(address) as SimpleTimelock;
  }
  connect(signer: Signer): SimpleTimelock__factory {
    return super.connect(signer) as SimpleTimelock__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SimpleTimelockInterface {
    return new utils.Interface(_abi) as SimpleTimelockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SimpleTimelock {
    return new Contract(address, _abi, signerOrProvider) as SimpleTimelock;
  }
}
