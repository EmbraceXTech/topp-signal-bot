/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "../../../common";

export interface AuthorizationInterface extends Interface {
  getFunction(
    nameOrSignature: "PROJECT" | "adminProjectRouter" | "setAdminProjectRouter"
  ): FunctionFragment;

  getEvent(nameOrSignatureOrTopic: "AdminProjectRouterSet"): EventFragment;

  encodeFunctionData(functionFragment: "PROJECT", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "adminProjectRouter",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setAdminProjectRouter",
    values: [AddressLike]
  ): string;

  decodeFunctionResult(functionFragment: "PROJECT", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "adminProjectRouter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setAdminProjectRouter",
    data: BytesLike
  ): Result;
}

export namespace AdminProjectRouterSetEvent {
  export type InputTuple = [
    oldAdmin: AddressLike,
    newAdmin: AddressLike,
    caller: AddressLike
  ];
  export type OutputTuple = [
    oldAdmin: string,
    newAdmin: string,
    caller: string
  ];
  export interface OutputObject {
    oldAdmin: string;
    newAdmin: string;
    caller: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface Authorization extends BaseContract {
  connect(runner?: ContractRunner | null): Authorization;
  waitForDeployment(): Promise<this>;

  interface: AuthorizationInterface;

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

  PROJECT: TypedContractMethod<[], [string], "view">;

  adminProjectRouter: TypedContractMethod<[], [string], "view">;

  setAdminProjectRouter: TypedContractMethod<
    [_adminProjectRouter: AddressLike],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "PROJECT"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "adminProjectRouter"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "setAdminProjectRouter"
  ): TypedContractMethod<
    [_adminProjectRouter: AddressLike],
    [void],
    "nonpayable"
  >;

  getEvent(
    key: "AdminProjectRouterSet"
  ): TypedContractEvent<
    AdminProjectRouterSetEvent.InputTuple,
    AdminProjectRouterSetEvent.OutputTuple,
    AdminProjectRouterSetEvent.OutputObject
  >;

  filters: {
    "AdminProjectRouterSet(address,address,address)": TypedContractEvent<
      AdminProjectRouterSetEvent.InputTuple,
      AdminProjectRouterSetEvent.OutputTuple,
      AdminProjectRouterSetEvent.OutputObject
    >;
    AdminProjectRouterSet: TypedContractEvent<
      AdminProjectRouterSetEvent.InputTuple,
      AdminProjectRouterSetEvent.OutputTuple,
      AdminProjectRouterSetEvent.OutputObject
    >;
  };
}
