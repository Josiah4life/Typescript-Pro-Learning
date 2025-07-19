import type { Equal, Expect } from '@total-typescript/helpers';

type Fruit =
  | {
      name: 'apple';
      color: 'red';
    }
  | {
      name: 'banana';
      color: 'yellow';
    }
  | {
      name: 'orange';
      color: 'orange';
    };

type tests = [
  Expect<
    Equal<TransformedFruit, 'apple:red' | 'banana:yellow' | 'orange:orange'>
  >
];

type TransformedFruit = {
  [K in Fruit as K['name']]: `${K['name']}:${K['color']}`;
}[Fruit['name']];
