import { it } from 'vitest';
import type { Equal, Expect } from '@total-typescript/helpers';

export const narrowFruits = <
  // const TFruit extends readonly {
  //     name: string;
  //     price: number
  // }[]
  const TFruit extends ReadonlyArray<{
    name: string;
    price: number;
  }>
>(
  t: TFruit
) => t;

const fruits = narrowFruits([
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
      typeof fruits,
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

it('should ONLY let you pass an array of fruit', () => {
  const notAllowed = narrowFruits([
    //@ts-expect-error
    'not allowed',
  ]);
});
