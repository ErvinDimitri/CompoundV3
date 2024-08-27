/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ArbitrumBridgeReceiver,
  ArbitrumBridgeReceiverInterface,
} from "../ArbitrumBridgeReceiver";

const _abi = [
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
    name: "FailedToSendNativeToken",
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
    name: "TransferOutFailed",
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
    stateMutability: "payable",
    type: "fallback",
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
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
    ],
    name: "sweepNativeToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "address",
        name: "asset",
        type: "address",
      },
    ],
    name: "sweepToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608080604052346100165761187d908161001c8239f35b600080fdfe60806040526004361015610018575b610016610c75565b005b6000803560e01c908163013cf08b146100e3575080630d61b519146100da578063158ef93e146100d157806322086dbe146100c8578063258836fe146100bf5780633e4f49e6146100b6578063485cc955146100ad578063824343dd146100a4578063b660c1561461009b5763da35c6640361000e57610096610633565b61000e565b506100966105b0565b50610096610586565b50610096610471565b50610096610441565b5061009661036d565b5061009661030a565b506100966102d7565b50610096610127565b3461012457602036600319011261012457604090600435815260036020522080549060ff60066005830154920154169160805260a052151560c05260606080f35b80fd5b50346102c75760203660031901126102c7576004803561014681610aec565b9160009261015384610421565b61015c81610421565b6102b857600082815260036020526040902060068101805460ff191660019081179091559060038101928181019180840191600282019160050188865b6101ca575b8989604051907f712ae1383f79ac853f8d882153778e0260ef8f03b504e2866e0593e04d2b291f8383a2f35b8985548210156102b2578187828b898961027d968a8f99610248816102418161023b8f8261022b6102166102679961021061020b61020b61023197546102fe565b6102fe565b9e610724565b905460039190911b1c6001600160a01b031690565b9a610724565b90549060031b1c90565b99610724565b5099610724565b508c5490604051998a9889978896630825f38f60e01b885287016108e7565b03925af180156102a5575b610283575b506106f1565b90610199565b61029e903d808f833e6102968183610669565b8101906107b9565b5038610277565b6102ad6106ae565b610272565b5061019e565b604051633c7e994560e11b8152fd5b600080fd5b60009103126102c757565b50346102c75760003660031901126102c757602060ff60015460a01c166040519015158152f35b6001600160a01b031690565b50346102c75760003660031901126102c7576000546040516001600160a01b039091168152602090f35b6001600160a01b038116036102c757565b91908260409103126102c7576020823561035e81610334565b92013561036a81610334565b90565b50346102c75761037e366004610345565b61038c61020b6001546102fe565b3303610410576040516370a0823160e01b81523060048201526100169290916020836024816001600160a01b0385165afa928315610403575b6000936103d3575b50610bc8565b6103f591935060203d81116103fc575b6103ed8183610669565b810190610ad1565b91386103cd565b503d6103e3565b61040b6106ae565b6103c5565b6040516282b42960e81b8152600490fd5b6003111561042b57565b634e487b7160e01b600052602160045260246000fd5b50346102c75760203660031901126102c75761045e600435610aec565b604051600382101561042b576020918152f35b50346102c757610482366004610345565b9061049360015460ff9060a01c1690565b610575576040516303e1469160e61b81526001600160a01b0383811691602081600481865afa908115610568575b60009161053a575b508130911603610528576104ea6000946104e385876106bb565b60016106bb565b6001805460ff60a01b1916600160a01b17905560405192167f3cd5ec01b1ae7cfec6ca1863e2cd6aa25d6d1702825803ff2b7cc95010fffdc28484a3f35b6040516336e038cd60e21b8152600490fd5b61055b915060203d8111610561575b6105538183610669565b810190610699565b386104c9565b503d610549565b6105706106ae565b6104c1565b60405162dc149f60e41b8152600490fd5b50346102c75760003660031901126102c7576001546040516001600160a01b039091168152602090f35b50346102c75760203660031901126102c7576004356105ce81610334565b6001546001600160a01b0316330361041057600080809247604051915af13d1561062e573d6105fc8161075a565b9061060a6040519283610669565b8152600060203d92013e5b1561061c57005b60405163d1a4579f60e01b8152600490fd5b610615565b50346102c75760003660031901126102c7576020600254604051908152f35b50634e487b7160e01b600052604160045260246000fd5b601f909101601f19168101906001600160401b0382119082101761068c57604052565b610694610652565b604052565b908160209103126102c7575161036a81610334565b506040513d6000823e3d90fd5b80546001600160a01b0319166001600160a01b03909216919091179055565b50634e487b7160e01b600052601160045260246000fd5b6001906000198114610701570190565b6107096106da565b0190565b50634e487b7160e01b600052603260045260246000fd5b805482101561073d575b60005260206000200190600090565b61074561070d565b61072e565b906107586040519283610669565b565b6020906001600160401b038111610777575b601f01601f19160190565b61077f610652565b61076c565b918091926000905b8282106107a457501161079d575050565b6000910152565b9150806020918301518186015201829161078c565b6020818303126102c7578051906001600160401b0382116102c7570181601f820112156102c75780516107eb8161075a565b926107f96040519485610669565b818452602082840101116102c75761036a9160208085019101610784565b90600182811c92168015610847575b602083101461083157565b634e487b7160e01b600052602260045260246000fd5b91607f1691610826565b906000929180549161086283610817565b9182825260019384811690816000146108c45750600114610884575b50505050565b90919394506000526020928360002092846000945b8386106108b057505050500101903880808061087e565b805485870183015294019385908201610899565b9294505050602093945060ff191683830152151560051b0101903880808061087e565b95949390608093610924936109169260018060a01b03168952602089015260a0604089015260a0880190610851565b908682036060880152610851565b930152565b9060405191828154918282526020928383019160005283600020936000905b82821061095e5750505061075892500383610669565b855484526001958601958895509381019390910190610948565b6020906001600160401b038111610991575b60051b0190565b610999610652565b61098a565b9081546109aa81610978565b926040936109ba85519182610669565b828152809460208092019260005281600020906000935b8585106109e057505050505050565b600184819284516109fc816109f5818a610851565b0382610669565b8152019301940193916109d1565b90604051610a1960e082610669565b8092805482526001808201604051908192815490818452602080940192600052836000209160005b818110610ab55750505050610758949383610aae93610a6660c0966006950383610669565b860152610a7560028201610929565b6040860152610a866003820161099e565b6060860152610a976004820161099e565b6080860152600581015460a0860152015460ff1690565b1515910152565b83546001600160a01b0316855293850193928201928201610a41565b908160209103126102c7575190565b81198111610701570190565b60025481118015610bc0575b610bae57610b14610b1991600390600052602052604060002090565b610a0a565b60c081015115610b295750600290565b600460a0610b709201516020610b4661020b61020b6001546102fe565b6040516360d143f160e11b815293849182905afa918215610ba1575b600092610b81575b50610ae0565b421115610b7c57600190565b600090565b610b9a91925060203d81116103fc576103ed8183610669565b9038610b6a565b610ba96106ae565b610b62565b604051630992f7ad60e01b8152600490fd5b508015610af8565b6001600160a01b03939290841690813b156102c75760405194859363a9059cbb60e01b855216600484015260248301528160446000958680945af18015610c68575b610c4e575b503d8015610c4357602014610c22575080fd5b90602081803e515b15610c3157565b60405163cefaffeb60e01b8152600490fd5b509050600019610c2a565b80610c5c84610c6293610669565b806102cc565b38610c0f565b610c706106ae565b610c0a565b61111161111160901b013310610fdb575b600080543361111061111160901b0119016001600160a01b03169190610caf9061020b906102fe565b820361041057610cbf368261110f565b908294939451855103610fc9578051855103610fc9578151855103610fc957600192610d2a610cf461020b61020b87546102fe565b95604096875192838092630d48571f60e31b8252602095869160049586915afa908115610fbc575b8491610f9f575b5042610ae0565b9682815b610dd8575b505050918796959391610da8610dd396947f216ba108683905cf17ff4c7b04b9711edbdf8ebf5cc06eeecee4b5d5e7c3c6d29a610d716002546106f1565b9384600255610d8060e061074a565b94855284015283898401528460608401528560808401528660a084015260c083019015159052565b610dc781610dc28151600390600052602052604060002090565b611651565b519551968796876117c1565b0390a2565b8a51811015610f9a57838582808d8f828f8f8f8f84958d54610df9906102fe565b610e02906102fe565b610e0b906102fe565b99610e15916111dd565b516001600160a01b031694610e29916111dd565b5196610e34916111dd565b5193610e3f916111dd565b51935193849388850196610e539488611224565b03601f1981018252610e659082610669565b5190208d5163f2b0653760e01b815287810191825293849291839190829060200103925af1908115610f8d575b8591610f60575b50610f5057610f278189878a8f8f8f8a610f128f93928e93610ef78b8f9e8f90610ef081610eea610edd82610ed761020b61020b610ef099546102fe565b9f6111dd565b516001600160a01b031690565b9b6111dd565b519b6111dd565b519051633a66f90160e01b8152998a98899788968701611224565b03925af18015610f43575b610f2d57506106f1565b90610d2e565b61029e90883d8a116103fc576103ed8183610669565b610f4b6106ae565b610f1d565b89516333108cbb60e01b81528390fd5b610f809150863d8811610f86575b610f788183610669565b810190611261565b38610e99565b503d610f6e565b610f956106ae565b610e92565b610d33565b610fb69150853d87116103fc576103ed8183610669565b38610d23565b610fc46106ae565b610d1c565b60405163a554dcdf60e01b8152600490fd5b610fe36106da565b610c86565b81601f820112156102c757803591610fff83610978565b9261100d6040519485610669565b808452602092838086019260051b8201019283116102c7578301905b828210611037575050505090565b81358152908301908301611029565b9291926110528261075a565b916110606040519384610669565b8294818452818301116102c7578281602093846000960137010152565b81601f820112156102c75780359061109482610978565b926040926110a484519586610669565b808552602093848087019260051b850101938385116102c757858101925b8584106110d3575050505050505090565b83356001600160401b0381116102c757820185603f820112156102c757879161110487838786809601359101611046565b8152019301926110c2565b916080838303126102c7576001600160401b039083358281116102c75784019383601f860112156102c757843561114581610978565b906111536040519283610669565b808252602096878084019260051b820101918783116102c75788809201905b8382106111c45750505050948101358381116102c75784611194918301610fe8565b9360408201358481116102c757816111ad91840161107d565b9360608301359081116102c75761036a920161107d565b82809183356111d281610334565b815201910190611172565b60209181518110156111f2575b60051b010190565b6111fa61070d565b6111ea565b9060209161121881518092818552858086019101610784565b601f01601f1916010190565b95949390608093610924936112539260018060a01b03168952602089015260a0604089015260a08801906111ff565b9086820360608801526111ff565b908160209103126102c7575180151581036102c75790565b50634e487b7160e01b600052600060045260246000fd5b81811061129b575050565b60008155600101611290565b918181106112b457505050565b6107589260005260206000209182019101611290565b815191600160401b831161131c575b6112e8838354818555846112a7565b602080910191600052806000206000925b848410611307575050505050565b600183828293518555019201930192906112f9565b611324610652565b6112d9565b90600091808352602083209182548160011b9185199060031b1c191617905555565b9190601f811161135a57505050565b610758926000526020600020906020601f840160051c83019310611386575b601f0160051c0190611290565b9091508190611379565b90929192611472575b82516001600160401b038111611465575b6113be816113b88454610817565b8461134b565b602080601f83116001146113fa5750819293946000926113ef575b50508160011b916000199060031b1c1916179055565b0151905038806113d9565b90601f1983169561141085600052602060002090565b926000905b88821061144d57505083600195969710611434575b505050811b019055565b015160001960f88460031b161c1916905538808061142a565b80600185968294968601518155019501930190611415565b61146d610652565b6113aa565b61147a611279565b611399565b815191600160401b8311611562575b81548383558084106114e1575b506114b0602080920192600052602060002090565b600080935b8585106114c457505050505050565b600184826114d58394518688611390565b019301940193916114b5565b6000838152846020822092830192015b8281106114ff57505061149b565b8061150c60019254610817565b80611519575b50016114f1565b601f9081811184146115315750508281555b38611512565b836115539261154585600052602060002090565b920160051c82019101611290565b61155d8382611329565b61152b565b61156a610652565b61148e565b815191600160401b8311611644575b81548383558084106115d1575b506115a0602080920192600052602060002090565b600080935b8585106115b457505050505050565b600184826115c58394518688611390565b019301940193916115a5565b6000838152846020822092830192015b8281106115ef57505061158b565b806115fc60019254610817565b80611609575b50016115e1565b601f9081811184146116215750508281555b38611602565b836116359261154585600052602060002090565b61163f8382611329565b61161b565b61164c610652565b61157e565b90805182556001808301602090818401519180835193600160401b851161172b575b611682858554818755866112a7565b0191600052806000206000925b8484106116ff575050505050509060066116ec60c0846116b96040610758970151600287016112ca565b6116ca60608201516003870161147f565b6116db60808201516004870161156f565b60a081015160058601550151151590565b91019060ff801983541691151516179055565b805182546001600160a01b0319166001600160a01b03919091161782559285019290850190820161168f565b611733610652565b611673565b90815180825260208080930193019160005b828110611758575050505090565b83518552938101939281019260010161174a565b90815180825260208092019182818360051b85019501936000915b8483106117975750505050505090565b90919293949584806117b183856001950387528a516111ff565b9801930193019194939290611787565b96959493929060c0880190885260209060c0828a015283518091528160e08a0194019160005b82811061182a57505050506109249261180e8361181c938a60a098960360408c0152611738565b9088820360608a015261176c565b90868203608088015261176c565b83516001600160a01b0316865294810194928101926001016117e756fea264697066735822122005f5fe766a810704d9ec720b691d233ce24e05d8fa9c1b3645876e303c4fa62964736f6c634300080f0033";

type ArbitrumBridgeReceiverConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ArbitrumBridgeReceiverConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ArbitrumBridgeReceiver__factory extends ContractFactory {
  constructor(...args: ArbitrumBridgeReceiverConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ArbitrumBridgeReceiver> {
    return super.deploy(overrides || {}) as Promise<ArbitrumBridgeReceiver>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ArbitrumBridgeReceiver {
    return super.attach(address) as ArbitrumBridgeReceiver;
  }
  connect(signer: Signer): ArbitrumBridgeReceiver__factory {
    return super.connect(signer) as ArbitrumBridgeReceiver__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ArbitrumBridgeReceiverInterface {
    return new utils.Interface(_abi) as ArbitrumBridgeReceiverInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ArbitrumBridgeReceiver {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ArbitrumBridgeReceiver;
  }
}
