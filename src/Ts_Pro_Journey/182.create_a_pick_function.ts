import type { Equal, Expect } from '@total-typescript/helpers';
import { expect, it } from 'vitest';

const pick = <TObj, TPicked extends keyof TObj(
  obj: TObj,
  picked: Array<TPicked>
) => {
  return picked.reduce((acc, key) => {
    acc[key] = obj[key];
    return acc;
  }, {} as Pick<TObj, TPicked>); 
};

it('should pick the keys from the object', () => {
  const result = pick(
    {
      a: 1,
      b: 2,
      c: 3,
    },
    ['a', 'b']
  );

  expect(result).toEqual({
    a: 1,
    b: 2,
  });

  type tests = [
    Expect<Equal<typeof result, {
        a: number,
        b: number,
    }>>
  ]
});

it("should not allow you to pass keys which do not exist in the object", () => {
    pick({
        a: 1,
        b: 2,
        c: 3,
    }, [
        "a",
        "b",
        // @ts-expect-error
        "d"
    ])
})



// const pick = <T extends object, K  extends keyof T>(obj: T, picked: K[])=> {
//   return picked.reduce((acc, key) => {
//     acc[key] = obj[key];
//     return acc;
//   }, {} as Pick<T, K>);
// };
