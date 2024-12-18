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

export interface CommitteeInterface extends Interface {
  getFunction(nameOrSignature: "committee" | "setCommittee"): FunctionFragment;

  getEvent(nameOrSignatureOrTopic: "CommitteeSet"): EventFragment;

  encodeFunctionData(functionFragment: "committee", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "setCommittee",
    values: [AddressLike]
  ): string;

  decodeFunctionResult(functionFragment: "committee", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setCommittee",
    data: BytesLike
  ): Result;
}

export namespace CommitteeSetEvent {
  export type InputTuple = [
    oldCommittee: AddressLike,
    newCommittee: AddressLike,
    caller: AddressLike
  ];
  export type OutputTuple = [
    oldCommittee: string,
    newCommittee: string,
    caller: string
  ];
  export interface OutputObject {
    oldCommittee: string;
    newCommittee: string;
    caller: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface Committee extends BaseContract {
  connect(runner?: ContractRunner | null): Committee;
  waitForDeployment(): Promise<this>;

  interface: CommitteeInterface;

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

  committee: TypedContractMethod<[], [string], "view">;

  setCommittee: TypedContractMethod<
    [_committee: AddressLike],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "committee"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "setCommittee"
  ): TypedContractMethod<[_committee: AddressLike], [void], "nonpayable">;

  getEvent(
    key: "CommitteeSet"
  ): TypedContractEvent<
    CommitteeSetEvent.InputTuple,
    CommitteeSetEvent.OutputTuple,
    CommitteeSetEvent.OutputObject
  >;

  filters: {
    "CommitteeSet(address,address,address)": TypedContractEvent<
      CommitteeSetEvent.InputTuple,
      CommitteeSetEvent.OutputTuple,
      CommitteeSetEvent.OutputObject
    >;
    CommitteeSet: TypedContractEvent<
      CommitteeSetEvent.InputTuple,
      CommitteeSetEvent.OutputTuple,
      CommitteeSetEvent.OutputObject
    >;
  };
}
