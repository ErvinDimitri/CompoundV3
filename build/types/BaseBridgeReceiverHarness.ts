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

export interface BaseBridgeReceiverHarnessInterface extends utils.Interface {
  functions: {
    "executeProposal(uint256)": FunctionFragment;
    "govTimelock()": FunctionFragment;
    "initialize(address,address)": FunctionFragment;
    "initialized()": FunctionFragment;
    "localTimelock()": FunctionFragment;
    "processMessageExternal(address,bytes)": FunctionFragment;
    "proposalCount()": FunctionFragment;
    "proposals(uint256)": FunctionFragment;
    "state(uint256)": FunctionFragment;
  };

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
    functionFragment: "processMessageExternal",
    values: [string, BytesLike]
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
    functionFragment: "processMessageExternal",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "proposalCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "proposals", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "state", data: BytesLike): Result;

  events: {
    "Initialized(address,address)": EventFragment;
    "ProposalCreated(address,uint256,address[],uint256[],string[],bytes[],uint256)": EventFragment;
    "ProposalExecuted(uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ProposalCreated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ProposalExecuted"): EventFragment;
}

export type InitializedEvent = TypedEvent<
  [string, string],
  { govTimelock: string; localTimelock: string }
>;

export type InitializedEventFilter = TypedEventFilter<InitializedEvent>;

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

export interface BaseBridgeReceiverHarness extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: BaseBridgeReceiverHarnessInterface;

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

    processMessageExternal(
      rootMessageSender: string,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

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
  };

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

  processMessageExternal(
    rootMessageSender: string,
    data: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

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

  callStatic: {
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

    processMessageExternal(
      rootMessageSender: string,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

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

    processMessageExternal(
      rootMessageSender: string,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    proposalCount(overrides?: CallOverrides): Promise<BigNumber>;

    proposals(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    state(
      proposalId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
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

    processMessageExternal(
      rootMessageSender: string,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    proposalCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    proposals(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    state(
      proposalId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
