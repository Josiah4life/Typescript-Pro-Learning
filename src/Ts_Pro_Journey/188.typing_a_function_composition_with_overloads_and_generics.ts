import type { Expect, Equal } from '@total-typescript/helpers';
import { expect, it } from 'vitest';

export function compose<T1, T2>(func: (t1: T1) => T2): (t1: T1) => T2;
export function compose<T1, T2, T3>(
  func: (t1: T1) => T2,
  func2: (t2: T2) => T3
): (t1: T1) => T3;
export function compose<T1, T2, T3, T4>(
  func: (t1: T1) => T2,
  func2: (t2: T2) => T3,
  func3: (t2: T3) => T4
): (t1: T1) => T4;
export function compose<T1, T2, T3, T4, T5>(
  func: (t1: T1) => T2,
  func2: (t2: T2) => T3,
  func3: (t2: T3) => T4,
  func4: (t2: T4) => T5
): (t1: T1) => T5;
export function compose(...funcs: Array<(input: any) => any>) {
  return (input: any) => {
    return funcs.reduce((acc, fn) => fn(acc), input);
  };
}

const addOne = (num: number) => {
  return num + 1;
};

const addTwoAndStringify = compose(addOne, addOne, String);

it('should compose multiple functions together', () => {
  const result = addTwoAndStringify(4);

  expect(result).toEqual('6');

  type tests = [Expect<Equal<typeof result, string>>];
});

it('should error when the input to a function is not tyyped correxctly', () => {
  const stringiFyThenADdOne = compose(
    // addOne takes in a number - so it should't be allowed after.
    // a functopn that return string
    // @ts-expect-error
    String,
    addOne
  );
});

//function composer

// const a = (a: number) => {
//   return a;
// };

// const b = a(1, String);
