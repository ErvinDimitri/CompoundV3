/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  SweepableBridgeReceiver,
  SweepableBridgeReceiverInterface,
} from "../SweepableBridgeReceiver";

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
  "0x6080806040523461001657610c60908161001c8239f35b600080fdfe60806040526004361015610013575b600080fd5b60003560e01c8063013cf08b146100db5780630d61b519146100d2578063158ef93e146100c957806322086dbe146100c0578063258836fe146100b75780633e4f49e6146100ae578063485cc955146100a5578063824343dd1461009c578063b660c156146100935763da35c6641461008b57600080fd5b61000e61062e565b5061000e6105ab565b5061000e610581565b5061000e61046c565b5061000e61043c565b5061000e610366565b5061000e610303565b5061000e6102d0565b5061000e610129565b3461000e576100eb36600461011a565b6000526003602052604060002080549060ff60066005830154920154169160805260a052151560c05260606080f35b9081602091031261000e573590565b503461000e57600461013b368261011a565b61014481610aa1565b916000926101518461041c565b61015a8161041c565b6102b657600082815260036020526040902060068101805460ff191660019081179091559060038101928181019180840191600282019160050188865b6101c8575b8989604051907f712ae1383f79ac853f8d882153778e0260ef8f03b504e2866e0593e04d2b291f8383a2f35b8985548210156102b0578187828b898961027b968a8f996102468161023f816102398f826102296102146102659961020e61020961020961022f97546102f7565b6102f7565b9e610708565b905460039190911b1c6001600160a01b031690565b9a610708565b90549060031b1c90565b99610708565b5099610708565b508c5490604051998a9889978896630825f38f60e01b885287016108aa565b03925af180156102a3575b610281575b506106ec565b90610197565b61029c903d808f833e6102948183610664565b810190610760565b5038610275565b6102ab6106a9565b610270565b5061019c565b604051633c7e994560e11b8152fd5b600091031261000e57565b503461000e57600036600319011261000e57602060ff60015460a01c166040519015158152f35b6001600160a01b031690565b503461000e57600036600319011261000e576000546040516001600160a01b039091168152602090f35b6001600160a01b0381160361000e57565b919082604091031261000e57602082356103578161032d565b9201356103638161032d565b90565b503461000e5761037736600461033e565b6103856102096001546102f7565b330361040b576040516370a0823160e01b81523060048201526103cc9290916020836024816001600160a01b0385165afa9283156103fe575b6000936103ce575b50610b7d565b005b6103f091935060203d81116103f7575b6103e88183610664565b810190610a86565b91386103c6565b503d6103de565b6104066106a9565b6103be565b6040516282b42960e81b8152600490fd5b6003111561042657565b634e487b7160e01b600052602160045260246000fd5b503461000e57602036600319011261000e57610459600435610aa1565b6040516003821015610426576020918152f35b503461000e5761047d36600461033e565b9061048e60015460ff9060a01c1690565b610570576040516303e1469160e61b81526001600160a01b0383811691602081600481865afa908115610563575b600091610535575b508130911603610523576104e56000946104de85876106b6565b60016106b6565b6001805460ff60a01b1916600160a01b17905560405192167f3cd5ec01b1ae7cfec6ca1863e2cd6aa25d6d1702825803ff2b7cc95010fffdc28484a3f35b6040516336e038cd60e21b8152600490fd5b610556915060203d811161055c575b61054e8183610664565b810190610694565b386104c4565b503d610544565b61056b6106a9565b6104bc565b60405162dc149f60e41b8152600490fd5b503461000e57600036600319011261000e576001546040516001600160a01b039091168152602090f35b503461000e57602036600319011261000e576004356105c98161032d565b6001546001600160a01b0316330361040b57600080809247604051915af13d15610629573d6105f781610736565b906106056040519283610664565b8152600060203d92013e5b1561061757005b60405163d1a4579f60e01b8152600490fd5b610610565b503461000e57600036600319011261000e576020600254604051908152f35b50634e487b7160e01b600052604160045260246000fd5b601f909101601f19168101906001600160401b0382119082101761068757604052565b61068f61064d565b604052565b9081602091031261000e57516103638161032d565b506040513d6000823e3d90fd5b80546001600160a01b0319166001600160a01b03909216919091179055565b50634e487b7160e01b600052601160045260246000fd5b60019060001981146106fc570190565b6107046106d5565b0190565b80548210156107205760005260206000200190600090565b634e487b7160e01b600052603260045260246000fd5b6020906001600160401b038111610753575b601f01601f19160190565b61075b61064d565b610748565b602090818184031261000e578051906001600160401b03821161000e57019082601f8301121561000e5781519161079683610736565b936107a46040519586610664565b83855282848301011161000e5782906000905b838383106107d5575050116107cb57505090565b6000918301015290565b819350828193920101518282880101520183916107b7565b80546000939260018083169383821c9385156108a0575b602095868610811461088a5785855290811561086b575060011461082a575b5050505050565b90939495506000929192528360002092846000945b83861061085757505050500101903880808080610823565b80548587018301529401938590820161083f565b60ff19168685015250505090151560051b010191503880808080610823565b634e487b7160e01b600052602260045260246000fd5b93607f1693610804565b959493906080936108e7936108d99260018060a01b03168952602089015260a0604089015260a08801906107ed565b9086820360608801526107ed565b930152565b9060405191828154918282526020928383019160005283600020936000905b8282106109235750505061092192500383610664565b565b85548452600195860195889550938101939091019061090b565b80549091906001600160401b0381116109b2575b602092604093845194610969828560051b0187610664565b8386526000928352818320908287015b85851061098857505050505050565b600184819284516109a48161099d818a6107ed565b0382610664565b815201930194019391610979565b6109ba61064d565b610951565b906040516109ce60e082610664565b8092805482526001808201604051908192815490818452602080940192600052836000209160005b818110610a6a5750505050610921949383610a6393610a1b60c0966006950383610664565b860152610a2a600282016108ec565b6040860152610a3b6003820161093d565b6060860152610a4c6004820161093d565b6080860152600581015460a0860152015460ff1690565b1515910152565b83546001600160a01b03168552938501939282019282016109f6565b9081602091031261000e575190565b811981116106fc570190565b60025481118015610b75575b610b6357610ac9610ace91600390600052602052604060002090565b6109bf565b60c081015115610ade5750600290565b600460a0610b259201516020610afb6102096102096001546102f7565b6040516360d143f160e11b815293849182905afa918215610b56575b600092610b36575b50610a95565b421115610b3157600190565b600090565b610b4f91925060203d81116103f7576103e88183610664565b9038610b1f565b610b5e6106a9565b610b17565b604051630992f7ad60e01b8152600490fd5b508015610aad565b6001600160a01b03939290841690813b1561000e5760405194859363a9059cbb60e01b855216600484015260248301528160446000958680945af18015610c1d575b610c03575b503d8015610bf857602014610bd7575080fd5b90602081803e515b15610be657565b60405163cefaffeb60e01b8152600490fd5b509050600019610bdf565b80610c1184610c1793610664565b806102c5565b38610bc4565b610c256106a9565b610bbf56fea26469706673582212207f0cd35e6d5a73a7121b9cd746b86bc6b29265ba71be296c02ab0c63b8c3877f64736f6c634300080f0033";

type SweepableBridgeReceiverConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SweepableBridgeReceiverConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SweepableBridgeReceiver__factory extends ContractFactory {
  constructor(...args: SweepableBridgeReceiverConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<SweepableBridgeReceiver> {
    return super.deploy(overrides || {}) as Promise<SweepableBridgeReceiver>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): SweepableBridgeReceiver {
    return super.attach(address) as SweepableBridgeReceiver;
  }
  connect(signer: Signer): SweepableBridgeReceiver__factory {
    return super.connect(signer) as SweepableBridgeReceiver__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SweepableBridgeReceiverInterface {
    return new utils.Interface(_abi) as SweepableBridgeReceiverInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SweepableBridgeReceiver {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as SweepableBridgeReceiver;
  }
}
