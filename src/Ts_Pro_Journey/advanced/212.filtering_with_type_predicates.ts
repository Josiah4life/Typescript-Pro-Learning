import { expect, it } from 'vitest';
import type { Expect, Equal } from '@total-typescript/helpers';

export const values = ['a', 'b', undefined, 'c', undefined];

// const filteredValues = values.filter((value): value is string =>
//   Boolean(value)
// );

// const predicate = (values: string | undefined) => {
//   return Boolean(values);
// };

// const filteredValues = values.filter(predicate) as string[];

const filteredValues = values.filter(value => Boolean(value)) as string[];

it('should filter out the undefined values', () => {
  expect(filteredValues).toEqual(['a', 'b', 'c']);

  it("should be of type 'string[]'", () => {
    type test1 = Expect<Equal<typeof filteredValues, string[]>>;
  });
});
