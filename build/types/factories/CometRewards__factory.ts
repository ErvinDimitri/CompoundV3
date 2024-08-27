/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { CometRewards, CometRewardsInterface } from "../CometRewards";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "governor_",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "AlreadyConfigured",
    type: "error",
  },
  {
    inputs: [],
    name: "BadData",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "InvalidUInt64",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "NotPermitted",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "NotSupported",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "TransferOutFailed",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "oldGovernor",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newGovernor",
        type: "address",
      },
    ],
    name: "GovernorTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "src",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "RewardClaimed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "comet",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "RewardsClaimedSet",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "comet",
        type: "address",
      },
      {
        internalType: "address",
        name: "src",
        type: "address",
      },
      {
        internalType: "bool",
        name: "shouldAccrue",
        type: "bool",
      },
    ],
    name: "claim",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "comet",
        type: "address",
      },
      {
        internalType: "address",
        name: "src",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "bool",
        name: "shouldAccrue",
        type: "bool",
      },
    ],
    name: "claimTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "comet",
        type: "address",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "getRewardOwed",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "token",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "owed",
            type: "uint256",
          },
        ],
        internalType: "struct CometRewards.RewardOwed",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "governor",
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
        name: "",
        type: "address",
      },
    ],
    name: "rewardConfig",
    outputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint64",
        name: "rescaleFactor",
        type: "uint64",
      },
      {
        internalType: "bool",
        name: "shouldUpscale",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "multiplier",
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
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "rewardsClaimed",
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
        name: "comet",
        type: "address",
      },
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    name: "setRewardConfig",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "comet",
        type: "address",
      },
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "multiplier",
        type: "uint256",
      },
    ],
    name: "setRewardConfigWithMultiplier",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "comet",
        type: "address",
      },
      {
        internalType: "address[]",
        name: "users",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "claimedAmounts",
        type: "uint256[]",
      },
    ],
    name: "setRewardsClaimed",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newGovernor",
        type: "address",
      },
    ],
    name: "transferGovernor",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "withdrawToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x6080806040523461007857601f610e2538819003918201601f19168301916001600160401b0383118484101761007d5780849260209460405283398101031261007857516001600160a01b0381169081900361007857600080546001600160a01b031916919091179055604051610d9190816100948239f35b600080fd5b634e487b7160e01b600052604160045260246000fdfe6080604081815260048036101561001557600080fd5b600092833560e01c90816301e336671461066c575080630c340a24146106445780632289b6b8146105d757806341e0cad61461046c5780634ff85d941461038a5780636394f1611461024457806365e12392146101f357806395e36d2c146101b0578063b7034f7e14610169578063b8cc9ce6146100e55763cdc0ca091461009c57600080fd5b346100e15760603660031901126100dc576001600160a01b03903581811681036100dc5760243591821682036100dc576100d99160443591610786565b51f35b600080fd5b8280fd5b5090346100e15760203660031901126100e15781356001600160a01b0381811692918390036100dc5784549081169384330361015257506001600160a01b0319168217845551917f6fadb1c244276388aee22be93b919985a18748c021e5d48553957a48101a25608484a3f35b6024908351906319b1d90760e31b82523390820152fd5b50346100e15760603660031901126100e157356001600160a01b0380821682036100dc5760243590811681036100dc576044359081151582036100dc57806100d993610a68565b50346100e157816003193601126100e1576001600160a01b03903581811681036100dc5760243591821682036100dc576100d991670de0b6b3a764000091610786565b50346100e157816003193601126100e1576001600160a01b039035818116908190036100dc576024359182168092036100dc5783839160209552600285522090600052825280600020549051908152f35b50919034610386576060366003190112610386576001600160a01b038335818116908190036100dc576001600160401b03916024358381116103825761028d90369088016106d0565b96909360443590811161037e576102a790369083016106d0565b9091838854163303610367578189036103595750865b8881106102c957878751f35b84886102d68385876109f5565b3582825283878d8c6020956002875220926102f1918d6109f5565b6102fa90610a1b565b1660005282528960002055610310838c8a6109f5565b61031990610a1b565b866103258587896109f5565b35918b5192835216917f8bd30d9ed3a8b430389fd4df14d7791abf777bfc8b82909777ea0a1ca271ac0d91a36001016102bd565b865163a554dcdf60e01b8152fd5b6024908751906319b1d90760e31b82523390820152fd5b8680fd5b8580fd5b5080fd5b50919034610386576080366003190112610386578235926001600160a01b03808516918286036100dc5760243590828216938483036100dc5760443593841684036100dc576064359485151586036100dc57602090604488518094819363cde6804160e01b8352878301523360248301525afa908115610462578791610434575b501561041d57506100d9939495610a68565b6024908551906319b1d90760e31b82523390820152fd5b610455915060203d811161045b575b61044d8183610700565b810190610a50565b3861040b565b503d610443565b86513d89823e3d90fd5b50346100e157816003193601126100e1578035926001600160a01b0390818516908186036105d45760243595838716968781036100e157869760019751966104b48a89610700565b848852846020809901528585528888528985208a51998a916104d7608084610700565b60ff81548b81168095528d8d858060401b038360a01c1691015260e01c1615158d8d0152015460608b0152156105bd57853b156105b957895163bfe69c8d60e01b81529081018290528481602481838a5af180156105af579089939291610599575b50849561055a94955260028852898620906000528752886000205493610be8565b818111156105915761056c9250610a2f565b925b51169181845161057e8682610700565b8481520190815283519283525190820152f35b50509261056e565b946105a88161055a9697610700565b9493610539565b8a513d87823e3d90fd5b8480fd5b8951634e2c71db60e11b8152908101869052602490fd5b80fd5b50346100e15760203660031901126100e1576001600160a01b039190358281169081900361064057838291608095526001602052209060ff60018354930154928251948116855260018060401b038160a01c16602086015260e01c161515908301526060820152f35b8380fd5b505034610386578160031936011261038657905490516001600160a01b039091168152602090f35b91905034610640576060366003190112610640578035916001600160a01b039182841684036103825760243592808416840361037e5786541633036106bb575050906100d99160443591610cd4565b6319b1d90760e31b8252339082015260249150fd5b9181601f840112156100dc578235916001600160401b0383116100dc576020808501948460051b0101116100dc57565b601f909101601f19168101906001600160401b0382119082101761072357604052565b634e487b7160e01b600052604160045260246000fd5b908160209103126100dc57516001600160401b03811681036100dc5790565b6001600160401b039182169190821561077057160490565b634e487b7160e01b600052601260045260246000fd5b9160018060a01b03916000938385541633036109dd5783168085526001936020958587526040908282822054166109c55781516351076acb60e11b8152948886600481885afa9586156109bb57829661098a575b50831697825163313ce56760e01b815281816004818d5afa8015610980578390610948575b60ff915016604d8111610934576001600160401b039690600a0a87811161091e5790878a9392169081898216116000146108a9579061083d91610758565b9684519a61084c60808d610700565b8b52909616868a01908152838a0183815260608b0198895295835295522095518654935192516001600160e81b031990941691161760a09190911b600160a01b600160e01b03161790151560e01b60ff60e01b1617835551910155565b6108b291610758565b9684519a6108c160808d610700565b8b52909616868a01908152838a0182815260608b0198895295835295522095518654935192516001600160e81b031990941691161760a09190911b600160a01b600160e01b03161790151560e01b60ff60e01b1617835551910155565b602490855190624809a360e21b82526004820152fd5b634e487b7160e01b83526011600452602483fd5b508181813d8311610979575b61095e8183610700565b810103126100e1575160ff811681036100e15760ff906107ff565b503d610954565b84513d85823e3d90fd5b849196506109ad908a3d8c116109b4575b6109a58183610700565b810190610739565b95906107da565b503d61099b565b83513d84823e3d90fd5b8151633a4406b560e01b815260048101859052602490fd5b6040516319b1d90760e31b8152336004820152602490fd5b9190811015610a055760051b0190565b634e487b7160e01b600052603260045260246000fd5b356001600160a01b03811681036100dc5790565b818110610a3a570390565b634e487b7160e01b600052601160045260246000fd5b908160209103126100dc575180151581036100dc5790565b600060018060a01b03808316948583526020926001845260409788822090895191610a94608084610700565b600181549160ff88841693848752838060401b038160a01c168b88015260e01c1615158d8601520154606084015215610bbd57610b6c575b87825260028552610af0818a842098868116998a60005288528b6000205498610be8565b868111610b04575b50505050505050505050565b898593610b327f2422cac5e23c46c890fdcf42d0c64757409df6832174df639337558f09d99c689984610a2f565b9a815260028852208860005286528960002055610b53888484845116610cd4565b511696519586521693a438808080808080808080610af8565b90873b156105d457885163bfe69c8d60e01b815287851660048201528181602481838d5af18015610bb357610ba3575b5090610acc565b81610bad91610700565b38610b9c565b8a513d84823e3d90fd5b8951634e2c71db60e11b8152600481018a9052602490fd5b8060001904821181151516610a3a570290565b604051632ae6e9fd60e21b81526001600160a01b039283166004820152929160209184916024918391165afa918215610cad57600092610c8d575b5060408101516001600160401b03928316929015610c6957906060610c5b670de0b6b3a764000094610c659460208501511690610bd5565b915b015190610bd5565b0490565b602082015116908115610770576060610c6592670de0b6b3a7640000940491610c5d565b610ca691925060203d81116109b4576109a58183610700565b9038610c23565b6040513d6000823e3d90fd5b6001600160a01b039091168152602081019190915260400190565b6020604051809263a9059cbb60e01b825281600081610cf7898960048401610cb9565b03926001600160a01b03165af1908115610cad57600091610d3d575b5015610d1d575050565b610d3960405192839263701ed0db60e01b845260048401610cb9565b0390fd5b610d55915060203d811161045b5761044d8183610700565b38610d1356fea26469706673582212200192a1f4804032057870e7e3c398a4b66267ea539ab666e98f83681592c029dd64736f6c634300080f0033";

type CometRewardsConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CometRewardsConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class CometRewards__factory extends ContractFactory {
  constructor(...args: CometRewardsConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    governor_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<CometRewards> {
    return super.deploy(governor_, overrides || {}) as Promise<CometRewards>;
  }
  getDeployTransaction(
    governor_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(governor_, overrides || {});
  }
  attach(address: string): CometRewards {
    return super.attach(address) as CometRewards;
  }
  connect(signer: Signer): CometRewards__factory {
    return super.connect(signer) as CometRewards__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CometRewardsInterface {
    return new utils.Interface(_abi) as CometRewardsInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CometRewards {
    return new Contract(address, _abi, signerOrProvider) as CometRewards;
  }
}
