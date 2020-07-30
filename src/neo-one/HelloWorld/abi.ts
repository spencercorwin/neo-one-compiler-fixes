/* @hash 71d631e8d44a96b2fab896c29a16e17a */
// tslint:disable
/* eslint-disable */
import { ABI } from '@neo-one/client';

export const helloWorldABI: ABI = {
  events: [],
  functions: [
    {
      constant: true,
      name: 'owner',
      parameters: [],
      returnType: {
        forwardedValue: false,
        optional: false,
        type: 'Address',
      },
    },
    {
      claim: false,
      constant: false,
      name: 'switchStatement',
      parameters: [
        {
          decimals: 0,
          forwardedValue: false,
          name: 'option',
          optional: false,
          type: 'Integer',
        },
      ],
      receive: false,
      returnType: {
        forwardedValue: false,
        optional: false,
        type: 'String',
      },
      send: false,
      sendUnsafe: false,
    },
    {
      claim: false,
      constant: false,
      name: 'getArrayStorage',
      parameters: [],
      receive: false,
      returnType: {
        forwardedValue: false,
        optional: false,
        type: 'String',
      },
      send: false,
      sendUnsafe: false,
    },
    {
      name: 'deploy',
      parameters: [
        {
          default: {
            type: 'sender',
          },
          forwardedValue: false,
          name: 'owner',
          optional: true,
          type: 'Address',
        },
      ],
      returnType: {
        type: 'Boolean',
      },
    },
  ],
};
