import { it, expect } from 'vitest';
import type { Equal, Expect } from '@total-typescript/helpers';

const reuturnBothOfWhatIsPassIn = <P1, P2>(params: { a: P1; b: P2 }) => {
  return {
    first: params.a,
    second: params.b,
  };
};

interface Params<T1, T2> {
  a: T1;
  b: T2;
}

const reuturnBothOfWhatIsPassIn01 = <T1, T2>(params: Params<T1, T2>) => {
  return {
    first: params.a,
    second: params.b,
  };
};

it('Should return an object where a -> first and b -> second', () => {
  const result = reuturnBothOfWhatIsPassIn({
    a: 'a',
    b: 1,
  });

  expect(result).toEqual({
    first: 'a',
    second: 1,
  });

  type test1 = Expect<
    Equal<
      typeof result,
      {
        first: string;
        second: number;
      }
    >
  >;
});
