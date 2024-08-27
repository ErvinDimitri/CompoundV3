/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  BaseBridgeReceiver,
  BaseBridgeReceiverInterface,
} from "../BaseBridgeReceiver";

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
];

const _bytecode =
  "0x6080806040523461001657610910908161001c8239f35b600080fdfe608080604052600436101561001357600080fd5b60003560e01c908163013cf08b146104d3575080630d61b51914610287578063158ef93e1461026157806322086dbe146102385780633e4f49e6146101f3578063485cc955146100c3578063824343dd1461009a5763da35c6641461007757600080fd5b34610095576000366003190112610095576020600254604051908152f35b600080fd5b34610095576000366003190112610095576001546040516001600160a01b039091168152602090f35b34610095576040366003190112610095576001600160a01b036004358181169081900361009557602435828116809103610095576001549260ff8460a01c166101e2576040516303e1469160e61b815290602082600481865afa9182156101d65760009261019a575b503091160361018857600080546001600160a01b031916831781556001600160a81b03199093168117600160a01b17600155604051917f3cd5ec01b1ae7cfec6ca1863e2cd6aa25d6d1702825803ff2b7cc95010fffdc28484a3f35b6040516336e038cd60e21b8152600490fd5b9091506020813d82116101ce575b816101b560209383610518565b810103126100955751818116810361009557908561012c565b3d91506101a8565b6040513d6000823e3d90fd5b60405162dc149f60e41b8152600490fd5b346100955760203660031901126100955761020f600435610653565b6040516003821015610222576020918152f35b634e487b7160e01b600052602160045260246000fd5b34610095576000366003190112610095576000546040516001600160a01b039091168152602090f35b3461009557600036600319011261009557602060ff60015460a01c166040519015158152f35b34610095576020366003190112610095576102a3600435610653565b6003811015610222576104c1576004356000526003602052604060002060068101600160ff1982541617905560009060028101600382019060048301935b600184015481101561049357600180546001600160a01b039081169161030a9084908801610551565b90549060031b1c1690600061037b6103228587610551565b90549060031b1c926103348689610551565b5083610340888d610551565b509660058c015461038d604051998a9788968795630825f38f60e01b8752600487015260249b8c87015260a0604487015260a486019061057f565b8481036003190160648601529061057f565b90608483015203925af180156101d6576103cb575b505060001981146103b5576001016102e1565b634e487b7160e01b600052601160045260246000fd5b3d806000843e6103db8184610518565b8201916020818403126100955780516001600160401b039390919084831161009557601f938185858501011215610095578383015195861161047f57506040519361042f908601601f191660200185610518565b8484526020858484010101116100955783916000915b83831061046357505011156103a257600091016020015285806103a2565b6020818301840181015186850182015286945090920191610445565b634e487b7160e01b60009081526041600452fd5b60006040516004357f712ae1383f79ac853f8d882153778e0260ef8f03b504e2866e0593e04d2b291f8383a2f35b604051633c7e994560e11b8152600490fd5b34610095576020366003190112610095576060906004356000526003602052604060002080549060ff6006600583015492015416918352602083015215156040820152f35b601f909101601f19168101906001600160401b0382119082101761053b57604052565b634e487b7160e01b600052604160045260246000fd5b80548210156105695760005260206000200190600090565b634e487b7160e01b600052603260045260246000fd5b80546000939260018083169383821c938515610632575b602095868610811461061c578585529081156105fd57506001146105bc575b5050505050565b90939495506000929192528360002092846000945b8386106105e9575050505001019038808080806105b5565b8054858701830152940193859082016105d1565b60ff19168685015250505090151560051b0101915038808080806105b5565b634e487b7160e01b600052602260045260246000fd5b93607f1693610596565b6001600160401b03811161053b5760051b60200190565b600254811180156108d2575b6108c057600090815260209060038252604080822081519361068260e086610518565b815485526001948583018451808285829454938481520190895285892092895b8b888383106108a257505050506106bb92500382610518565b82820152600283018451808285829454938481520190895285892092895b8b8883831061088d57505050506106f292500382610518565b848201526003830180546107058161063c565b9161071287519384610518565b81835287528387208790898685015b8785851061086b5750505050505060608201526004830180546107438161063c565b9161075087519384610518565b8183528752838720879089868086015b858510610840575050505050509060c091608082015260ff60066005860154958660a0850152015416151591829101526000146107a1575050505050600290565b845483516360d143f160e11b815291908190839060049082906001600160a01b03165afa93841561083757508493610803575b5050811981116107ef57014211156107ea575090565b905090565b634e487b7160e01b83526011600452602483fd5b9080929350813d8311610830575b61081b8183610518565b8101031261082c57519038806107d4565b8280fd5b503d610811565b513d86823e3d90fd5b9082918b5161085a81610853818961057f565b0382610518565b815201920192019190868b91610760565b82918b5161087d81610853818961057f565b8152019201920191908a90610721565b865485529581019587955090930192016106d9565b86546001600160a01b031685529581019587955090930192016106a2565b604051630992f7ad60e01b8152600490fd5b50801561065f56fea26469706673582212207d66e650e41126892ea2d45acb68ed62c03bc69a5f8f460781e7c272443d20b264736f6c634300080f0033";

type BaseBridgeReceiverConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: BaseBridgeReceiverConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class BaseBridgeReceiver__factory extends ContractFactory {
  constructor(...args: BaseBridgeReceiverConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<BaseBridgeReceiver> {
    return super.deploy(overrides || {}) as Promise<BaseBridgeReceiver>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): BaseBridgeReceiver {
    return super.attach(address) as BaseBridgeReceiver;
  }
  connect(signer: Signer): BaseBridgeReceiver__factory {
    return super.connect(signer) as BaseBridgeReceiver__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BaseBridgeReceiverInterface {
    return new utils.Interface(_abi) as BaseBridgeReceiverInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BaseBridgeReceiver {
    return new Contract(address, _abi, signerOrProvider) as BaseBridgeReceiver;
  }
}
