import { withContracts } from '../neo-one/test';
import BigNumber from 'bignumber.js';

describe('HelloWorld', () => {
  it('switch statement works as expected', async () => {
    await withContracts(async ({ helloWorld }) => {
      const receipt = await helloWorld.switchStatement.confirmed(
        new BigNumber(0),
      );
      if (receipt.result.state === 'FAULT') {
        throw new Error(receipt.result.message);
      }

      expect(receipt.result.value).toEqual('Hello 0');
    });
  });

  it('ArrayStorage indexes work as expected', async () => {
    await withContracts(async ({ helloWorld }) => {
      const receipt = await helloWorld.getArrayStorage.confirmed();
      if (receipt.result.state === 'FAULT') {
        throw new Error(receipt.result.message);
      }

      expect(receipt.result.value).toEqual('first');
    });
  });
});
