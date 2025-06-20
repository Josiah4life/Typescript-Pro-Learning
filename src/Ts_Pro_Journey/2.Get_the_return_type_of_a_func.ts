import type { Expect, Equal } from "@total-typescript/helpers";

const func = () => {
  return "hello";
};

type me = typeof func;
type MyFuncReturn = ReturnType<typeof func>;

type tests = [Expect<Equal<MyFuncReturn, string>>];

// In essence This restrict the T only be a function.
// T is a generic type placeholder (we pass in a type later)
// So we doing if 'T' is a function type, then infer (guess) the return type and call it R.
type ReturnType<T extends (...args: any) => any> = T extends (
  ...argv: any
) => infer R
  ? R
  : any;
