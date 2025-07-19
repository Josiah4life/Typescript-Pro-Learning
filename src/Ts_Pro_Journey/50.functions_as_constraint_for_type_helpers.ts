import type { Equal, Expect } from "@total-typescript/helpers";

type GetParameterAndReturnType<T extends (...args: any) => any> = {
  params: Parameters<T>;
  returnValue: ReturnType<T>;
};

type tests = [
  Expect<
    Equal<
      GetParameterAndReturnType<() => string>,
      {
        params: [];
        returnValue: string;
      }
    >
  >,

  Expect<
    Equal<
      GetParameterAndReturnType<(s: string) => void>,
      { params: [string]; returnValue: void }
    >
  >,

  Expect<
    Equal<
      GetParameterAndReturnType<(n: number, b: boolean) => number>,
      { params: [number, boolean]; returnValue: number }
    >
  >
];
