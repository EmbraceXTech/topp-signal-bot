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

export interface TestRandomOracleInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "caller"
      | "fulfillRandomness"
      | "lastTime"
      | "lastValues"
      | "requestRandomness"
      | "setCaller"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "caller", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "fulfillRandomness",
    values: [BigNumberish, BigNumberish[]]
  ): string;
  encodeFunctionData(functionFragment: "lastTime", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "lastValues",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "requestRandomness",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setCaller",
    values: [AddressLike]
  ): string;

  decodeFunctionResult(functionFragment: "caller", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "fulfillRandomness",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "lastTime", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "lastValues", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "requestRandomness",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setCaller", data: BytesLike): Result;
}

export interface TestRandomOracle extends BaseContract {
  connect(runner?: ContractRunner | null): TestRandomOracle;
  waitForDeployment(): Promise<this>;

  interface: TestRandomOracleInterface;

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

  caller: TypedContractMethod<[], [string], "view">;

  fulfillRandomness: TypedContractMethod<
    [time: BigNumberish, values: BigNumberish[]],
    [void],
    "nonpayable"
  >;

  lastTime: TypedContractMethod<[], [bigint], "view">;

  lastValues: TypedContractMethod<[arg0: BigNumberish], [bigint], "view">;

  requestRandomness: TypedContractMethod<
    [time: BigNumberish, amount: BigNumberish],
    [void],
    "nonpayable"
  >;

  setCaller: TypedContractMethod<[_caller: AddressLike], [void], "nonpayable">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "caller"
  ): TypedContractMethod<[], [string], "view">;
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
    nameOrSignature: "requestRandomness"
  ): TypedContractMethod<
    [time: BigNumberish, amount: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setCaller"
  ): TypedContractMethod<[_caller: AddressLike], [void], "nonpayable">;

  filters: {};
}