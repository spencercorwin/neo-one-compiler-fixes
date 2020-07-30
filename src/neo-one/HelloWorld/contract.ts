/* @hash 1612e10f0a90e25f06b262292ad1e15a */
// tslint:disable
/* eslint-disable */
import { Client } from '@neo-one/client';
import { HelloWorldSmartContract } from './types';
import { helloWorldABI } from './abi';
import { sourceMaps } from '../sourceMaps';

const definition = {
  networks: {
    local: {
      address: 'Ae4EuxvH9uB4Kxe6akLw6pGMoh3YM2WAqp',
    },
  },
  abi: helloWorldABI,
  sourceMaps,
};

export const createHelloWorldSmartContract = <TClient extends Client>(
  client: TClient,
): HelloWorldSmartContract<TClient> => client.smartContract(definition);
