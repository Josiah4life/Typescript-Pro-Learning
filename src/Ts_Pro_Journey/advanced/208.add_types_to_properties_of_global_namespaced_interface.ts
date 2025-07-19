/**
 * Clues:
 *
 * 1. You'll need declare global again
 *
 * 2. You'll need to use the NodeJS namespace
 *
 * 3. Inside the NodeJS namespace, you'll need to add a MY_ENV_VAR = "Hello, world"
 *
 */

import type { Equal, Expect } from '@total-typescript/helpers';
import { expect, it } from 'vitest';

declare global {
  namespace NodeJs {
    interface ProcessENV {
      MY_ENV_VAR: string;
    }
  }
}

process.env.MY_ENV_VAR = 'Hello, world';

it('should be declared as a string', () => {
  expect(process.env.MY_ENV_VAR).toEqual('Hello World');
});

it('should be declared as a string', () => {
  const myVar = process.env.MY_ENV_VAR!;
  type tests = [Expect<Equal<typeof myVar, string>>];
});
