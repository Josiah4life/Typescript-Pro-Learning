import type { Equal, Expect } from '@total-typescript/helpers';
import { expect, it } from 'vitest';

export interface Cache<T> {
  get: (key: string) => T | undefined;
  set: (key: string, value: T) => void;
  clone: <U>(transform: (elem: T) => U) => Cache<U>;
}

const createCache = <T>(initialCache?: Record<string, T>): Cache<T> => {
  const cache: Record<string, T> = initialCache || {};

  return {
    get: key => cache[key],
    set: (key, value) => {
      cache[key] = value;
    },
    clone: <U>(transform: (elem: T) => U) => {
      const newCache: Record<string, any> = {};

      for (const key in cache) {
        const value = cache[key];
        if (value !== undefined) {
          newCache[key] = transform(value);
        }
      }

      return createCache(newCache);
    },
  };
};
it('Should let you get and set to/from the cache', () => {
  const cache = createCache<number>();

  cache.set('a', 1);
  cache.set('b', 2);

  expect(cache.get('a')).toEqual(1);
  expect(cache.get('b')).toEqual(2);
});

it('should let you clone using a transform fucntion', () => {
  const numberCache = createCache<number>();

  numberCache.set('a', 1);
  numberCache.set('a', 2);

  const stringCache = numberCache.clone(elem => {
    return String(elem);
  });

  const a = stringCache.get('a');

  expect(a).toEqual('1');

  type tests = [Expect<Equal<typeof a, string | undefined>>];
});

const userCache = createCache();

const me = () => {};
userCache.clone(me);

interface A {
  name: { name: string };
  age: { age: number };
  class: () => {};
}

const b = (): A => ({
  name: { name: 'Jo' },
  age: { age: 25 },
  class: () => ({ value: 'hello' }),
});

const result = b().class();
console.log(result); // { value: "hello" }

// const userCache = createCache<number>({
//     "age": 23
// });

// userCache.set('jacobage', 23);

type a2 = {
  //   name: () => {};
  age: number;
  class: string;
};

const ab = (aaa: a2) => {
  aaa.age;
  aaa.class;

  return 21;
};

const c = ab({ age: 12, class: 'e' });

function createCounter() {
  let count = 0;

  return {
    increment: () => ++count,
    get: () => count,
  };
}

const counter = createCounter();
counter.increment(); // 1
counter.get(); // 1
