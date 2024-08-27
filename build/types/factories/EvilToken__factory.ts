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
import type { EvilToken, EvilTokenInterface } from "../EvilToken";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_initialAmount",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_tokenName",
        type: "string",
      },
      {
        internalType: "uint8",
        name: "_decimalUnits",
        type: "uint8",
      },
      {
        internalType: "string",
        name: "_tokenSymbol",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "allocateTo",
    outputs: [],
    stateMutability: "nonpayable",
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
    name: "allowance",
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
        name: "_spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "attack",
    outputs: [
      {
        internalType: "enum EvilToken.AttackType",
        name: "attackType",
        type: "uint8",
      },
      {
        internalType: "address",
        name: "source",
        type: "address",
      },
      {
        internalType: "address",
        name: "destination",
        type: "address",
      },
      {
        internalType: "address",
        name: "asset",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "maxCalls",
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
    ],
    name: "balanceOf",
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
    name: "getAttack",
    outputs: [
      {
        components: [
          {
            internalType: "enum EvilToken.AttackType",
            name: "attackType",
            type: "uint8",
          },
          {
            internalType: "address",
            name: "source",
            type: "address",
          },
          {
            internalType: "address",
            name: "destination",
            type: "address",
          },
          {
            internalType: "address",
            name: "asset",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxCalls",
            type: "uint256",
          },
        ],
        internalType: "struct EvilToken.ReentryAttack",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
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
    name: "numberOfCalls",
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
        components: [
          {
            internalType: "enum EvilToken.AttackType",
            name: "attackType",
            type: "uint8",
          },
          {
            internalType: "address",
            name: "source",
            type: "address",
          },
          {
            internalType: "address",
            name: "destination",
            type: "address",
          },
          {
            internalType: "address",
            name: "asset",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxCalls",
            type: "uint256",
          },
        ],
        internalType: "struct EvilToken.ReentryAttack",
        name: "attack_",
        type: "tuple",
      },
    ],
    name: "setAttack",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
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
    name: "totalSupply",
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
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
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
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234620003bb5762000e50803803806200001d81620003c0565b9283398101608082820312620003bb5781516020808401516001600160401b039492939290858111620003bb578362000058918301620003fc565b9060408101519360ff8516809503620003bb576060820151878111620003bb57620000849201620003fc565b84600355600094338652600584526040862055815190868211620002c5578554916001938484811c94168015620003b0575b868510146200039c578190601f9485811162000349575b508690858311600114620002e5578992620002d9575b5050600019600383901b1c191690841b1786555b8051968711620002c55782548381811c91168015620002ba575b85821014620002a6578281116200025e575b5083918711600114620001f85760a09691869183620001ec575b5050600019600383901b1c191690821b1790555b60ff199182600254161760025582600b556200016e60c0620003c0565b9283523090830152306040830152306060830152620f4240918260808201526000199384910152600654908116600655610100600160a81b033060081b169060018060a81b0319161760065560018060a01b03193081600754161760075530906008541617600855600955600a556040516109d09081620004808239f35b0151905038806200013d565b8286528386209190601f198816875b818110620002485750918493918960a09a94106200022e575b505050811b01905562000151565b015160001960f88460031b161c1916905538808062000220565b8284015185559385019392860192860162000207565b83875284872083808a0160051c820192878b106200029c575b0160051c019084905b8281106200029057505062000123565b88815501849062000280565b9250819262000277565b634e487b7160e01b87526022600452602487fd5b90607f169062000111565b634e487b7160e01b86526041600452602486fd5b015190503880620000e3565b898052878a208794509190601f1984168b5b8a82821062000332575050841162000318575b505050811b018655620000f7565b015160001960f88460031b161c191690553880806200030a565b8385015186558a97909501949384019301620002f7565b9091508880528689208580850160051c82019289861062000392575b918891869594930160051c01915b82811062000383575050620000cd565b8b815585945088910162000373565b9250819262000365565b634e487b7160e01b88526022600452602488fd5b93607f1693620000b6565b600080fd5b6040519190601f01601f191682016001600160401b03811183821017620003e657604052565b634e487b7160e01b600052604160045260246000fd5b81601f82011215620003bb578051906001600160401b038211620003e65760209062000431601f8401601f19168301620003c0565b93838552828483010111620003bb5782906000905b8383831062000466575050116200045c57505090565b6000918301015290565b819350828193920101518282880101520183916200044656fe608060408181526004918236101561001657600080fd5b600092833560e01c918262c767201461045e5750816306fdde031461043f57816308bca566146103c2578163095ea7b31461034c57816318160ddd1461032d57816318d461991461030e57816323b872dd146102d3578163313ce567146102b157816370a082311461027757816395d89b41146102485781639e5faafc146101e3578163a9059cbb146101ad578163dd62ed3e14610154575063f6a0e867146100be57600080fd5b3461015057816003193601126101505760c09160a082516100df858261053b565b8281528260208201528284820152826060820152826080820152015260a061010760066106da565b8251926101158483516106b7565b600180841b039081602084015116602086015281818401511690850152606082015116606084015260808101516080840152015160a0820152f35b5080fd5b9050346101a957816003193601126101a9576001600160a01b03908035828116908190036101a5576024359283168093036101a5579184918493602096528552828220908252845220549051908152f35b8480fd5b8280fd5b9050346101a957816003193601126101a957356001600160a01b03811603610150576020906101da610768565b90519015158152f35b505034610150578160031936011261015057600654600754600854600954600a54855160c0969095919492936001600160a01b039081169381169261022b8860ff83166106b7565b60081c1660208701528501526060840152608083015260a0820152f35b505034610150578160031936011261015057610268610273926001610574565b905191829182610660565b0390f35b9050346101a95760203660031901126101a957356001600160a01b038116908190036101a957828291602094526005845220549051908152f35b50503461015057816003193601126101505760209060ff600254169051908152f35b9050346101a95760603660031901126101a9576001600160a01b039035818116036101a95760243590811603610150576020906101da610768565b505034610150578160031936011261015057602090600b549051908152f35b5050346101505781600319360112610150576020906003549051908152f35b9050346101a957816003193601126101a95780356001600160a01b03811691908290036103be57926020938360243592839233825287528181208582528752205582519081527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925843392a35160018152f35b8380fd5b9050346101a957816003193601126101a957356001600160a01b038116908190036101a957602435818452600560205282842061040082825461098e565b905561040e8160035461098e565b60035582519081527fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60203092a351f35b5050346101505781600319360112610150576102688261027393610574565b9150346103be5760c03660031901126103be5761047c60c08361053b565b359060038210156103be578181526001600160a01b03916024359083821682036105375781602084015260443590848216918281036105335786850152606435948516928386036105335760a09560608601526084359485608082015260a435968791015260ff6006549216908160ff19841617600655610100600160a81b039060081b169160018060a81b031916171760065560018060a01b0319908160075416176007556008541617600855600955600a5551f35b8780fd5b8580fd5b601f909101601f19168101906001600160401b0382119082101761055e57604052565b634e487b7160e01b600052604160045260246000fd5b919061064a576040516000835490600182811c90808416968715610640575b602094858410891461062c578697988488979852908160001461060a57506001146105cb575b5050506105c89250038261053b565b90565b600090815285812095935091905b8183106105f25750506105c893508201013880806105b9565b855487840185015294850194869450918301916105d9565b925050506105c894925060ff191682840152151560051b8201013880806105b9565b634e487b7160e01b85526022600452602485fd5b91607f1691610593565b634e487b7160e01b600052600060045260246000fd5b919091602080825283519081818401526000945b8286106106a1575050806040939411610694575b601f01601f1916010190565b6000838284010152610688565b8581018201518487016040015294810194610674565b9060038210156106c45752565b634e487b7160e01b600052602160045260246000fd5b906040516106e960c08261053b565b809280549060ff82169060038210156106c45760a0926004928552600180851b03809160081c1660208601528060018301541660408601526002820154166060850152600381015460808501520154910152565b6001600160a01b03918216815291811660208301529091166040820152606081019190915260800190565b61077260066106da565b600b5460001981146109785760010180600b5560a08201511015610797575b50600190565b805160038110156106c4576108475760208082015160408084015160809094015190516323b872dd60e01b81526001600160a01b0392831660048201529390911660248401526044830152600091908160648185335af1801561083c57610802575b50505b38610791565b6020813d8211610834575b8161081a6020938361053b565b8101031261015057518015150361083157806107f9565b80fd5b3d915061080d565b6040513d84823e3d90fd5b805160038110156106c4576001036108dd5760018060a01b0380602083015116906080816040850151169160608501511693015191333b156108d8576108a460009360405195869485946304c8826360e31b86526004860161073d565b038183335af180156108cc576108bb575b506107fc565b60006108c69161053b565b386108b5565b6040513d6000823e3d90fd5b600080fd5b805160038110156106c45760020361093a5760018060a01b0380602083015116906080816040850151169160608501511693015191333b156108d8576108a46000936040519586948594639032317760e01b86526004860161073d565b60405162461bcd60e51b8152602060048201526016602482015275696e76616c6964207265656e7472792061747461636b60501b6044820152606490fd5b634e487b7160e01b600052601160045260246000fd5b8119811161097857019056fea26469706673582212208b55d77a235af110894397ac6871e555c234e8e52c60120449f2b445151dab8064736f6c634300080f0033";

type EvilTokenConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: EvilTokenConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class EvilToken__factory extends ContractFactory {
  constructor(...args: EvilTokenConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    _initialAmount: BigNumberish,
    _tokenName: string,
    _decimalUnits: BigNumberish,
    _tokenSymbol: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<EvilToken> {
    return super.deploy(
      _initialAmount,
      _tokenName,
      _decimalUnits,
      _tokenSymbol,
      overrides || {}
    ) as Promise<EvilToken>;
  }
  getDeployTransaction(
    _initialAmount: BigNumberish,
    _tokenName: string,
    _decimalUnits: BigNumberish,
    _tokenSymbol: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _initialAmount,
      _tokenName,
      _decimalUnits,
      _tokenSymbol,
      overrides || {}
    );
  }
  attach(address: string): EvilToken {
    return super.attach(address) as EvilToken;
  }
  connect(signer: Signer): EvilToken__factory {
    return super.connect(signer) as EvilToken__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): EvilTokenInterface {
    return new utils.Interface(_abi) as EvilTokenInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): EvilToken {
    return new Contract(address, _abi, signerOrProvider) as EvilToken;
  }
}
