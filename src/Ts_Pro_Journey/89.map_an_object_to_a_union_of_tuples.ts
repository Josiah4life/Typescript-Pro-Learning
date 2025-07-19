import type { Equal, Expect } from '@total-typescript/helpers';

interface Values {
  email: string;
  firstName: string;
  lastName: string;
}

type ValuesAsUnionOfTuples = {
  [K in keyof Values]: [K, Values[K]];
}[keyof Values];

type ab = Values[keyof Values];

type tests = [
  Expect<
    Equal<
      ValuesAsUnionOfTuples,
      ['email', string] | ['firstName', string] | ['lastName', string]
    >
  >
];

// const arg:ValuesAsUnionOfTuples = {
//     "email": ["email", "sef"]
// }
