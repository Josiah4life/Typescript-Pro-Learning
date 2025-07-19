import type { Expect, Equal } from '@total-typescript/helpers';

const func = () => {
  return 'hello';
};

type myFunc = typeof func;
type MyFuncReturn = ReturnType<myFunc>;

type tests = [Expect<Equal<MyFuncReturn, string>>];

// In essence This restrict the T only be a function.
// T is a generic type placeholder (we pass in a type later)
// So we doing if 'T' is a function type, then infer (guess) the return type and call it R.
type ReturnType<T extends (...args: any) => any> = T extends (
  ...argv: any
) => infer R
  ? R
  : any;

// Another Quick Example.

type FirstParam<T extends (...args: any[]) => any> = T extends (
  arg1: infer P,
  ...rest: any[]
) => any
  ? P
  : never;

const greet = (name: string, age: number) => `Hi ${name}`;

type Params = FirstParam<typeof greet>;

//Note: infer is a special Typescript keyword that means --: "Try to figure out a type for me by extracting it from a pattern"

type Exact<T, Shape> = T extends Shape
  ? Exclude<keyof T, keyof Shape> extends never
    ? T
    : never
  : never;

function getName<T>(thing: Exact<T, { name: string }>) {
  return thing.name;
}

// ✅ OK
getName({ name: 'Jo' });

//@ts-expect-error
// ❌ Error: extra 'age' property not allowed
getName({ name: 'Jo', age: 20 });
