/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../common";
import type {
  SimplePriceOracle,
  SimplePriceOracleInterface,
} from "../../../contracts/oracle/SimplePriceOracle";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "time",
        type: "uint256",
      },
    ],
    name: "PriceRequested",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
    ],
    name: "PriceUpdated",
    type: "event",
  },
  {
    inputs: [],
    name: "caller",
    outputs: [
      {
        internalType: "contract IPriceOracleCaller",
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
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "prices",
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
        name: "_caller",
        type: "address",
      },
    ],
    name: "setCaller",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x6080604052348015600f57600080fd5b506105da8061001f6000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c8063bc31c1c11461005c578063beb92f551461008c578063cd7c92e3146100a8578063fc9c8d39146100c4578063ff800a80146100e2575b600080fd5b61007660048036038101906100719190610362565b6100fe565b604051610083919061039e565b60405180910390f35b6100a660048036038101906100a19190610417565b610116565b005b6100c260048036038101906100bd9190610362565b610159565b005b6100cc610221565b6040516100d991906104a3565b60405180910390f35b6100fc60048036038101906100f791906104be565b610245565b005b60016020528060005260406000206000915090505481565b806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b3373ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146101e7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101de9061055b565b60405180910390fd5b7fd2a7f716b81f08e14a6288aab334904b8eef2bb9b787a99ead7ed8fb12a5ca1a81604051610216919061039e565b60405180910390a150565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b80600160008481526020019081526020016000208190555060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663ff800a8083836040518363ffffffff1660e01b81526004016102b892919061057b565b600060405180830381600087803b1580156102d257600080fd5b505af11580156102e6573d6000803e3d6000fd5b505050507f945c1c4e99aa89f648fbfe3df471b916f719e16d960fcec0737d4d56bd696838828260405161031b92919061057b565b60405180910390a15050565b600080fd5b6000819050919050565b61033f8161032c565b811461034a57600080fd5b50565b60008135905061035c81610336565b92915050565b60006020828403121561037857610377610327565b5b60006103868482850161034d565b91505092915050565b6103988161032c565b82525050565b60006020820190506103b3600083018461038f565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006103e4826103b9565b9050919050565b6103f4816103d9565b81146103ff57600080fd5b50565b600081359050610411816103eb565b92915050565b60006020828403121561042d5761042c610327565b5b600061043b84828501610402565b91505092915050565b6000819050919050565b600061046961046461045f846103b9565b610444565b6103b9565b9050919050565b600061047b8261044e565b9050919050565b600061048d82610470565b9050919050565b61049d81610482565b82525050565b60006020820190506104b86000830184610494565b92915050565b600080604083850312156104d5576104d4610327565b5b60006104e38582860161034d565b92505060206104f48582860161034d565b9150509250929050565b600082825260208201905092915050565b7f556e617574686f72697a65640000000000000000000000000000000000000000600082015250565b6000610545600c836104fe565b91506105508261050f565b602082019050919050565b6000602082019050818103600083015261057481610538565b9050919050565b6000604082019050610590600083018561038f565b61059d602083018461038f565b939250505056fea2646970667358221220274a16838516a12d34d18f4306a66787bd7546d2f37ad8983525d81f62ab0bb864736f6c634300081b0033";

type SimplePriceOracleConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SimplePriceOracleConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SimplePriceOracle__factory extends ContractFactory {
  constructor(...args: SimplePriceOracleConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      SimplePriceOracle & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): SimplePriceOracle__factory {
    return super.connect(runner) as SimplePriceOracle__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SimplePriceOracleInterface {
    return new Interface(_abi) as SimplePriceOracleInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): SimplePriceOracle {
    return new Contract(address, _abi, runner) as unknown as SimplePriceOracle;
  }
}
