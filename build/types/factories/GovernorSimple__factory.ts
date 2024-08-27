/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  GovernorSimple,
  GovernorSimpleInterface,
} from "../GovernorSimple";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "ProposalCanceled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "proposer",
        type: "address",
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
        name: "startBlock",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "description",
        type: "string",
      },
    ],
    name: "ProposalCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "ProposalExecuted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "ProposalQueued",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newAdminAddress",
        type: "address",
      },
    ],
    name: "addAdmin",
    outputs: [],
    stateMutability: "nonpayable",
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
    name: "admins",
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
        name: "proposalId",
        type: "uint256",
      },
    ],
    name: "cancel",
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
    name: "execute",
    outputs: [],
    stateMutability: "payable",
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
    name: "getActions",
    outputs: [
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
        name: "calldatas",
        type: "bytes[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "timelock_",
        type: "address",
      },
      {
        internalType: "address[]",
        name: "admins_",
        type: "address[]",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "isAdmin",
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
    inputs: [],
    name: "proposalMaxOperations",
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
        internalType: "address",
        name: "proposer",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "startBlock",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "canceled",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "queued",
        type: "bool",
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
        name: "calldatas",
        type: "bytes[]",
      },
      {
        internalType: "string",
        name: "description",
        type: "string",
      },
    ],
    name: "propose",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
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
    name: "queue",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "adminAddress",
        type: "address",
      },
    ],
    name: "removeAdmin",
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
    name: "state",
    outputs: [
      {
        internalType: "enum GovernorSimple.ProposalState",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "timelock",
    outputs: [
      {
        internalType: "contract TimelockInterface",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x6080806040523461001657611fce908161001c8239f35b600080fdfe608080604052600436101561001357600080fd5b60003560e01c908163013cf08b146118475750806314bfd6d0146118035780631785f53c1461163857806324d7806c146115ff578063328dd9821461155d5780633e4f49e61461152e57806340e58ee51461131057806370480275146112355780637bdbe4d014611219578063946d9204146110e1578063d33219b4146110b8578063da35c6641461109a578063da95691a146106f0578063ddf0b009146103785763fe0d94c1146100c457600080fd5b60208060031936011261024a576004356100dd33611f45565b15610317576100eb81611e08565b60048110156103015760020361028757600081815260038084526040822060078101805462ffff001916620100001790558082019260058201926004830192600201915b825481101561025b57600080546001600160a01b03908116929190610154838a6118b8565b905490861b1c9061016584886118b8565b905490871b1c1693610177848b6118b8565b905490871b1c610187858a6118b8565b5092610193868c6118b8565b50966101b560405198899687958694632224fa2560e01b865260048601611cbd565b03925af1801561024f576101d3575b6101ce9150611b61565b61012f565b3d806000843e6101e38184611a0d565b820191898184031261024a578051906001600160401b03821161024a57019180601f8401121561024a57825161021881611ab5565b916102266040519384611a0d565b8183528b828601011161024a576101ce938b8061024594019101611957565b6101c4565b600080fd5b6040513d6000823e3d90fd5b7f712ae1383f79ac853f8d882153778e0260ef8f03b504e2866e0593e04d2b291f8888604051908152a1005b60405162461bcd60e51b815260048101839052604660248201527f476f7665726e6f7253696d706c653a3a657865637574653a2070726f706f736160448201527f6c2063616e206f6e6c79206265206578656375746564206966206974206973206064820152651c5d595d595960d21b608482015260a490fd5b634e487b7160e01b600052602160045260246000fd5b60405162461bcd60e51b815260048101839052603360248201527f476f7665726e6f7253696d706c653a3a657865637574653a206f6e6c7920676f6044820152727665726e6f72732063616e206578656375746560681b6064820152608490fd5b3461024a57602036600319011261024a5760043561039533611f45565b15610693576103a381611e08565b60048110156103015761061d578060005260038060205260406000206007810161010061ff00198254161790556000908281019160058201905b60028301548110156105f05761044b61044b6103fc83600287016118b8565b90546001600160a01b0391891b1c8116919061041885896118b8565b9054908a1b1c9061045e61042f8760048b016118b8565b5061045261043d898b6118b8565b509160405196878092611bef565b0386611a0d565b60405196878092611bef565b6000541690604051602081019061048a8161047c8988878b88611c85565b03601f198101835282611a0d565b5190206040519063f2b0653760e01b82526004820152602081602481865afa90811561024f576000916105b5575b5061052b5760006020946104e260405197889687958694633275cf4d60e01b865260048601611c85565b03925af1801561024f57610500575b506104fb90611b61565b6103dd565b602090813d8311610524575b6105168183611a0d565b8101031261024a57866104f1565b503d61050c565b60405162461bcd60e51b815260206004820152605660248201527f476f7665726e6f7253696d706c653a3a71756575654f72526576657274496e7460448201527f65726e616c3a206964656e746963616c2070726f706f73616c20616374696f6e60648201527520616c7265616479207175657565642061742065746160501b608482015260a490fd5b90506020813d6020116105e8575b816105d060209383611a0d565b8101031261024a5751801515810361024a578c6104b8565b3d91506105c3565b7f3358bd34aca93e3ad9a243de48c96b8a820ec804097b77ee85179c1bcdfe9e9f602087604051908152a1005b60405162461bcd60e51b815260206004820152604260248201527f476f7665726e6f7253696d706c653a3a71756575653a2070726f706f73616c2060448201527f63616e206f6e6c79206265207175657565642069662069742069732061637469606482015261766560f01b608482015260a490fd5b60405162461bcd60e51b815260206004820152602f60248201527f476f7665726e6f7253696d706c653a3a71756575653a206f6e6c7920676f766560448201526e726e6f72732063616e20717565756560881b6064820152608490fd5b3461024a5760a036600319011261024a576004356001600160401b03811161024a57610720903690600401611a47565b6024356001600160401b03811161024a573660238201121561024a5780600401359061074b82611a30565b916107596040519384611a0d565b8083526024602084019160051b8301019136831161024a57602401905b82821061108a5750506044359190506001600160401b03821161024a573660238301121561024a5781600401356107ac81611a30565b926107ba6040519485611a0d565b8184526024602085019260051b8201019036821161024a5760248101925b82841061105b5750506001600160401b0360643511915061024a90505736602360643501121561024a576064356004013561081281611a30565b906108206040519283611a0d565b80825260208201903660248260051b60643501011161024a57602460643501915b60248260051b6064350101831061100f57505060843590506001600160401b03811161024a57610875903690600401611b07565b9061087f33611f45565b15610fae578451835181149081610fa3575b81610f98575b5015610f1f57845115610ec457600a855111610e6d576108b8600254611b61565b9384600255604051946108cd61014087611a0d565b8086523360208701528660408701528460608701528160808701528260a08701524360c0870152600060e08701526000610100870152600061012087015260005260036020526040600020855181556001810160018060a01b0360208801511660018060a01b03198254161790556040860151805190600160401b8211610c2e576020600284019161096484845481865585611b3c565b019060005260206000206000915b838310610e3d57505050506060860151805190600160401b8211610c2e57602060038401916109a684845481865585611b3c565b019060005260206000206000915b838310610e2757505050506080860151805190600160401b8211610c2e576004830154826004850155808310610da4575b5060200190600483016000526020600020916000905b828210610cc7575050505060a0860151805190600160401b8211610c2e576005830154826005850155808310610c44575b5060200190600583016000526020600020916000905b828210610b4b57506020897fecb3cef6b7909dbd326874efa66fc26c8143a104b3fcb06e34712a411bc8417b8c8b610b3f8c610b2b8d610b1d8e60078f60c08c015160068201550160e08b015115158b60ff835492168060ff19841617845562ff000061012061ff00610100850151151560081b1693848461ffff198816171787550151151560101b169262ffffff19161717179055610b0f8a5197610b016040519a8b9a8b52338f8c015261010060408c01526101008b01906118e6565b9089820360608b0152611923565b9087820360808901526119b1565b9085820360a08701526119b1565b904360c085015283820360e085015261198c565b0390a151604051908152f35b80518051906001600160401b038211610c2e57610b7282610b6c8854611b70565b88611baa565b602090601f8311600114610bbe579282600194936020938695600092610bb3575b5050600019600383901b1c191690841b1787555b01940191019092610a42565b015190503880610b93565b908660005260206000209160005b601f1985168110610c16575083602093600196938796938794601f19811610610bfd575b505050811b018755610ba7565b015160001960f88460031b161c19169055388080610bf0565b91926020600181928685015181550194019201610bcc565b634e487b7160e01b600052604160045260246000fd5b600584016000526020600020908382015b8183018110610c65575050610a2c565b80610c7260019254611b70565b80610c7f575b5001610c55565b601f908181118414610c98575050600081555b8d610c78565b83610cb492846000526020600020920160051c82019101611b25565b8060005260006020812081835555610c92565b80518051906001600160401b038211610c2e57610ce882610b6c8854611b70565b602090601f8311600114610d34579282600194936020938695600092610d29575b5050600019600383901b1c191690841b1787555b019401910190926109fb565b015190503880610d09565b908660005260206000209160005b601f1985168110610d8c575083602093600196938796938794601f19811610610d73575b505050811b018755610d1d565b015160001960f88460031b161c19169055388080610d66565b91926020600181928685015181550194019201610d42565b600484016000526020600020908382015b8183018110610dc55750506109e5565b80610dd260019254611b70565b80610ddf575b5001610db5565b601f908181118414610df8575050600081555b8d610dd8565b83610e1492846000526020600020920160051c82019101611b25565b8060005260006020812081835555610df2565b60016020828293518555019201920191906109b4565b805182546001600160a01b0319166001600160a01b03919091161782556001928301929190910190602001610972565b60405162461bcd60e51b815260206004820152602960248201527f476f7665726e6f7253696d706c653a3a70726f706f73653a20746f6f206d616e6044820152687920616374696f6e7360b81b6064820152608490fd5b60405162461bcd60e51b815260206004820152602d60248201527f476f7665726e6f7253696d706c653a3a70726f706f73653a206d75737420707260448201526c6f7669646520616374696f6e7360981b6064820152608490fd5b60405162461bcd60e51b815260206004820152604560248201527f476f7665726e6f7253696d706c653a3a70726f706f73653a2070726f706f736160448201527f6c2066756e6374696f6e20696e666f726d6174696f6e206172697479206d69736064820152640dac2e8c6d60db1b608482015260a490fd5b905081511486610897565b855181149150610891565b60405162461bcd60e51b815260206004820152603360248201527f476f7665726e6f7253696d706c653a3a70726f706f73653a206f6e6c7920676f6044820152727665726e6f72732063616e2070726f706f736560681b6064820152608490fd5b8235906001600160401b03821161024a57366043836064350101121561024a57602491602091829161104e903690606435018087013590604401611ad0565b8152019301929050610841565b83356001600160401b03811161024a5760209161107f839260243691870101611b07565b8152019301926107d8565b8135815260209182019101610776565b3461024a57600036600319011261024a576020600254604051908152f35b3461024a57600036600319011261024a576000546040516001600160a01b039091168152602090f35b3461024a57604036600319011261024a576001600160a01b036004358181169081900361024a576024356001600160401b03811161024a57611127903690600401611a47565b91600054918183166111b7576001600160a01b031992831617600055825191600160401b8311610c2e576001938454848655808510611199575b506020809101918560005281600020906000935b86851061117e57005b87848288839451168587541617865501930194019391611175565b6111b190866000528560206000209182019101611b25565b85611161565b60405162461bcd60e51b815260206004820152603460248201527f476f7665726e6f7253696d706c653a3a696e697469616c697a653a2063616e206044820152736f6e6c7920696e697469616c697a65206f6e636560601b6064820152608490fd5b3461024a57600036600319011261024a576020604051600a8152f35b3461024a57602036600319011261024a576001600160a01b036004358181169081900361024a5761126533611f45565b156112a857600154600160401b811015610c2e5780600161128b920160015560016118b8565b909283549160031b90811b9283911b169119161790556000604051f35b60405162461bcd60e51b815260206004820152603a60248201527f476f7665726e6f7253696d706c653a3a61646441646d696e3a206f6e6c7920676044820152796f7665726e6f72732063616e2061646420676f7665726e6f727360301b6064820152608490fd5b3461024a57602036600319011261024a5760043561132d33611f45565b156114cf5761133b81611e08565b600481101561030157600380911461146a57816000528060205260406000209060078201906001918260ff19825416179055816000916002850190808601936005600488019701935b6113b6575b7f789cf55be980739dad1d0699b93b58e806b51c9d96619bfa8fe0a28abaa7b30c602089604051908152a1005b8254811015611465576000546001600160a01b0390811691906113d982866118b8565b905490851b1c166113ea82886118b8565b905490851b1c926113fb838b6118b8565b509061140784896118b8565b5094813b1561024a576000809461143460405198899687958694635f8bac3b60e11b865260048601611cbd565b03925af191821561024f5761144e92611454575b50611b61565b85611384565b600061145f91611a0d565b89611448565b611389565b60405162461bcd60e51b815260206004820152603760248201527f476f7665726e6f7253696d706c653a3a63616e63656c3a2063616e6e6f742063604482015276185b98d95b08195e1958dd5d1959081c1c9bdc1bdcd85b604a1b6064820152608490fd5b60405162461bcd60e51b815260206004820152603160248201527f476f7665726e6f7253696d706c653a3a63616e63656c3a206f6e6c7920676f76604482015270195c9b9bdc9cc818d85b8818d85b98d95b607a1b6064820152608490fd5b3461024a57602036600319011261024a5761154a600435611e08565b6040516004821015610301576020918152f35b3461024a57602036600319011261024a5760043560005260036020526115d160406000206115fb61159060028301611cf5565b916115ed6115a060038301611d4d565b916115df6115bc60056115b560048501611d9c565b9301611d9c565b936040519788976080895260808901906118e6565b908782036020890152611923565b9085820360408701526119b1565b9083820360608501526119b1565b0390f35b3461024a57602036600319011261024a576004356001600160a01b038116810361024a5761162e602091611f45565b6040519015158152f35b3461024a57602036600319011261024a576001600160a01b036004358181169081900361024a5761166833611f45565b1561179957803314611733576000806001928354925b8381106116c857505061168d57005b80156116b25760001901916116a283836118b8565b909182549160031b1b1916905555005b634e487b7160e01b600052603160045260246000fd5b81866116d483886118b8565b90549060031b1c16146116f0575b6116eb90611b61565b61167e565b91506116fc82856118b8565b505083831061171d576117136000198401856118b8565b50849290506116e2565b634e487b7160e01b600052601160045260246000fd5b60405162461bcd60e51b815260206004820152603860248201527f476f7665726e6f7253696d706c653a3a72656d6f766541646d696e3a2063616e6044820152773737ba103932b6b7bb329039b2b6331030b99030b236b4b760411b6064820152608490fd5b608460405162461bcd60e51b815260206004820152604060248201527f476f7665726e6f7253696d706c653a3a72656d6f766541646d696e3a206f6e6c60448201527f7920676f7665726e6f72732063616e2072656d6f766520676f7665726e6f72736064820152fd5b3461024a57602036600319011261024a5760043560015481101561024a5761182e60209160016118b8565b905460405160039290921b1c6001600160a01b03168152f35b3461024a57602036600319011261024a5760c090600435600052600360205260ff604060002080549060018060a01b03600182015416600760068301549201549285526020850152604084015281811615156060840152818160081c161515608084015260101c16151560a0820152f35b80548210156118d05760005260206000200190600090565b634e487b7160e01b600052603260045260246000fd5b90815180825260208080930193019160005b828110611906575050505090565b83516001600160a01b0316855293810193928101926001016118f8565b90815180825260208080930193019160005b828110611943575050505090565b835185529381019392810192600101611935565b918091926000905b828210611977575011611970575050565b6000910152565b9150806020918301518186015201829161195f565b906020916119a581518092818552858086019101611957565b601f01601f1916010190565b908082519081815260208091019281808460051b8301019501936000915b8483106119df5750505050505090565b90919293949584806119fd600193601f198682030187528a5161198c565b98019301930191949392906119cf565b601f909101601f19168101906001600160401b03821190821017610c2e57604052565b6001600160401b038111610c2e5760051b60200190565b81601f8201121561024a57803591611a5e83611a30565b92611a6c6040519485611a0d565b808452602092838086019260051b82010192831161024a578301905b828210611a96575050505090565b81356001600160a01b038116810361024a578152908301908301611a88565b6001600160401b038111610c2e57601f01601f191660200190565b929192611adc82611ab5565b91611aea6040519384611a0d565b82948184528183011161024a578281602093846000960137010152565b9080601f8301121561024a57816020611b2293359101611ad0565b90565b818110611b30575050565b60008155600101611b25565b91818110611b4957505050565b611b5f9260005260206000209182019101611b25565b565b600019811461171d5760010190565b90600182811c92168015611ba0575b6020831014611b8a57565b634e487b7160e01b600052602260045260246000fd5b91607f1691611b7f565b9190601f8111611bb957505050565b611b5f926000526020600020906020601f840160051c83019310611be5575b601f0160051c0190611b25565b9091508190611bd8565b9060009291805491611c0083611b70565b918282526001938481169081600014611c625750600114611c22575b50505050565b90919394506000526020928360002092846000945b838610611c4e575050505001019038808080611c1c565b805485870183015294019385908201611c37565b9294505050602093945060ff191683830152151560051b01019038808080611c1c565b92611b229492611caf9260018060a01b03168552602085015260806040850152608084019061198c565b91606081840391015261198c565b92611b229492611ce79260018060a01b031685526020850152608060408501526080840190611bef565b916060818403910152611bef565b9060405191828154918282526020928383019160005283600020936000905b828210611d2a57505050611b5f92500383611a0d565b85546001600160a01b031684526001958601958895509381019390910190611d14565b9060405191828154918282526020928383019160005283600020936000905b828210611d8257505050611b5f92500383611a0d565b855484526001958601958895509381019390910190611d6c565b908154611da881611a30565b92604093611db885519182611a0d565b828152809460208092019260005281600020906000935b858510611dde57505050505050565b60018481928451611dfa81611df3818a611bef565b0382611a0d565b815201930194019391611dcf565b8060025410611eed5760005260036020526101206040600020600760405191611e3361014084611a0d565b8054835260018101546001600160a01b03166020840152611e5660028201611cf5565b6040840152611e6760038201611d4d565b6060840152611e7860048201611d9c565b6080840152611e8960058201611d9c565b60a0840152600681015460c084015201549060ff82161515908160e082015260ff808460081c161515938461010084015260101c1615159384910152600014611ed3575050600190565b15611ede5750600290565b15611ee857600390565b600090565b60405162461bcd60e51b815260206004820152602a60248201527f476f7665726e6f7253696d706c653a3a73746174653a20696e76616c696420706044820152691c9bdc1bdcd85b081a5960b21b6064820152608490fd5b600180549160005b838110611f5d5750505050600090565b611f6781846118b8565b905460039190911b1c6001600160a01b0390811690831614611f9157611f8c90611b61565b611f4d565b505090509056fea2646970667358221220e9f716627583f229ed32795eb86c3c87ec9b37b5bca7e04746d6367eed53f2a264736f6c634300080f0033";

type GovernorSimpleConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: GovernorSimpleConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class GovernorSimple__factory extends ContractFactory {
  constructor(...args: GovernorSimpleConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<GovernorSimple> {
    return super.deploy(overrides || {}) as Promise<GovernorSimple>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): GovernorSimple {
    return super.attach(address) as GovernorSimple;
  }
  connect(signer: Signer): GovernorSimple__factory {
    return super.connect(signer) as GovernorSimple__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): GovernorSimpleInterface {
    return new utils.Interface(_abi) as GovernorSimpleInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): GovernorSimple {
    return new Contract(address, _abi, signerOrProvider) as GovernorSimple;
  }
}
