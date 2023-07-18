# Edge compute typescript jest failure example

This repo demonstrates:

1. Simple example of an edge compute typescript setup
2. Adding jest
3. Failure to run jest tests that include fastly modules

## Demo

```sh
yarn test
```

You will see:

```sh
❯ yarn test
yarn run v1.22.19
$ NODE_OPTIONS=--experimental-vm-modules jest
 FAIL  src/__tests__/index.test.ts
  ● Test suite failed to run

    Cannot find module 'fastly:secret-store' from 'src/index.ts'

      at Resolver._throwModNotFoundError (node_modules/jest-resolve/build/resolver.js:427:11)

Test Suites: 1 failed, 1 total
Tests:       0 total
Snapshots:   0 total
Time:        0.935 s
Ran all test suites.
(node:70416) ExperimentalWarning: VM Modules is an experimental feature and might change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
