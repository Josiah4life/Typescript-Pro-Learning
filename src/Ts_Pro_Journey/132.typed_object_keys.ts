import type { Equal, Expect } from '@total-typescript/helpers';
import { expect, it } from 'vitest';

/**
 * There are two possible solutions to this problems -- and it's
 * to do with the way you specify the genrics. Can you get
 * both solutions
 */

const typedObjectKeys01 = <T extends Record<string, any>>(obj: T) => {
  return Object.keys(obj) as Array<keyof T>;
};

const typedObjectKeys = <Tkeys extends string>(obj: Record<Tkeys, any>) => {
  return Object.keys(obj) as Array<Tkeys>;
};

it('should return the keys of the objects', () => {
  const resul1 = typedObjectKeys({
    a: 1,
    b: 2,
  });

  expect(resul1).toEqual(['a', 'b']);

  type test = Expect<Equal<typeof resul1, Array<'a' | 'b'>>>;
});
