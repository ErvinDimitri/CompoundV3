/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { MainnetBulker, MainnetBulkerInterface } from "../MainnetBulker";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "admin_",
        type: "address",
      },
      {
        internalType: "address payable",
        name: "weth_",
        type: "address",
      },
      {
        internalType: "address",
        name: "wsteth_",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "FailedToSendNativeToken",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidAddress",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidArgument",
    type: "error",
  },
  {
    inputs: [],
    name: "TransferInFailed",
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
    inputs: [],
    name: "UnhandledAction",
    type: "error",
  },
  {
    inputs: [],
    name: "UnsupportedBaseAsset",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "oldAdmin",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
    ],
    name: "AdminTransferred",
    type: "event",
  },
  {
    inputs: [],
    name: "ACTION_CLAIM_REWARD",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "ACTION_SUPPLY_ASSET",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "ACTION_SUPPLY_NATIVE_TOKEN",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "ACTION_SUPPLY_STETH",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "ACTION_TRANSFER_ASSET",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "ACTION_WITHDRAW_ASSET",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "ACTION_WITHDRAW_NATIVE_TOKEN",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "ACTION_WITHDRAW_STETH",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
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
        internalType: "bytes32[]",
        name: "actions",
        type: "bytes32[]",
      },
      {
        internalType: "bytes[]",
        name: "data",
        type: "bytes[]",
      },
    ],
    name: "invoke",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "steth",
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
  {
    inputs: [
      {
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
    ],
    name: "transferAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "wrappedNativeToken",
    outputs: [
      {
        internalType: "address payable",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "wsteth",
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
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x60e080604052346200015c576060816200195f803803809162000023828562000161565b8339810103126200015c5762000039816200019b565b60208201516001600160a01b03929083811681036200015c5760048491620000666040602095016200019b565b600080546001600160a01b0319169690971695909517865560805260c084905260405163183fc7c960e31b81529493859283918691165af19182156200014f57819262000107575b8260a0526040516117ae9081620001b1823960805181818161018b01528181610bb00152610e58015260a05181818161065a015281816112ea01526114bf015260c051818181610821015281816111e401526114810152f35b9091506020813d821162000146575b81620001256020938362000161565b8101031262000142576200013a91506200019b565b3880620000ae565b5080fd5b3d915062000116565b50604051903d90823e3d90fd5b600080fd5b601f909101601f19168101906001600160401b038211908210176200018557604052565b634e487b7160e01b600052604160045260246000fd5b51906001600160a01b03821682036200015c5756fe6080604052600436101561001b575b361561001957600080fd5b005b60003560e01c806317fcb39b1461015b5780631aa7c53e14610152578063258836fe14610149578063555029a61461014057806375829def14610137578063953d7ee21461012e5780639860d6e6146101255780639f2929151461011c578063b660c15614610113578063b69d34151461010a578063b8ef9d9814610101578063c7f6d7b5146100f8578063cc157905146100ef578063d1d8bce7146100e6578063d69adac4146100dd5763f851a4400361000e576100d861088c565b61000e565b506100d8610850565b506100d861080a565b506100d86107d0565b506100d861079d565b506100d861076a565b506100d8610737565b506100d86106f3565b506100d86106be565b506100d8610689565b506100d8610643565b506100d86105a7565b506100d8610302565b506100d8610200565b506100d86101ba565b506100d8610174565b600091031261016f57565b600080fd5b503461016f57600036600319011261016f576040517f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168152602090f35b503461016f57600036600319011261016f57604051741050d51253d397d514905394d1915497d054d4d155605a1b8152602090f35b6001600160a01b0381160361016f57565b503461016f57604036600319011261016f5760043561021e816101ef565b60243561022a816101ef565b6000546001600160a01b031633036102c1576040516370a0823160e01b8152610019929091602083806102603060048301610630565b03816001600160a01b0385165afa9283156102b4575b600093610284575b5061108f565b6102a691935060203d81116102ad575b61029e81836108cd565b8101906108fd565b913861027e565b503d610294565b6102bc61090c565b610276565b6040516282b42960e81b8152600490fd5b9181601f8401121561016f578235916001600160401b03831161016f576020808501948460051b01011161016f57565b50604036600319011261016f576001600160401b0360043581811161016f5761032f9036906004016102d2565b9160243590811161016f576103489036906004016102d2565b9081840361059557349360005b81811061039257858061036457005b600080809260405190335af1610378610919565b501561038057005b60405163d1a4579f60e01b8152600490fd5b61039d81838761097d565b35721050d51253d397d4d55414131657d054d4d155606a1b81036103f35750806103ed6103d86103d0600194888861099b565b810190610a67565b9290868060a01b038080921693169116610aea565b01610355565b9095907920a1aa24a7a72fa9aaa828262cafa720aa24ab22afaa27a5a2a760311b8103610459575061045260019161044c61043a6104328a898961099b565b810190610a3a565b9190868060a01b038091169116610b95565b90610a9e565b955b6103ed565b9095600191741050d51253d397d514905394d1915497d054d4d155605a1b81036104a4575061045461048f6103d083888861099b565b9290868060a01b038080921693169116610dd1565b741050d51253d397d5d2551211149055d7d054d4d155605a1b81036104ea57506104546104d56103d083888861099b565b9290868060a01b038080921693169116610e0b565b7b20a1aa24a7a72faba4aa24222920abafa720aa24ab22afaa27a5a2a760211b8103610534575061045461052261043283888861099b565b9190858060a01b038091169116610e45565b721050d51253d397d0d310525357d49155d05491606a1b8103610580575061045461056b61056383888861099b565b8101906109f4565b9290868060a01b03808092169316911661103d565b6104549061058f83888861099b565b91611137565b60405163a9cb9e0d60e01b8152600490fd5b503461016f57602036600319011261016f576004356105c5816101ef565b600054906001600160a01b0380831691338390036102c15716801561061e578060009360018060a01b031916178355604051917ff8ccb027dfcd135e000e9d45e6cc2d662578a8825d4c45b5e32e0adf67e79ec68484a3f35b60405163e6c4247b60e01b8152600490fd5b6001600160a01b03909116815260200190565b503461016f57600036600319011261016f576040517f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168152602090f35b503461016f57600036600319011261016f57604051741050d51253d397d5d2551211149055d7d054d4d155605a1b8152602090f35b503461016f57600036600319011261016f576040517408286a8929e9cbeae92a89088a482aebea6a88aa89605b1b8152602090f35b503461016f57602036600319011261016f57600435610711816101ef565b6000546001600160a01b031633036102c157600080809247604051915af1610378610919565b503461016f57600036600319011261016f576040517208286a8929e9cbea6aaa0a098b2bea6a88aa89606b1b8152602090f35b503461016f57600036600319011261016f57604051721050d51253d397d4d55414131657d054d4d155606a1b8152602090f35b503461016f57600036600319011261016f57604051721050d51253d397d0d310525357d49155d05491606a1b8152602090f35b503461016f57600036600319011261016f576040517920a1aa24a7a72fa9aaa828262cafa720aa24ab22afaa27a5a2a760311b8152602090f35b503461016f57600036600319011261016f576040517f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168152602090f35b503461016f57600036600319011261016f576040517b20a1aa24a7a72faba4aa24222920abafa720aa24ab22afaa27a5a2a760211b8152602090f35b503461016f57600036600319011261016f576000546040516001600160a01b039091168152602090f35b50634e487b7160e01b600052604160045260246000fd5b601f909101601f19168101906001600160401b038211908210176108f057604052565b6108f86108b6565b604052565b9081602091031261016f575190565b506040513d6000823e3d90fd5b3d15610961573d906001600160401b038211610954575b60405191610948601f8201601f1916602001846108cd565b82523d6000602084013e565b61095c6108b6565b610930565b606090565b50634e487b7160e01b600052603260045260246000fd5b919081101561098e575b60051b0190565b610996610966565b610987565b91908110156109dd575b60051b81013590601e198136030182121561016f5701803591906001600160401b03831161016f57602001823603811361016f579190565b6109e5610966565b6109a5565b8015150361016f57565b919082608091031261016f578135610a0b816101ef565b916020810135610a1a816101ef565b9160606040830135610a2b816101ef565b920135610a37816109ea565b90565b9081606091031261016f578035610a50816101ef565b9160406020830135610a61816101ef565b92013590565b919082608091031261016f578135610a7e816101ef565b916020810135610a8d816101ef565b9160606040830135610a61816101ef565b818110610aa9570390565b634e487b7160e01b600052601160045260246000fd5b6001600160a01b03918216815291811660208301529091166040820152606081019190915260800190565b919290916001600160a01b0316803b1561016f57610b24936000809460405196879586948593639032317760e01b85523360048601610abf565b03925af18015610b43575b610b365750565b6000610b41916108cd565b565b610b4b61090c565b610b2f565b9081602091031261016f5751610a37816101ef565b9081602091031261016f5751610a37816109ea565b6001600160a01b039091168152602081019190915260400190565b60405163c55dae6360e01b81526001600160a01b03808316937f0000000000000000000000000000000000000000000000000000000000000000939092602092879084836004818b5afa928315610dc4575b600093610d95575b5080871692168214610d20575b50803b1561016f57868391610c4d93604051630d0e30db60e41b815260008160048187875af18015610d13575b610cfe575b50600060405180968195829463095ea7b360e01b845260048401610b7a565b03925af18015610cf1575b610cc3575b5050823b1561016f57610c8e9260009283869360405196879586948593639032317760e01b85523060048601610abf565b03925af18015610cb6575b610ca1575090565b80610cb06000610a37936108cd565b80610164565b610cbe61090c565b610c99565b81610ce292903d10610cea575b610cda81836108cd565b810190610b65565b503880610c5d565b503d610cd0565b610cf961090c565b610c58565b80610cb06000610d0d936108cd565b38610c2e565b610d1b61090c565b610c29565b60001914610d2f575b38610bfc565b604051630dd3126d60e21b8152909650828180610d4f3360048301610630565b0381895afa908115610d88575b600091610d6b575b5095610d29565b610d829150833d85116102ad5761029e81836108cd565b38610d64565b610d9061090c565b610d5c565b610db6919350853d8711610dbd575b610dae81836108cd565b810190610b50565b9138610bef565b503d610da4565b610dcc61090c565b610be7565b919290916001600160a01b0316803b1561016f57610b2493600080946040519687958694859363183dc58360e31b85523360048601610abf565b919290916001600160a01b0316803b1561016f57610b249360008094604051968795869485936304c8826360e31b85523360048601610abf565b6040805163c55dae6360e01b81529093917f0000000000000000000000000000000000000000000000000000000000000000906001600160a01b039081169060209085908286600481875afa958615611030575b600096611011575b5080851695168514610f9a575b5050803b1561016f5783600091610edd938389518096819582946304c8826360e31b8452303360048601610abf565b03925af18015610f8d575b610f78575b50803b1561016f57600092839283928387518092632e1a7d4d60e01b8252818381610f2088600483019190602083019252565b03925af18015610f6b575b610f57575b508551915af1610f3e610919565b5015610f475750565b5163d1a4579f60e01b8152600490fd5b80610cb085610f65936108cd565b38610f30565b610f7361090c565b610f2b565b80610cb06000610f87936108cd565b38610eed565b610f9561090c565b610ee8565b60001914610fa9575b80610eae565b86516370a0823160e01b815291945090818180610fc93360048301610630565b0381885afa918215611004575b600092610fe7575b50509238610fa3565b610ffd9250803d106102ad5761029e81836108cd565b3880610fde565b61100c61090c565b610fd6565b611029919650833d8511610dbd57610dae81836108cd565b9438610ea1565b61103861090c565b610e99565b9192916001600160a01b0391821690813b1561016f5760006064928195856040519889978896635b81a7bf60e11b8852166004870152166024850152151560448401525af18015610b4357610b365750565b6001600160a01b03169291833b1561016f576110c990604051809581809563a9059cbb60e01b825260009889968796879360048401610b7a565b03925af1801561112a575b61111a575b503d9050801561110f576020146110ee575080fd5b90602081803e515b156110fd57565b60405163cefaffeb60e01b8152600490fd5b5090506000196110f6565b611123916108cd565b38826110d9565b61113261090c565b6110d4565b7208286a8929e9cbea6aaa0a098b2bea6a88aa89606b1b8103611178575080610b4192611165920190610a3a565b916001600160a01b039182169116611440565b7408286a8929e9cbeae92a89088a482aebea6a88aa89605b1b0361142e576111a291810190610a3a565b6040805163c55dae6360e01b81526001600160a01b03948516946020949093909291906004908590878484818c5afa938415611421575b600094611402575b507f000000000000000000000000000000000000000000000000000000000000000093828516921682146113f2576000908860001982036113955750508451632e12a4f760e11b8152338482019081526001600160a01b038616602082015290915088908290819060400103818c5afa908115611388575b60009161135b575b506001600160801b0316915b883b1561016f576000856112a38286610b419d8d99836112d19c518096819582946304c8826360e31b8452308d33908601610abf565b03925af1801561134e575b61133a575b5051809681958294636f074d1f60e11b845283019190602083019252565b03925af193841561132d575b60009461130e575b5050167f000000000000000000000000000000000000000000000000000000000000000061108f565b611325929450803d106102ad5761029e81836108cd565b9138806112e5565b61133561090c565b6112dd565b80610cb084611348936108cd565b386112b3565b61135661090c565b6112ae565b61137b9150883d8a11611381575b61137381836108cd565b810190611759565b38611261565b503d611369565b61139061090c565b611259565b865162b0e38960e81b815285810192835291829081906020010381865afa9182156113e5575b916113c8575b509161126d565b6113df9150883d8a116102ad5761029e81836108cd565b386113c1565b6113ed61090c565b6113bb565b84516382d6580f60e01b81528390fd5b61141a919450883d8a11610dbd57610dae81836108cd565b92386111e1565b61142961090c565b6111d9565b60405163fb90de7160e01b8152600490fd5b6040805163c55dae6360e01b815293949360049390926001600160a01b03808216939160209182878981895afa968715611690575b600097611671575b50807f000000000000000000000000000000000000000000000000000000000000000097818916928391161461166157838b611505826115349d9e8d958d60007f0000000000000000000000000000000000000000000000000000000000000000926114ea85338661169d565b8d5180978196829563095ea7b360e01b9d8e85528401610b7a565b0393165af18015611654575b611637575b508651809c8192630ea598cb60e41b83528d83019190602083019252565b03816000865af1998a1561162a575b60009a6115fe575b509183918960008c9561156989519788968795869485528401610b7a565b03925af180156115f1575b6115d3575b5050823b1561016f576000946115a586925197889687958694639032317760e01b865230908601610abf565b03925af180156115c6575b6115b75750565b80610cb06000610b41936108cd565b6115ce61090c565b6115b0565b816115e992903d10610cea57610cda81836108cd565b503880611579565b6115f961090c565b611574565b60009a50918961161e8694859694963d87116102ad5761029e81836108cd565b9b50509192909261154b565b61163261090c565b611543565b61164d90833d8511610cea57610cda81836108cd565b5038611516565b61165c61090c565b611511565b84516382d6580f60e01b81528990fd5b611689919750833d8511610dbd57610dae81836108cd565b953861147d565b61169861090c565b611475565b9092916001600160a01b0390911690813b1561016f576040516323b872dd60e01b81526001600160a01b0394909416600485015230602485015260448401526000929083908290606490829084905af1801561174c575b611738575b503d801561172d5760201461170c575080fd5b90602081803e515b1561171b57565b60405163073d1efd60e51b8152600490fd5b509050600019611714565b80610cb084611746936108cd565b386116f9565b61175461090c565b6116f4565b9081602091031261016f57516001600160801b038116810361016f579056fea264697066735822122079c36542782da1d62a67b506da248c89e177e364b4a54f96bf81ed82d7d77ddd64736f6c634300080f0033";

type MainnetBulkerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MainnetBulkerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MainnetBulker__factory extends ContractFactory {
  constructor(...args: MainnetBulkerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    admin_: string,
    weth_: string,
    wsteth_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MainnetBulker> {
    return super.deploy(
      admin_,
      weth_,
      wsteth_,
      overrides || {}
    ) as Promise<MainnetBulker>;
  }
  getDeployTransaction(
    admin_: string,
    weth_: string,
    wsteth_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(admin_, weth_, wsteth_, overrides || {});
  }
  attach(address: string): MainnetBulker {
    return super.attach(address) as MainnetBulker;
  }
  connect(signer: Signer): MainnetBulker__factory {
    return super.connect(signer) as MainnetBulker__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MainnetBulkerInterface {
    return new utils.Interface(_abi) as MainnetBulkerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MainnetBulker {
    return new Contract(address, _abi, signerOrProvider) as MainnetBulker;
  }
}