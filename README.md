# Demonstrate Fixes to NEO•ONE Smart Contract Compiler Bugs

- `yarn install`
- `yarn jest`
- Should pass the unit tests in `HelloWorld.test.ts`

See `neo-one/contracts/HelloWorld.ts` to see the demonstration of the features that
should now work in smart contracts compiled with NEO•ONE.

Specifically:

- Previously, setting/getting indexes in `ArrayStorage` would not work properly for
  indexes at 0 or >15.
- Previously, a switch statement would complete and break out of the entire function,
  which meant that anything after the switch statement within the function wouldn't
  be evaluated.

By looking at the `HelloWorld` contract and the `HelloWorld.test.ts` test you can see
that passing tests shows these issues are no longer a problem.
