/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedListener,
  TypedContractMethod,
} from "../../common";

export interface TestRandomOracleCallerInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "fulfillRandomness"
      | "lastTime"
      | "lastValues"
      | "oracle"
      | "requestRandomness"
      | "setOracle"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "fulfillRandomness",
    values: [BigNumberish, BigNumberish[]]
  ): string;
  encodeFunctionData(functionFragment: "lastTime", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "lastValues",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "oracle", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "requestRandomness",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setOracle",
    values: [AddressLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "fulfillRandomness",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "lastTime", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "lastValues", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "oracle", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "requestRandomness",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setOracle", data: BytesLike): Result;
}

export interface TestRandomOracleCaller extends BaseContract {
  connect(runner?: ContractRunner | null): TestRandomOracleCaller;
  waitForDeployment(): Promise<this>;

  interface: TestRandomOracleCallerInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  fulfillRandomness: TypedContractMethod<
    [time: BigNumberish, values: BigNumberish[]],
    [void],
    "nonpayable"
  >;

  lastTime: TypedContractMethod<[], [bigint], "view">;

  lastValues: TypedContractMethod<[arg0: BigNumberish], [bigint], "view">;

  oracle: TypedContractMethod<[], [string], "view">;

  requestRandomness: TypedContractMethod<
    [time: BigNumberish],
    [void],
    "nonpayable"
  >;

  setOracle: TypedContractMethod<[_oracle: AddressLike], [void], "nonpayable">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "fulfillRandomness"
  ): TypedContractMethod<
    [time: BigNumberish, values: BigNumberish[]],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "lastTime"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "lastValues"
  ): TypedContractMethod<[arg0: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "oracle"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "requestRandomness"
  ): TypedContractMethod<[time: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setOracle"
  ): TypedContractMethod<[_oracle: AddressLike], [void], "nonpayable">;

  filters: {};
}
