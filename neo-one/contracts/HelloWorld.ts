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

    return value;
  }

  public getArrayStorage() {
    return this.sampleStorage[1 - 1];
  }
}
