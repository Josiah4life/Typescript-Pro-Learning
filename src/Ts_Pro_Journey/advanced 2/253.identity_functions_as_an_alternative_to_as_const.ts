import type { Expect, Equal } from '@total-typescript/helpers';

export const asConst = <const T>(t: T) => t;

// adding const T that'll solve this instead of using as const.
// So anything passed into it will get inferred into it most literal value.
const fruit = asConst([
  {
    name: 'apple',
    price: 1,
  },
  {
    name: 'banana',
    price: 2,
  },
]);

type tests = [
  Expect<
    Equal<
      typeof fruit,
      readonly [
        {
          readonly name: 'apple';
          readonly price: 1;
        },
        {
          readonly name: 'banana';
          readonly price: 2;
        }
      ]
    >
  >
];
