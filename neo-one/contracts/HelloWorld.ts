import {
  SmartContract,
  ArrayStorage,
  Address,
  Deploy,
} from '@neo-one/smart-contract';

export class HelloWorld extends SmartContract {
  private readonly sampleStorage = ArrayStorage.for<string>();

  public constructor(public readonly owner: Address = Deploy.senderAddress) {
    super();
    // Initialize the smart contract with several items in the sample ArrayStorage
    this.sampleStorage.push('first');
    this.sampleStorage.push('second');
    this.sampleStorage.push('third');
  }

  public switchStatement(option: number): string {
    let value: string;

    switch (option) {
      case 0:
        value = 'Hello 0';
        break;
      case 1:
        value = 'Hello 1';
        break;
      case 2:
        value = 'Hello 2';
        break;
      default:
        value = 'Hello default';
    }

    // Previously this return statement would never be called
    return value;
  }

  public getArrayStorage() {
    // Previously, if you tried to access index 0 with a computed value (like 1 - 1) it wouldn't
    // work properly
    return this.sampleStorage[1 - 1];
  }
}
