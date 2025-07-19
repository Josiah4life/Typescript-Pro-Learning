import type { Equal, Expect } from '@total-typescript/helpers';

interface Attributes {
  firstName: string;
  lastName: string;
  age: number;
}

type tests = [
  Expect<
    Equal<
      AttributesGetters,
      {
        firstName: () => string;
        lastName: () => string;
        age: () => number;
      }
    >
  >
];

type AttributesGetters = {
  [K in keyof Attributes]: () => Attributes[K];
};

type tests01 = [
  Expect<
    Equal<
      AttributesGetters01,
      {
        getFirstName: () => string;
        getLastName: () => string;
        getAge: () => number;
      }
    >
  >
];

type AttributesGetters01 = {
  [K in keyof Attributes as `get${Capitalize<
    K & string
  >}`]: () => Attributes[K];
};

type AttributesGetters02 = {
  [K in 'firstName' | 'lastName' | 'age' as `get${Capitalize<
    K & string
  >}`]: () => Attributes[K];
};
