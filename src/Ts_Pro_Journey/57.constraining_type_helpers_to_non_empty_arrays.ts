// type NonEmptyArray = [string, ...string[]]
type NonEmptyArray<T> = [T, ...Array<T>];

export const makeEnum = (values: NonEmptyArray<string>) => {};

makeEnum(['a']);
makeEnum(['a', 'b', 'c']);

//@ts-expect-error
makeEnum([]);

type NonEmptyStringArray = [string, ...string[]];
type NonEmptyArray05<T> = [T, ...T[]];

type NonEmptyArray02<T> = T extends [infer First, ...infer Rest] ? T : never;
type NonEmptyArray03<T> = T extends [any, ...any[]] ? T : null;
type NonEmptyArray04<T> = T extends [any, ...any[]] ? T : null;

const arr: [string, number] = ['stear', 25].push();

type IsEmpty<T extends any[]> = T['length'] extends 0 ? true : false;

type A = IsEmpty<[]>; // true
type B = IsEmpty<[string]>; // false
type C = IsEmpty<[number, string]>; // false

const arra: NonEmptyArray02<['23']> = ['23'];

const arre = (ary: NonEmptyArray02<[string]>) => {};

const result = arre(['2']);
