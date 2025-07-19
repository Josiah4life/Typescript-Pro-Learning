import type { Equal, Expect } from '@total-typescript/helpers';
import { F } from 'ts-toolbelt';

interface Fruit {
  name: string;
  price: number;
}

export const wrapFruit = <TArray extends Fruit[]>(fruits: F.Narrow<TArray>) => {
  const getFruit = <TName extends TArray[number]['name']>(name: TName) => {
    return fruits.find(fruit => fruit.name === name) as Extract<
      TArray[number],
      { name: TName }
    >;
  };

  return {
    getFruit,
  };
};

const fruit = wrapFruit([
  {
    name: 'apple',
    price: 1,
  },
  {
    name: 'banana',
    price: 2,
  },
]);

const banana = fruit.getFruit('banana');
const apple = fruit.getFruit('apple');
//@ts-expect-error
const notAllowed = fruit.getFruit('not-allowed');

type tests = [
  Expect<Equal<typeof apple, { name: 'apple'; price: 1 }>>,
  Expect<Equal<typeof banana, { name: 'banana'; price: 2 }>>
];
