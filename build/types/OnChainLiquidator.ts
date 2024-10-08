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
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export type PoolConfigStruct = {
  exchange: BigNumberish;
  uniswapPoolFee: BigNumberish;
  swapViaWeth: boolean;
  balancerPoolId: BytesLike;
  curvePool: string;
};

export type PoolConfigStructOutput = [
  number,
  number,
  boolean,
  string,
  string
] & {
  exchange: number;
  uniswapPoolFee: number;
  swapViaWeth: boolean;
  balancerPoolId: string;
  curvePool: string;
};

export interface OnChainLiquidatorInterface extends utils.Interface {
  functions: {
    "NULL_ADDRESS()": FunctionFragment;
    "QUOTE_PRICE_SCALE()": FunctionFragment;
    "WETH9()": FunctionFragment;
    "absorbAndArbitrage(address,address[],address[],(uint8,uint24,bool,bytes32,address)[],uint256[],address,uint24,uint256)": FunctionFragment;
    "balancerVault()": FunctionFragment;
    "factory()": FunctionFragment;
    "poolConfigs(address)": FunctionFragment;
    "refundETH()": FunctionFragment;
    "stEth()": FunctionFragment;
    "sushiSwapRouter()": FunctionFragment;
    "sweepToken(address,uint256,address)": FunctionFragment;
    "uniswapRouter()": FunctionFragment;
    "uniswapV3FlashCallback(uint256,uint256,bytes)": FunctionFragment;
    "unwrapWETH9(uint256,address)": FunctionFragment;
    "wstEth()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "NULL_ADDRESS",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "QUOTE_PRICE_SCALE",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "WETH9", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "absorbAndArbitrage",
    values: [
      string,
      string[],
      string[],
      PoolConfigStruct[],
      BigNumberish[],
      string,
      BigNumberish,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "balancerVault",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "factory", values?: undefined): string;
  encodeFunctionData(functionFragment: "poolConfigs", values: [string]): string;
  encodeFunctionData(functionFragment: "refundETH", values?: undefined): string;
  encodeFunctionData(functionFragment: "stEth", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "sushiSwapRouter",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "sweepToken",
    values: [string, BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "uniswapRouter",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "uniswapV3FlashCallback",
    values: [BigNumberish, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "unwrapWETH9",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(functionFragment: "wstEth", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "NULL_ADDRESS",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "QUOTE_PRICE_SCALE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "WETH9", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "absorbAndArbitrage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "balancerVault",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "factory", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "poolConfigs",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "refundETH", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "stEth", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "sushiSwapRouter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "sweepToken", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "uniswapRouter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "uniswapV3FlashCallback",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "unwrapWETH9",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "wstEth", data: BytesLike): Result;

  events: {
    "Absorb(address,address[])": EventFragment;
    "AbsorbWithoutBuyingCollateral()": EventFragment;
    "BuyAndSwap(address,address,uint256,uint256,uint256)": EventFragment;
    "Pay(address,address,address,uint256)": EventFragment;
    "Swap(address,address,uint256,uint256,tuple)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Absorb"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "AbsorbWithoutBuyingCollateral"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "BuyAndSwap"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Pay"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Swap"): EventFragment;
}

export type AbsorbEvent = TypedEvent<
  [string, string[]],
  { initiator: string; accounts: string[] }
>;

export type AbsorbEventFilter = TypedEventFilter<AbsorbEvent>;

export type AbsorbWithoutBuyingCollateralEvent = TypedEvent<[], {}>;

export type AbsorbWithoutBuyingCollateralEventFilter =
  TypedEventFilter<AbsorbWithoutBuyingCollateralEvent>;

export type BuyAndSwapEvent = TypedEvent<
  [string, string, BigNumber, BigNumber, BigNumber],
  {
    tokenIn: string;
    tokenOut: string;
    baseAmountPaid: BigNumber;
    assetBalance: BigNumber;
    amountOut: BigNumber;
  }
>;

export type BuyAndSwapEventFilter = TypedEventFilter<BuyAndSwapEvent>;

export type PayEvent = TypedEvent<
  [string, string, string, BigNumber],
  { token: string; payer: string; recipient: string; value: BigNumber }
>;

export type PayEventFilter = TypedEventFilter<PayEvent>;

export type SwapEvent = TypedEvent<
  [string, string, BigNumber, BigNumber, PoolConfigStructOutput],
  {
    tokenIn: string;
    tokenOut: string;
    amountIn: BigNumber;
    amountOut: BigNumber;
    poolConfig: PoolConfigStructOutput;
  }
>;

export type SwapEventFilter = TypedEventFilter<SwapEvent>;

export interface OnChainLiquidator extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: OnChainLiquidatorInterface;

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
    NULL_ADDRESS(overrides?: CallOverrides): Promise<[string]>;

    QUOTE_PRICE_SCALE(overrides?: CallOverrides): Promise<[BigNumber]>;

    WETH9(overrides?: CallOverrides): Promise<[string]>;

    absorbAndArbitrage(
      comet: string,
      liquidatableAccounts: string[],
      assets: string[],
      poolConfigs: PoolConfigStruct[],
      maxAmountsToPurchase: BigNumberish[],
      flashLoanPairToken: string,
      flashLoanPoolFee: BigNumberish,
      liquidationThreshold: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    balancerVault(overrides?: CallOverrides): Promise<[string]>;

    factory(overrides?: CallOverrides): Promise<[string]>;

    poolConfigs(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [number, number, boolean, string, string] & {
        exchange: number;
        uniswapPoolFee: number;
        swapViaWeth: boolean;
        balancerPoolId: string;
        curvePool: string;
      }
    >;

    refundETH(
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    stEth(overrides?: CallOverrides): Promise<[string]>;

    sushiSwapRouter(overrides?: CallOverrides): Promise<[string]>;

    sweepToken(
      token: string,
      amountMinimum: BigNumberish,
      recipient: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    uniswapRouter(overrides?: CallOverrides): Promise<[string]>;

    uniswapV3FlashCallback(
      fee0: BigNumberish,
      fee1: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    unwrapWETH9(
      amountMinimum: BigNumberish,
      recipient: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    wstEth(overrides?: CallOverrides): Promise<[string]>;
  };

  NULL_ADDRESS(overrides?: CallOverrides): Promise<string>;

  QUOTE_PRICE_SCALE(overrides?: CallOverrides): Promise<BigNumber>;

  WETH9(overrides?: CallOverrides): Promise<string>;

  absorbAndArbitrage(
    comet: string,
    liquidatableAccounts: string[],
    assets: string[],
    poolConfigs: PoolConfigStruct[],
    maxAmountsToPurchase: BigNumberish[],
    flashLoanPairToken: string,
    flashLoanPoolFee: BigNumberish,
    liquidationThreshold: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  balancerVault(overrides?: CallOverrides): Promise<string>;

  factory(overrides?: CallOverrides): Promise<string>;

  poolConfigs(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<
    [number, number, boolean, string, string] & {
      exchange: number;
      uniswapPoolFee: number;
      swapViaWeth: boolean;
      balancerPoolId: string;
      curvePool: string;
    }
  >;

  refundETH(
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  stEth(overrides?: CallOverrides): Promise<string>;

  sushiSwapRouter(overrides?: CallOverrides): Promise<string>;

  sweepToken(
    token: string,
    amountMinimum: BigNumberish,
    recipient: string,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  uniswapRouter(overrides?: CallOverrides): Promise<string>;

  uniswapV3FlashCallback(
    fee0: BigNumberish,
    fee1: BigNumberish,
    data: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  unwrapWETH9(
    amountMinimum: BigNumberish,
    recipient: string,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  wstEth(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    NULL_ADDRESS(overrides?: CallOverrides): Promise<string>;

    QUOTE_PRICE_SCALE(overrides?: CallOverrides): Promise<BigNumber>;

    WETH9(overrides?: CallOverrides): Promise<string>;

    absorbAndArbitrage(
      comet: string,
      liquidatableAccounts: string[],
      assets: string[],
      poolConfigs: PoolConfigStruct[],
      maxAmountsToPurchase: BigNumberish[],
      flashLoanPairToken: string,
      flashLoanPoolFee: BigNumberish,
      liquidationThreshold: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    balancerVault(overrides?: CallOverrides): Promise<string>;

    factory(overrides?: CallOverrides): Promise<string>;

    poolConfigs(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [number, number, boolean, string, string] & {
        exchange: number;
        uniswapPoolFee: number;
        swapViaWeth: boolean;
        balancerPoolId: string;
        curvePool: string;
      }
    >;

    refundETH(overrides?: CallOverrides): Promise<void>;

    stEth(overrides?: CallOverrides): Promise<string>;

    sushiSwapRouter(overrides?: CallOverrides): Promise<string>;

    sweepToken(
      token: string,
      amountMinimum: BigNumberish,
      recipient: string,
      overrides?: CallOverrides
    ): Promise<void>;

    uniswapRouter(overrides?: CallOverrides): Promise<string>;

    uniswapV3FlashCallback(
      fee0: BigNumberish,
      fee1: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    unwrapWETH9(
      amountMinimum: BigNumberish,
      recipient: string,
      overrides?: CallOverrides
    ): Promise<void>;

    wstEth(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "Absorb(address,address[])"(
      initiator?: string | null,
      accounts?: null
    ): AbsorbEventFilter;
    Absorb(initiator?: string | null, accounts?: null): AbsorbEventFilter;

    "AbsorbWithoutBuyingCollateral()"(): AbsorbWithoutBuyingCollateralEventFilter;
    AbsorbWithoutBuyingCollateral(): AbsorbWithoutBuyingCollateralEventFilter;

    "BuyAndSwap(address,address,uint256,uint256,uint256)"(
      tokenIn?: string | null,
      tokenOut?: string | null,
      baseAmountPaid?: null,
      assetBalance?: null,
      amountOut?: null
    ): BuyAndSwapEventFilter;
    BuyAndSwap(
      tokenIn?: string | null,
      tokenOut?: string | null,
      baseAmountPaid?: null,
      assetBalance?: null,
      amountOut?: null
    ): BuyAndSwapEventFilter;

    "Pay(address,address,address,uint256)"(
      token?: string | null,
      payer?: string | null,
      recipient?: string | null,
      value?: null
    ): PayEventFilter;
    Pay(
      token?: string | null,
      payer?: string | null,
      recipient?: string | null,
      value?: null
    ): PayEventFilter;

    "Swap(address,address,uint256,uint256,tuple)"(
      tokenIn?: string | null,
      tokenOut?: string | null,
      amountIn?: null,
      amountOut?: null,
      poolConfig?: null
    ): SwapEventFilter;
    Swap(
      tokenIn?: string | null,
      tokenOut?: string | null,
      amountIn?: null,
      amountOut?: null,
      poolConfig?: null
    ): SwapEventFilter;
  };

  estimateGas: {
    NULL_ADDRESS(overrides?: CallOverrides): Promise<BigNumber>;

    QUOTE_PRICE_SCALE(overrides?: CallOverrides): Promise<BigNumber>;

    WETH9(overrides?: CallOverrides): Promise<BigNumber>;

    absorbAndArbitrage(
      comet: string,
      liquidatableAccounts: string[],
      assets: string[],
      poolConfigs: PoolConfigStruct[],
      maxAmountsToPurchase: BigNumberish[],
      flashLoanPairToken: string,
      flashLoanPoolFee: BigNumberish,
      liquidationThreshold: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    balancerVault(overrides?: CallOverrides): Promise<BigNumber>;

    factory(overrides?: CallOverrides): Promise<BigNumber>;

    poolConfigs(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    refundETH(
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    stEth(overrides?: CallOverrides): Promise<BigNumber>;

    sushiSwapRouter(overrides?: CallOverrides): Promise<BigNumber>;

    sweepToken(
      token: string,
      amountMinimum: BigNumberish,
      recipient: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    uniswapRouter(overrides?: CallOverrides): Promise<BigNumber>;

    uniswapV3FlashCallback(
      fee0: BigNumberish,
      fee1: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    unwrapWETH9(
      amountMinimum: BigNumberish,
      recipient: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    wstEth(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    NULL_ADDRESS(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    QUOTE_PRICE_SCALE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    WETH9(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    absorbAndArbitrage(
      comet: string,
      liquidatableAccounts: string[],
      assets: string[],
      poolConfigs: PoolConfigStruct[],
      maxAmountsToPurchase: BigNumberish[],
      flashLoanPairToken: string,
      flashLoanPoolFee: BigNumberish,
      liquidationThreshold: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    balancerVault(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    factory(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    poolConfigs(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    refundETH(
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    stEth(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    sushiSwapRouter(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    sweepToken(
      token: string,
      amountMinimum: BigNumberish,
      recipient: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    uniswapRouter(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    uniswapV3FlashCallback(
      fee0: BigNumberish,
      fee1: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    unwrapWETH9(
      amountMinimum: BigNumberish,
      recipient: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    wstEth(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
