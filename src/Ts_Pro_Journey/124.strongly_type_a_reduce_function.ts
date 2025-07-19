import { it, expect } from 'vitest';
import type { Equal, Expect } from '@total-typescript/helpers';

const array = [
  {
    name: 'John',
  },
  {
    name: 'Steeve',
  },
];

const obj = array.reduce<Record<string, { name: string }>>((accum, item) => {
  accum[item.name] = item;
  return accum;
}, {} as Record<string, { name: string }>);

const obj01 = array.reduce((accum: Record<string, { name: string }>, item) => {
  accum[item.name] = item;
  return accum;
}, {});

const obj2 = array.reduce((accum, item) => {
  accum[item.name] = item;
  return accum;
}, {} as Record<string, { name: string }>);

it('should resolve to an object where name is the key', () => {
  expect(obj).toEqual({
    John: {
      name: 'john',
    },
    Steeve: {
      name: 'Steeve',
    },
  });

  type tests = [Expect<Equal<typeof obj, Record<string, { name: string }>>>];
});
