import { it, expect } from 'vitest';
import type { Equal, Expect } from '@total-typescript/helpers';

const reuturnBothOfWhatIsPassIn = <A, B>(a: A, b: B) => {
  return {
    a,
    b,
  };
};

it('Should return an object of the arguments you pass', () => {
  const result = reuturnBothOfWhatIsPassIn('a', 1);

  expect(result).toEqual({
    a: 'a',
    b: 1,
  });

  type test1 = Expect<
    Equal<
      typeof result,
      {
        a: string;
        b: number;
      }
    >
  >;
});
