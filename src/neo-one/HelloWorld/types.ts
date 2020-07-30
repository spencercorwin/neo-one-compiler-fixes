/* @hash ddc36636d355c3b75c3b09082696318e */
// tslint:disable
/* eslint-disable */
import {
  AddressString,
  Client,
  GetOptions,
  InvocationTransaction,
  InvokeReceipt,
  SmartContract,
  TransactionOptions,
  TransactionResult,
} from '@neo-one/client';
import BigNumber from 'bignumber.js';

export type HelloWorldEvent = never;

export interface HelloWorldSmartContract<TClient extends Client = Client>
  extends SmartContract<TClient, HelloWorldEvent> {
  readonly deploy: {
    (owner?: AddressString, options?: TransactionOptions): Promise<
      TransactionResult<InvokeReceipt<boolean, HelloWorldEvent>, InvocationTransaction>
    >;
    readonly confirmed: (
      owner?: AddressString,
      options?: TransactionOptions & GetOptions,
    ) => Promise<InvokeReceipt<boolean, HelloWorldEvent> & { readonly transaction: InvocationTransaction }>;
  };
  readonly getArrayStorage: {
    (options?: TransactionOptions): Promise<
      TransactionResult<InvokeReceipt<string, HelloWorldEvent>, InvocationTransaction>
    >;
    readonly confirmed: (
      options?: TransactionOptions & GetOptions,
    ) => Promise<InvokeReceipt<string, HelloWorldEvent> & { readonly transaction: InvocationTransaction }>;
  };
  readonly owner: () => Promise<AddressString>;
  readonly switchStatement: {
    (option: BigNumber, options?: TransactionOptions): Promise<
      TransactionResult<InvokeReceipt<string, HelloWorldEvent>, InvocationTransaction>
    >;
    readonly confirmed: (
      option: BigNumber,
      options?: TransactionOptions & GetOptions,
    ) => Promise<InvokeReceipt<string, HelloWorldEvent> & { readonly transaction: InvocationTransaction }>;
  };
}

export interface HelloWorldMigrationSmartContract {
  readonly deploy: (
    owner?: AddressString | Promise<AddressString>,
    options?: TransactionOptions & GetOptions,
  ) => Promise<InvokeReceipt<boolean, HelloWorldEvent> & { readonly transaction: InvocationTransaction }>;
  readonly getArrayStorage: (
    options?: TransactionOptions & GetOptions,
  ) => Promise<InvokeReceipt<string, HelloWorldEvent> & { readonly transaction: InvocationTransaction }>;
  readonly owner: () => Promise<AddressString>;
  readonly switchStatement: (
    option: BigNumber | Promise<BigNumber>,
    options?: TransactionOptions & GetOptions,
  ) => Promise<InvokeReceipt<string, HelloWorldEvent> & { readonly transaction: InvocationTransaction }>;
}
