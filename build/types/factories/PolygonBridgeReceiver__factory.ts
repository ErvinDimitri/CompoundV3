/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  PolygonBridgeReceiver,
  PolygonBridgeReceiverInterface,
} from "../PolygonBridgeReceiver";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_fxChild",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "AlreadyInitialized",
    type: "error",
  },
  {
    inputs: [],
    name: "BadData",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidChild",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidProposalId",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidTimelockAdmin",
    type: "error",
  },
  {
    inputs: [],
    name: "ProposalNotExecutable",
    type: "error",
  },
  {
    inputs: [],
    name: "TransactionAlreadyQueued",
    type: "error",
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
        internalType: "address",
        name: "govTimelock",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "localTimelock",
        type: "address",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "oldFxChild",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newFxChild",
        type: "address",
      },
    ],
    name: "NewFxChild",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "rootMessageSender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address[]",
        name: "targets",
        type: "address[]",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]",
      },
      {
        indexed: false,
        internalType: "string[]",
        name: "signatures",
        type: "string[]",
      },
      {
        indexed: false,
        internalType: "bytes[]",
        name: "calldatas",
        type: "bytes[]",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "eta",
        type: "uint256",
      },
    ],
    name: "ProposalCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "ProposalExecuted",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newFxChild",
        type: "address",
      },
    ],
    name: "changeFxChild",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "proposalId",
        type: "uint256",
      },
    ],
    name: "executeProposal",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "fxChild",
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
    name: "govTimelock",
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
        name: "_govTimelock",
        type: "address",
      },
      {
        internalType: "address",
        name: "_localTimelock",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "initialized",
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
    inputs: [],
    name: "localTimelock",
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
        internalType: "uint256",
        name: "stateId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "rootMessageSender",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "processMessageFromRoot",
    outputs: [],
    stateMutability: "nonpayable",
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
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "proposals",
    outputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "eta",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "executed",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "proposalId",
        type: "uint256",
      },
    ],
    name: "state",
    outputs: [
      {
        internalType: "enum BaseBridgeReceiver.ProposalState",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x6080806040523461007857601f61178a38819003918201601f19168301916001600160401b0383118484101761007d5780849260209460405283398101031261007857516001600160a01b0381169081900361007857600480546001600160a01b0319169190911790556040516116f690816100948239f35b600080fd5b634e487b7160e01b600052604160045260246000fdfe608080604052600436101561001357600080fd5b60003560e01c908163013cf08b1461111b575080630d61b51914610f28578063158ef93e14610f0257806322086dbe14610ed95780633e4f49e614610e94578063450d11f014610e6b578063485cc95514610d475780634b72f5c114610cd0578063824343dd14610ca75780639a7c4b71146100bb5763da35c6641461009857600080fd5b346100b65760003660031901126100b6576020600254604051908152f35b600080fd5b346100b65760603660031901126100b6576024356001600160a01b03811681036100b6576001600160401b03604435116100b6573660236044350112156100b657600460443501356001600160401b0381116100b65760443501903660248301116100b6576004546001600160a01b03163303610c95576000546001600160a01b0390811690821603610c845760806044358303126100b657604435602401356001600160401b0381116100b65760443501602483016043820112156100b65760248101359261018a846112f6565b916101986040519384611160565b84835260208301906044829660051b820101906024840182116100b657604401915b818310610c64575050506044803501356001600160401b0381116100b6576044350191602482016043840112156100b6576024830135936101fa856112f6565b936102086040519586611160565b858552602085016044819760051b830101916024860183116100b657604401905b828210610c5457505050604435606401356001600160401b0381116100b65760248401604382604435010112156100b6576024816044350101359161026d836112f6565b9261027b6040519485611160565b8084526020840180936024880160448460051b838235010101116100b65760448181350101915b60448460051b8382350101018310610c06575050505060443560840135916001600160401b0383116100b65760248601604384604435010112156100b6576102f16024846044350101356112f6565b956102ff6040519788611160565b6024846044350101358752602087018094602483016044602483823501013560051b838235010101116100b65760448181350101915b604480358301602481013560051b01018310610bb357505050508651855103610ba1578351855103610ba1578551855103610ba157600154604051630d48571f60e31b815290602090829060049082906001600160a01b03165afa80156104fb57600090610b6d575b6103a991504261130d565b9760005b865181101561055457600060208860248c8c8f8c61041161041f926104008b6103f9816103f98160018060a01b03600154169d6103f18260018060a01b03926115c4565b51169b6115c4565b51966115c4565b516040519586948b860198896115fd565b03601f198101835282611160565b519020604051948593849263f2b0653760e01b845260048401525af19081156104fb57600091610519575b506105075789602089898960008e6104b26104938961048c8161048c8160018060a01b03600154169a6104848260018060a01b03926115c4565b5116976115c4565b51976115c4565b519760405198899788968795633a66f90160e01b8752600487016115fd565b03925af180156104fb576104d0575b506104cb90611183565b6103ad565b602090813d83116104f4575b6104e68183611160565b810103126100b6578b6104c1565b503d6104dc565b6040513d6000823e3d90fd5b6040516333108cbb60e01b8152600490fd5b90506020813d60201161054c575b8161053460209383611160565b810103126100b6575180151581036100b6578c61044a565b3d9150610527565b508893969192948a89610568600254611183565b806002556040519061057b60e083611160565b80825260208201908b82528360408401528560608401528760808401528960a0840152600060c084015260005260036020526040600020908251825551805190600160401b821161092e57602060018401916105dc84845481865585611656565b019060005260206000206000915b838310610b3d57505050506040820151805190600160401b821161092e576020600284019161061e84845481865585611656565b019060005260206000206000915b838310610b2757505050506060820151805190600160401b821161092e576003830154826003850155808310610aa4575b5060200190600383016000526020600020916000905b8282106109c757505050506080820151805190600160401b821161092e576004830154826004850155808310610944575b5060200190600483016000526020600020916000905b82821061084b575050505060069060a083015160058201550160c0820151151560ff80198354169116179055516040519960c08b01918b5260c060208c01525180915260e08a01929060005b81811061082c5750505060209089830360408b0152519182815201929060005b81811061081657505050868203606088015251808252602082019160208260051b82010194926000915b8383106107e9575050505050848203608086015251808252602082019160208260051b82010196926000915b8383106107bc5760a088018690526001600160a01b0387167f216ba108683905cf17ff4c7b04b9711edbdf8ebf5cc06eeecee4b5d5e7c3c6d2898b038aa2005b90919293976020806107da600193601f198682030187528c516115d8565b9a01930193019193929061077c565b9091929395602080610807600193601f198682030187528a516115d8565b98019301930191939290610750565b8251855260209485019490920191600101610726565b82516001600160a01b0316855260209485019490920191600101610706565b80518051906001600160401b03821161092e576108728261086c8854611226565b8861167b565b602090601f83116001146108be5792826001949360209386956000926108b3575b5050600019600383901b1c191690841b1787555b019401910190926106ba565b015190503880610893565b908660005260206000209160005b601f1985168110610916575083602093600196938796938794601f198116106108fd575b505050811b0187556108a7565b015160001960f88460031b161c191690553880806108f0565b919260206001819286850151815501940192016108cc565b634e487b7160e01b600052604160045260246000fd5b600484016000526020600020908382015b81830181106109655750506106a4565b8061097260019254611226565b8061097f575b5001610955565b601f908181118414610998575050600081555b38610978565b836109b492846000526020600020920160051c8201910161163f565b8060005260006020812081835555610992565b80518051906001600160401b03821161092e576109e88261086c8854611226565b602090601f8311600114610a34579282600194936020938695600092610a29575b5050600019600383901b1c191690841b1787555b01940191019092610673565b015190503880610a09565b908660005260206000209160005b601f1985168110610a8c575083602093600196938796938794601f19811610610a73575b505050811b018755610a1d565b015160001960f88460031b161c19169055388080610a66565b91926020600181928685015181550194019201610a42565b600384016000526020600020908382015b8183018110610ac557505061065d565b80610ad260019254611226565b80610adf575b5001610ab5565b601f908181118414610af8575050600081555b38610ad8565b83610b1492846000526020600020920160051c8201910161163f565b8060005260006020812081835555610af2565b600160208282935185550192019201919061062c565b805182546001600160a01b0319166001600160a01b039190911617825560019283019291909101906020016105ea565b506020813d602011610b99575b81610b8760209383611160565b810103126100b6576103a9905161039e565b3d9150610b7a565b60405163a554dcdf60e01b8152600490fd5b82356001600160401b0381116100b657602485016063828560443501010112156100b6576020918291610bfb906024880190604480358801909101908101359060640161158d565b815201920191610335565b82356001600160401b0381116100b6578260443501019060248a016063830112156100b65760208091610c4760449460248e0190606487820135910161158d565b81520193019290506102a2565b8135815260209182019101610229565b82356001600160a01b03811681036100b6578152602092830192016101ba565b6040516282b42960e81b8152600490fd5b60405163bfb8ddef60e01b8152600490fd5b346100b65760003660031901126100b6576001546040516001600160a01b039091168152602090f35b346100b65760203660031901126100b6576004356001600160a01b03818116918290036100b65780600154163303610c8457600480546001600160a01b03198116841790915560405160009390929091167f8c7990c8264248aa20a2ac5680607a402e741b7f53d9fd055bf648640e25bdc28484a3f35b346100b65760403660031901126100b6576001600160a01b03600435818116908190036100b6576024358281168091036100b6576001549260ff8460a01c16610e5a576040516303e1469160e61b815290602082600481865afa9182156104fb57600092610e1e575b5030911603610e0c57600080546001600160a01b031916831781556001600160a81b03199093168117600160a01b17600155604051917f3cd5ec01b1ae7cfec6ca1863e2cd6aa25d6d1702825803ff2b7cc95010fffdc28484a3f35b6040516336e038cd60e21b8152600490fd5b9091506020813d8211610e52575b81610e3960209383611160565b810103126100b6575181811681036100b6579085610db0565b3d9150610e2c565b60405162dc149f60e41b8152600490fd5b346100b65760003660031901126100b6576004546040516001600160a01b039091168152602090f35b346100b65760203660031901126100b657610eb0600435611319565b6040516003821015610ec3576020918152f35b634e487b7160e01b600052602160045260246000fd5b346100b65760003660031901126100b6576000546040516001600160a01b039091168152602090f35b346100b65760003660031901126100b657602060ff60015460a01c166040519015158152f35b346100b657602060031981813601126100b65760043590610f4882611319565b9060039182811015610ec3576111095760008381528285526040812060068101805460ff191660019081179091559360058201926004830192808301929160028201918801885b610fc1575b60008a604051907f712ae1383f79ac853f8d882153778e0260ef8f03b504e2866e0593e04d2b291f8383a2f35b80548210156111045788546001600160a01b039081169290610fe382846111a8565b905490871b1c1692610ff582866111a8565b905490871b1c61100583896111a8565b5094611011848b6111a8565b508b54908d6040519889958695630825f38f60e01b8752600487015260248601526044850160a0905260a4850161104791611260565b9084820301606485015261105a91611260565b90608483015203815a6000948591f19283156104fb578a93611087575b5061108190611183565b91610f8f565b92503d806000853e6110998185611160565b8301928c818503126100b6578051906001600160401b0382116100b657019083601f830112156100b6578c8251946110d0866111d6565b916110de6040519384611160565b86835286850101116100b6578b94611081938f806110fe940191016111f1565b90611077565b610f94565b604051633c7e994560e11b8152600490fd5b346100b65760203660031901126100b6576060906004356000526003602052604060002080549060ff6006600583015492015416918352602083015215156040820152f35b601f909101601f19168101906001600160401b0382119082101761092e57604052565b60001981146111925760010190565b634e487b7160e01b600052601160045260246000fd5b80548210156111c05760005260206000200190600090565b634e487b7160e01b600052603260045260246000fd5b6001600160401b03811161092e57601f01601f191660200190565b918091926000905b82821061121157501161120a575050565b6000910152565b915080602091830151818601520182916111f9565b90600182811c92168015611256575b602083101461124057565b634e487b7160e01b600052602260045260246000fd5b91607f1691611235565b906000929180549161127183611226565b9182825260019384811690816000146112d35750600114611293575b50505050565b90919394506000526020928360002092846000945b8386106112bf57505050500101903880808061128d565b8054858701830152940193859082016112a8565b9294505050602093945060ff191683830152151560051b0101903880808061128d565b6001600160401b03811161092e5760051b60200190565b81198111611192570190565b60025481118015611585575b6115735760009081526020906003825260408082209080519361134960e086611160565b825485526001948584018351808285829454938481520190895285892092895b8b88838310611555575050505061138292500382611160565b82820152600284018351808285829454938481520190895285892092895b8b8883831061154057505050506113b992500382611160565b838201526003840180546113cc816112f6565b916113d986519384611160565b81835287528387208790898685015b8785851061151e57505050505050606082015260048401805461140a816112f6565b9161141786519384611160565b8183528752838720879089868086015b8585106114f3575050505050509060c091608082015260ff60066005870154968760a085015201541615159182910152600014611468575050505050600290565b845482516360d143f160e11b815291908190839060049082906001600160a01b03165afa9283156114ea575084926114b6575b50506114a69161130d565b4211156114b1575090565b905090565b90809250813d83116114e3575b6114cd8183611160565b810103126114df57516114a63861149b565b8280fd5b503d6114c3565b513d86823e3d90fd5b9082918a5161150d816115068189611260565b0382611160565b815201920192019190868b91611427565b82918a51611530816115068189611260565b8152019201920191908a906113e8565b865485529581019587955090930192016113a0565b86546001600160a01b03168552958101958795509093019201611369565b604051630992f7ad60e01b8152600490fd5b508015611325565b929192611599826111d6565b916115a76040519384611160565b8294818452818301116100b6578281602093846000960137010152565b80518210156111c05760209160051b010190565b906020916115f1815180928185528580860191016111f1565b601f01601f1916010190565b9594939060809361163a9361162c9260018060a01b03168952602089015260a0604089015260a08801906115d8565b9086820360608801526115d8565b930152565b81811061164a575050565b6000815560010161163f565b9181811061166357505050565b611679926000526020600020918201910161163f565b565b9190601f811161168a57505050565b611679926000526020600020906020601f840160051c830193106116b6575b601f0160051c019061163f565b90915081906116a956fea2646970667358221220db123ea5fd79300a4a0831b496f6913fb3c2a3c0dd6079bedd65ed58a5f9da9a64736f6c634300080f0033";

type PolygonBridgeReceiverConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: PolygonBridgeReceiverConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class PolygonBridgeReceiver__factory extends ContractFactory {
  constructor(...args: PolygonBridgeReceiverConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    _fxChild: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<PolygonBridgeReceiver> {
    return super.deploy(
      _fxChild,
      overrides || {}
    ) as Promise<PolygonBridgeReceiver>;
  }
  getDeployTransaction(
    _fxChild: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_fxChild, overrides || {});
  }
  attach(address: string): PolygonBridgeReceiver {
    return super.attach(address) as PolygonBridgeReceiver;
  }
  connect(signer: Signer): PolygonBridgeReceiver__factory {
    return super.connect(signer) as PolygonBridgeReceiver__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PolygonBridgeReceiverInterface {
    return new utils.Interface(_abi) as PolygonBridgeReceiverInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PolygonBridgeReceiver {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as PolygonBridgeReceiver;
  }
}
