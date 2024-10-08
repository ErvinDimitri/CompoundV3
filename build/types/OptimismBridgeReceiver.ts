/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface OptimismBridgeReceiverInterface extends utils.Interface {
  functions: {
    "changeCrossDomainMessenger(address)": FunctionFragment;
    "crossDomainMessenger()": FunctionFragment;
    "executeProposal(uint256)": FunctionFragment;
    "govTimelock()": FunctionFragment;
    "initialize(address,address)": FunctionFragment;
    "initialized()": FunctionFragment;
    "localTimelock()": FunctionFragment;
    "proposalCount()": FunctionFragment;
    "proposals(uint256)": FunctionFragment;
    "state(uint256)": FunctionFragment;
    "sweepNativeToken(address)": FunctionFragment;
    "sweepToken(address,address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "changeCrossDomainMessenger",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "crossDomainMessenger",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "executeProposal",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "govTimelock",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "initialized",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "localTimelock",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "proposalCount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "proposals",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "state", values: [BigNumberish]): string;
  encodeFunctionData(
    functionFragment: "sweepNativeToken",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "sweepToken",
    values: [string, string]
  ): string;

  decodeFunctionResult(
    functionFragment: "changeCrossDomainMessenger",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "crossDomainMessenger",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "executeProposal",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "govTimelock",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "initialized",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "localTimelock",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "proposalCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "proposals", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "state", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "sweepNativeToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "sweepToken", data: BytesLike): Result;

  events: {
    "Initialized(address,address)": EventFragment;
    "NewCrossDomainMessenger(address,address)": EventFragment;
    "ProposalCreated(address,uint256,address[],uint256[],string[],bytes[],uint256)": EventFragment;
    "ProposalExecuted(uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NewCrossDomainMessenger"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ProposalCreated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ProposalExecuted"): EventFragment;
}

export type InitializedEvent = TypedEvent<
  [string, string],
  { govTimelock: string; localTimelock: string }
>;

export type InitializedEventFilter = TypedEventFilter<InitializedEvent>;

export type NewCrossDomainMessengerEvent = TypedEvent<
  [string, string],
  { oldCrossDomainMessenger: string; newCrossDomainMessenger: string }
>;

export type NewCrossDomainMessengerEventFilter =
  TypedEventFilter<NewCrossDomainMessengerEvent>;

export type ProposalCreatedEvent = TypedEvent<
  [string, BigNumber, string[], BigNumber[], string[], string[], BigNumber],
  {
    rootMessageSender: string;
    id: BigNumber;
    targets: string[];
    values: BigNumber[];
    signatures: string[];
    calldatas: string[];
    eta: BigNumber;
  }
>;

export type ProposalCreatedEventFilter = TypedEventFilter<ProposalCreatedEvent>;

export type ProposalExecutedEvent = TypedEvent<[BigNumber], { id: BigNumber }>;

export type ProposalExecutedEventFilter =
  TypedEventFilter<ProposalExecutedEvent>;

export interface OptimismBridgeReceiver extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: OptimismBridgeReceiverInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    changeCrossDomainMessenger(
      newCrossDomainMessenger: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    crossDomainMessenger(overrides?: CallOverrides): Promise<[string]>;

    executeProposal(
      proposalId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    govTimelock(overrides?: CallOverrides): Promise<[string]>;

    initialize(
      _govTimelock: string,
      _localTimelock: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    initialized(overrides?: CallOverrides): Promise<[boolean]>;

    localTimelock(overrides?: CallOverrides): Promise<[string]>;

    proposalCount(overrides?: CallOverrides): Promise<[BigNumber]>;

    proposals(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, boolean] & {
        id: BigNumber;
        eta: BigNumber;
        executed: boolean;
      }
    >;

    state(
      proposalId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[number]>;

    sweepNativeToken(
      recipient: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    sweepToken(
      recipient: string,
      asset: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  changeCrossDomainMessenger(
    newCrossDomainMessenger: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  crossDomainMessenger(overrides?: CallOverrides): Promise<string>;

  executeProposal(
    proposalId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  govTimelock(overrides?: CallOverrides): Promise<string>;

  initialize(
    _govTimelock: string,
    _localTimelock: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  initialized(overrides?: CallOverrides): Promise<boolean>;

  localTimelock(overrides?: CallOverrides): Promise<string>;

  proposalCount(overrides?: CallOverrides): Promise<BigNumber>;

  proposals(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, boolean] & {
      id: BigNumber;
      eta: BigNumber;
      executed: boolean;
    }
  >;

  state(proposalId: BigNumberish, overrides?: CallOverrides): Promise<number>;

  sweepNativeToken(
    recipient: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  sweepToken(
    recipient: string,
    asset: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    changeCrossDomainMessenger(
      newCrossDomainMessenger: string,
      overrides?: CallOverrides
    ): Promise<void>;

    crossDomainMessenger(overrides?: CallOverrides): Promise<string>;

    executeProposal(
      proposalId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    govTimelock(overrides?: CallOverrides): Promise<string>;

    initialize(
      _govTimelock: string,
      _localTimelock: string,
      overrides?: CallOverrides
    ): Promise<void>;

    initialized(overrides?: CallOverrides): Promise<boolean>;

    localTimelock(overrides?: CallOverrides): Promise<string>;

    proposalCount(overrides?: CallOverrides): Promise<BigNumber>;

    proposals(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, boolean] & {
        id: BigNumber;
        eta: BigNumber;
        executed: boolean;
      }
    >;

    state(proposalId: BigNumberish, overrides?: CallOverrides): Promise<number>;

    sweepNativeToken(
      recipient: string,
      overrides?: CallOverrides
    ): Promise<void>;

    sweepToken(
      recipient: string,
      asset: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "Initialized(address,address)"(
      govTimelock?: string | null,
      localTimelock?: string | null
    ): InitializedEventFilter;
    Initialized(
      govTimelock?: string | null,
      localTimelock?: string | null
    ): InitializedEventFilter;

    "NewCrossDomainMessenger(address,address)"(
      oldCrossDomainMessenger?: string | null,
      newCrossDomainMessenger?: string | null
    ): NewCrossDomainMessengerEventFilter;
    NewCrossDomainMessenger(
      oldCrossDomainMessenger?: string | null,
      newCrossDomainMessenger?: string | null
    ): NewCrossDomainMessengerEventFilter;

    "ProposalCreated(address,uint256,address[],uint256[],string[],bytes[],uint256)"(
      rootMessageSender?: string | null,
      id?: null,
      targets?: null,
      values?: null,
      signatures?: null,
      calldatas?: null,
      eta?: null
    ): ProposalCreatedEventFilter;
    ProposalCreated(
      rootMessageSender?: string | null,
      id?: null,
      targets?: null,
      values?: null,
      signatures?: null,
      calldatas?: null,
      eta?: null
    ): ProposalCreatedEventFilter;

    "ProposalExecuted(uint256)"(
      id?: BigNumberish | null
    ): ProposalExecutedEventFilter;
    ProposalExecuted(id?: BigNumberish | null): ProposalExecutedEventFilter;
  };

  estimateGas: {
    changeCrossDomainMessenger(
      newCrossDomainMessenger: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    crossDomainMessenger(overrides?: CallOverrides): Promise<BigNumber>;

    executeProposal(
      proposalId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    govTimelock(overrides?: CallOverrides): Promise<BigNumber>;

    initialize(
      _govTimelock: string,
      _localTimelock: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    initialized(overrides?: CallOverrides): Promise<BigNumber>;

    localTimelock(overrides?: CallOverrides): Promise<BigNumber>;

    proposalCount(overrides?: CallOverrides): Promise<BigNumber>;

    proposals(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    state(
      proposalId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    sweepNativeToken(
      recipient: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    sweepToken(
      recipient: string,
      asset: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    changeCrossDomainMessenger(
      newCrossDomainMessenger: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    crossDomainMessenger(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    executeProposal(
      proposalId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    govTimelock(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    initialize(
      _govTimelock: string,
      _localTimelock: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    initialized(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    localTimelock(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    proposalCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    proposals(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    state(
      proposalId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    sweepNativeToken(
      recipient: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    sweepToken(
      recipient: string,
      asset: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
