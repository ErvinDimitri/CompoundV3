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

export type ProposalStruct = {
  id: BigNumberish;
  proposer: string;
  eta: BigNumberish;
  startBlock: BigNumberish;
  endBlock: BigNumberish;
  forVotes: BigNumberish;
  againstVotes: BigNumberish;
  abstainVotes: BigNumberish;
  canceled: boolean;
  executed: boolean;
};

export type ProposalStructOutput = [
  BigNumber,
  string,
  BigNumber,
  BigNumber,
  BigNumber,
  BigNumber,
  BigNumber,
  BigNumber,
  boolean,
  boolean
] & {
  id: BigNumber;
  proposer: string;
  eta: BigNumber;
  startBlock: BigNumber;
  endBlock: BigNumber;
  forVotes: BigNumber;
  againstVotes: BigNumber;
  abstainVotes: BigNumber;
  canceled: boolean;
  executed: boolean;
};

export interface IGovernorBravoInterface extends utils.Interface {
  functions: {
    "MIN_PROPOSAL_THRESHOLD()": FunctionFragment;
    "MIN_VOTING_DELAY()": FunctionFragment;
    "MIN_VOTING_PERIOD()": FunctionFragment;
    "castVote(uint256,uint8)": FunctionFragment;
    "comp()": FunctionFragment;
    "execute(uint256)": FunctionFragment;
    "getActions(uint256)": FunctionFragment;
    "proposalCount()": FunctionFragment;
    "proposals(uint256)": FunctionFragment;
    "propose(address[],uint256[],string[],bytes[],string)": FunctionFragment;
    "queue(uint256)": FunctionFragment;
    "state(uint256)": FunctionFragment;
    "votingDelay()": FunctionFragment;
    "votingPeriod()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "MIN_PROPOSAL_THRESHOLD",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "MIN_VOTING_DELAY",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "MIN_VOTING_PERIOD",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "castVote",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "comp", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "execute",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getActions",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "proposalCount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "proposals",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "propose",
    values: [string[], BigNumberish[], string[], BytesLike[], string]
  ): string;
  encodeFunctionData(functionFragment: "queue", values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: "state", values: [BigNumberish]): string;
  encodeFunctionData(
    functionFragment: "votingDelay",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "votingPeriod",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "MIN_PROPOSAL_THRESHOLD",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "MIN_VOTING_DELAY",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "MIN_VOTING_PERIOD",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "castVote", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "comp", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "execute", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getActions", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "proposalCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "proposals", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "propose", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "queue", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "state", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "votingDelay",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "votingPeriod",
    data: BytesLike
  ): Result;

  events: {
    "ProposalCanceled(uint256)": EventFragment;
    "ProposalCreated(uint256,address,address[],uint256[],string[],bytes[],uint256,uint256,string)": EventFragment;
    "ProposalExecuted(uint256)": EventFragment;
    "ProposalQueued(uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ProposalCanceled"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ProposalCreated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ProposalExecuted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ProposalQueued"): EventFragment;
}

export type ProposalCanceledEvent = TypedEvent<
  [BigNumber],
  { proposalId: BigNumber }
>;

export type ProposalCanceledEventFilter =
  TypedEventFilter<ProposalCanceledEvent>;

export type ProposalCreatedEvent = TypedEvent<
  [
    BigNumber,
    string,
    string[],
    BigNumber[],
    string[],
    string[],
    BigNumber,
    BigNumber,
    string
  ],
  {
    proposalId: BigNumber;
    proposer: string;
    targets: string[];
    values: BigNumber[];
    signatures: string[];
    calldatas: string[];
    startBlock: BigNumber;
    endBlock: BigNumber;
    description: string;
  }
>;

export type ProposalCreatedEventFilter = TypedEventFilter<ProposalCreatedEvent>;

export type ProposalExecutedEvent = TypedEvent<
  [BigNumber],
  { proposalId: BigNumber }
>;

export type ProposalExecutedEventFilter =
  TypedEventFilter<ProposalExecutedEvent>;

export type ProposalQueuedEvent = TypedEvent<
  [BigNumber, BigNumber],
  { proposalId: BigNumber; eta: BigNumber }
>;

export type ProposalQueuedEventFilter = TypedEventFilter<ProposalQueuedEvent>;

export interface IGovernorBravo extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IGovernorBravoInterface;

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
    MIN_PROPOSAL_THRESHOLD(overrides?: CallOverrides): Promise<[BigNumber]>;

    MIN_VOTING_DELAY(overrides?: CallOverrides): Promise<[BigNumber]>;

    MIN_VOTING_PERIOD(overrides?: CallOverrides): Promise<[BigNumber]>;

