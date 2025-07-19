import { expect, it } from 'vitest';
import type { Equal, Expect } from '@total-typescript/helpers';

const retrunBothOfWhatIPassIn = <
  Tparams extends {
    a: unknown;
    b: unknown;
  }
>(
  params: Tparams
): [Tparams['a'], Tparams['b']] => {
  return [params.a, params.b];
};

it('should return a tuple of the properties a and b', () => {
  const result = retrunBothOfWhatIPassIn({
    a: 'a',
    b: 1,
  });

  expect(result).toEqual(['a', 1]);
});

const retrunBothOfWhatIPassIn01 = <T1, T2>(params: {
  a: T1;
  b: T2;
}): [T1, T2] => {
  return [params.a, params.b];
};
