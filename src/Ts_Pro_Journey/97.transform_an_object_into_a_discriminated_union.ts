import type { Equal, Expect } from '@total-typescript/helpers';

interface Attributes {
  id: string;
  email: string;
  username: string;
}

/**
 * How do we create a type helper that represent a union of all possible combination of Attributes.
 */

type MutuallyExclusive<T> = {
  [K in keyof T]: {
    [P in K]: T[P];
  };
}[keyof T];

type ExclusiveAttributes = MutuallyExclusive<Attributes>;

type tests = [
  Expect<
    Equal<
      ExclusiveAttributes,
      | {
          id: string;
        }
      | {
          email: string;
        }
      | {
          username: string;
        }
    >
  >
];
