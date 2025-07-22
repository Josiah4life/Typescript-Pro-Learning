import type { Equal, Expect } from '@total-typescript/helpers';

declare global {
  namespace React {
    interface MyInterface {
      bar: string;
    }
  }
}

/**
 * We can use a feature called declaration merging in TypeScript to CHNAGE interface in
 * the gloval namespace.
 *
 * WITHOUT changing the code above, change MyAwesomeInterface to add a property called 'bar' that
 * is string.
 */

type tests = [Expect<Equal<React.MyInterface, { foo: string; bar: string }>>];

export {};
