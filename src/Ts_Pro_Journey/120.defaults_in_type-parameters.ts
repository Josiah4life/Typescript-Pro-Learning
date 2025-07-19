import type { Equal, Expect } from '@total-typescript/helpers';

export const createSet = <T = string>() => {
  return new Set<T>();
};

const numberSet = createSet<number>();
const stringSet = createSet<string>();
const otherStringSet = createSet();

type tests = [
  Expect<Equal<typeof numberSet, Set<number>>>,
  Expect<Equal<typeof stringSet, Set<string>>>,
  Expect<Equal<typeof otherStringSet, Set<string>>>
];
