import type { Expect, Equal } from '@total-typescript/helpers';

export const createSet = <T>() => {
  return new Set<T>();
};

const stringSet = createSet<string>();
const numberSet = createSet<number>();
const unknwonSet = createSet();

type tests = [
  Expect<Equal<typeof stringSet, Set<string>>>,
  Expect<Equal<typeof numberSet, Set<number>>>,
  Expect<Equal<typeof unknwonSet, Set<unknown>>>
];

const set = new Set<string>();

//@ts-expect-error
set.add(12);
