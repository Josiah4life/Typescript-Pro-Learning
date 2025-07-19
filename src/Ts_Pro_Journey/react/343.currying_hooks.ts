import { useState, useMemo } from 'react';
import type { DependencyList } from 'react';
import type { Equal, Expect } from '@total-typescript/helpers';

const useCustomState = <TValue>(initial: TValue) => {
  const [value, set] = useState<TValue>(initial);

  return {
    value,
    set,

    /**
     * Here, we're returning a hook from our intial hook!
     * This iss a great way to compose behavior.
     *
     * BUT - useComputed takes in a function which can return any type. We wwant to make sure the
     * type of the thing returned is inferred properly.
     */

    useComputed: <TComputed>(
      factory: (value: TValue) => TComputed,
      deps?: DependencyList
    ) => {
      return useMemo(() => {
        return factory(value);
      }, [value, ...(deps || [])]);
    },
  };
};

const Component = () => {
  const arrayOfNums = useCustomState([1, 2, 3, 4, 5, 6, 7, 8]);

  /**
   * Currently, this is typed as any. How do we type it based on the return type of the fucntion
   * passed to useComputed?
   */

  const reversedAsString = arrayOfNums.useComputed(nums =>
    Array.from(nums).reverse().map(String)
  );

  type test = Expect<Equal<typeof reversedAsString, string[]>>;
};
