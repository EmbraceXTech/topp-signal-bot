/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type {
  Signer,
  AddressLike,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../../../common";
import type {
  TestPriceOracleCaller,
  TestPriceOracleCallerInterface,
} from "../../../contracts/test/TestPriceOracleCaller";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_oracle",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "time",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
    ],
    name: "fulfillPrice",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "lastPrice",
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
    name: "lastTime",
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
    name: "oracle",
    outputs: [
      {
        internalType: "contract IPriceOracle",
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
        name: "time",
        type: "uint256",
      },
    ],
    name: "requestPrice",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_oracle",
        type: "address",
      },
    ],
    name: "setOracle",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50604051610657380380610657833981810160405281019061003291906100db565b806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050610108565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006100a88261007d565b9050919050565b6100b88161009d565b81146100c357600080fd5b50565b6000815190506100d5816100af565b92915050565b6000602082840312156100f1576100f0610078565b5b60006100ff848285016100c6565b91505092915050565b610540806101176000396000f3fe608060405234801561001057600080fd5b50600436106100625760003560e01c8063053f14da146100675780637adbf973146100855780637dc0d1d0146100a157806393e9a084146100bf578063cd7c92e3146100dd578063ff800a80146100f9575b600080fd5b61006f610115565b60405161007c91906102cf565b60405180910390f35b61009f600480360381019061009a919061034d565b61011b565b005b6100a961015e565b6040516100b691906103d9565b60405180910390f35b6100c7610182565b6040516100d491906102cf565b60405180910390f35b6100f760048036038101906100f29190610420565b610188565b005b610113600480360381019061010e919061044d565b610216565b005b60015481565b806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60025481565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663cd7c92e3826040518263ffffffff1660e01b81526004016101e191906102cf565b600060405180830381600087803b1580156101fb57600080fd5b505af115801561020f573d6000803e3d6000fd5b5050505050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146102a4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161029b906104ea565b60405180910390fd5b81600281905550806001819055505050565b6000819050919050565b6102c9816102b6565b82525050565b60006020820190506102e460008301846102c0565b92915050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061031a826102ef565b9050919050565b61032a8161030f565b811461033557600080fd5b50565b60008135905061034781610321565b92915050565b600060208284031215610363576103626102ea565b5b600061037184828501610338565b91505092915050565b6000819050919050565b600061039f61039a610395846102ef565b61037a565b6102ef565b9050919050565b60006103b182610384565b9050919050565b60006103c3826103a6565b9050919050565b6103d3816103b8565b82525050565b60006020820190506103ee60008301846103ca565b92915050565b6103fd816102b6565b811461040857600080fd5b50565b60008135905061041a816103f4565b92915050565b600060208284031215610436576104356102ea565b5b60006104448482850161040b565b91505092915050565b60008060408385031215610464576104636102ea565b5b60006104728582860161040b565b92505060206104838582860161040b565b9150509250929050565b600082825260208201905092915050565b7f4f6e6c79206f7261636c652063616e2066756c66696c6c000000000000000000600082015250565b60006104d460178361048d565b91506104df8261049e565b602082019050919050565b60006020820190508181036000830152610503816104c7565b905091905056fea2646970667358221220467452ef1d7c005a3246fbb566e5a180811f2713f561fb883f480da561ebc75364736f6c634300081b0033";

type TestPriceOracleCallerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TestPriceOracleCallerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TestPriceOracleCaller__factory extends ContractFactory {
  constructor(...args: TestPriceOracleCallerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    _oracle: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(_oracle, overrides || {});
  }
  override deploy(
    _oracle: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(_oracle, overrides || {}) as Promise<
      TestPriceOracleCaller & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(
    runner: ContractRunner | null
  ): TestPriceOracleCaller__factory {
    return super.connect(runner) as TestPriceOracleCaller__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TestPriceOracleCallerInterface {
    return new Interface(_abi) as TestPriceOracleCallerInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): TestPriceOracleCaller {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as TestPriceOracleCaller;
  }
}