    castVote(
      proposalId: BigNumberish,
      support: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    comp(overrides?: CallOverrides): Promise<[string]>;

    execute(
      proposalId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getActions(
      proposalId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [string[], BigNumber[], string[], string[]] & {
        targets: string[];
        values: BigNumber[];
        signatures: string[];
        calldatas: string[];
      }
    >;

    proposalCount(overrides?: CallOverrides): Promise<[BigNumber]>;

    proposals(
      proposalId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[ProposalStructOutput]>;

    propose(
      targets: string[],
      values: BigNumberish[],
      signatures: string[],
      calldatas: BytesLike[],
      description: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    queue(
      proposalId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    state(
      proposalId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[number]>;

    votingDelay(overrides?: CallOverrides): Promise<[BigNumber]>;

    votingPeriod(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  MIN_PROPOSAL_THRESHOLD(overrides?: CallOverrides): Promise<BigNumber>;

  MIN_VOTING_DELAY(overrides?: CallOverrides): Promise<BigNumber>;

  MIN_VOTING_PERIOD(overrides?: CallOverrides): Promise<BigNumber>;

  castVote(
    proposalId: BigNumberish,
    support: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  comp(overrides?: CallOverrides): Promise<string>;

  execute(
    proposalId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getActions(
    proposalId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [string[], BigNumber[], string[], string[]] & {
      targets: string[];
      values: BigNumber[];
      signatures: string[];
      calldatas: string[];
    }
  >;

  proposalCount(overrides?: CallOverrides): Promise<BigNumber>;

  proposals(
    proposalId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<ProposalStructOutput>;

  propose(
    targets: string[],
    values: BigNumberish[],
    signatures: string[],
    calldatas: BytesLike[],
    description: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  queue(
    proposalId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  state(proposalId: BigNumberish, overrides?: CallOverrides): Promise<number>;

  votingDelay(overrides?: CallOverrides): Promise<BigNumber>;

  votingPeriod(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    MIN_PROPOSAL_THRESHOLD(overrides?: CallOverrides): Promise<BigNumber>;

    MIN_VOTING_DELAY(overrides?: CallOverrides): Promise<BigNumber>;

    MIN_VOTING_PERIOD(overrides?: CallOverrides): Promise<BigNumber>;

    castVote(
      proposalId: BigNumberish,
      support: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    comp(overrides?: CallOverrides): Promise<string>;

    execute(proposalId: BigNumberish, overrides?: CallOverrides): Promise<void>;

    getActions(
      proposalId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [string[], BigNumber[], string[], string[]] & {
        targets: string[];
        values: BigNumber[];
        signatures: string[];
        calldatas: string[];
      }
    >;

    proposalCount(overrides?: CallOverrides): Promise<BigNumber>;

    proposals(
      proposalId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<ProposalStructOutput>;

    propose(
      targets: string[],
      values: BigNumberish[],
      signatures: string[],
      calldatas: BytesLike[],
      description: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    queue(proposalId: BigNumberish, overrides?: CallOverrides): Promise<void>;

    state(proposalId: BigNumberish, overrides?: CallOverrides): Promise<number>;

    votingDelay(overrides?: CallOverrides): Promise<BigNumber>;

    votingPeriod(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {
    "ProposalCanceled(uint256)"(proposalId?: null): ProposalCanceledEventFilter;
    ProposalCanceled(proposalId?: null): ProposalCanceledEventFilter;

    "ProposalCreated(uint256,address,address[],uint256[],string[],bytes[],uint256,uint256,string)"(
      proposalId?: null,
      proposer?: null,
      targets?: null,
      values?: null,
      signatures?: null,
      calldatas?: null,
      startBlock?: null,
      endBlock?: null,
      description?: null
    ): ProposalCreatedEventFilter;
    ProposalCreated(
      proposalId?: null,
      proposer?: null,
      targets?: null,
      values?: null,
      signatures?: null,
      calldatas?: null,
      startBlock?: null,
      endBlock?: null,
      description?: null
    ): ProposalCreatedEventFilter;

    "ProposalExecuted(uint256)"(proposalId?: null): ProposalExecutedEventFilter;
    ProposalExecuted(proposalId?: null): ProposalExecutedEventFilter;

    "ProposalQueued(uint256,uint256)"(
      proposalId?: null,
      eta?: null
    ): ProposalQueuedEventFilter;
    ProposalQueued(proposalId?: null, eta?: null): ProposalQueuedEventFilter;
  };

  estimateGas: {
    MIN_PROPOSAL_THRESHOLD(overrides?: CallOverrides): Promise<BigNumber>;

    MIN_VOTING_DELAY(overrides?: CallOverrides): Promise<BigNumber>;

    MIN_VOTING_PERIOD(overrides?: CallOverrides): Promise<BigNumber>;

    castVote(
      proposalId: BigNumberish,
      support: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    comp(overrides?: CallOverrides): Promise<BigNumber>;

    execute(
      proposalId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getActions(
      proposalId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    proposalCount(overrides?: CallOverrides): Promise<BigNumber>;

    proposals(
      proposalId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    propose(
      targets: string[],
      values: BigNumberish[],
      signatures: string[],
      calldatas: BytesLike[],
      description: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    queue(
      proposalId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    state(
      proposalId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    votingDelay(overrides?: CallOverrides): Promise<BigNumber>;

    votingPeriod(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    MIN_PROPOSAL_THRESHOLD(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    MIN_VOTING_DELAY(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    MIN_VOTING_PERIOD(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    castVote(
      proposalId: BigNumberish,
      support: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    comp(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    execute(
      proposalId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getActions(
      proposalId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    proposalCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    proposals(
      proposalId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    propose(
      targets: string[],
      values: BigNumberish[],
      signatures: string[],
      calldatas: BytesLike[],
      description: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    queue(
      proposalId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    state(
      proposalId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    votingDelay(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    votingPeriod(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
