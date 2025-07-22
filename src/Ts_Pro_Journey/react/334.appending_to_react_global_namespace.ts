import type { Expect, Equal } from '@total-typescript/helpers';

/**
 * It's actually possible to change things in the global namespace in Typescript
 *
 * 1. Add a declaration for React.MyInterface to the global React namespace below
 */

declare global {
  namespace React {
    interface MyInterface {
      foo: string;
    }
  }
}

type test = Expect<Equal<React.MyInterface, { foo: string }>>;

export {};
