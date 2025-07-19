import { it } from 'vitest';
import type { Expect, Equal } from '@total-typescript/helpers';

function useData<T>(params: { fetchData: () => Promise<T> }): {
  getData: () => T | undefined;
};
function useData<T>(params: { fetchData: () => Promise<T>; initialData: T }): {
  getData: () => T;
};
function useData<T>(params: { fetchData: () => Promise<T>; initialData?: T }): {
  getData: () => T | undefined;
} {
  let data = params.initialData;

  params.fetchData().then(d => {
    data = d;
  });

  return {
    getData: () => data,
  };
}

it('should return undefined if no intial data is passed', () => {
  const numData = useData({
    fetchData: () => Promise.resolve(1),
  });

  const data = numData.getData();

  type Test1 = Expect<Equal<typeof data, number | undefined>>;
});

it('shoukd NOT return undefined if initial data is passed', () => {
  const numData = useData({
    fetchData: () => Promise.resolve(1),
    initialData: 2,
  });

  const data = numData.getData();

  type Test1 = Expect<Equal<typeof data, number>>;
});

// const a = {
//   name: 'jboy',
//   age: 12,
// }

// a.age = 14;

// function printuser(user: { name: 'jboy', age: 12 }) {}

// printuser(a)
