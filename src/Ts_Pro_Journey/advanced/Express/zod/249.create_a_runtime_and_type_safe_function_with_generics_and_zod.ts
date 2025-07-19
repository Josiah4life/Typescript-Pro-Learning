import { z } from 'zod';
import { expect, it } from 'vitest';

const makeZodSafeFunction = <TArg, TResult>(
  schema: z.ZodType<TArg>,
  func: (arg: TArg) => TResult
) => {
  return (arg: TArg) => {
    const result = schema.parse(arg);
    return func(result);
  };
};

const addTwoNumbersArg = z.object({
  a: z.number(),
  b: z.number(),
});

const addTwoNumbers = makeZodSafeFunction(
  addTwoNumbersArg,
  args => args.a + args.b
);

it('should error on the type level AND the runtime if you pass incorrect params', () => {
  expect(() =>
    addTwoNumbers(
      //@ts-expect-error
      { a: 1, badParam: 3 }
    )
  ).toThrow();
});

it('should succeed if you pass the correct type', () => {
  expect(addTwoNumbers({ a: 1, b: 2 })).toBe(3);
});
