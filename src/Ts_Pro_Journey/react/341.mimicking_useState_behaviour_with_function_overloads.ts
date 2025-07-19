import { useState } from 'react';
import type { Equal, Expect } from '@total-typescript/helpers';

/**
 * Returning to our useStateAsObject function, we now want to make it work EXACTLY like useState,
 * where if you return NOTHING, it returns T | undefined.
 *
 *
 * If you pass a default value, it should NOT include undefined.
 */

export function useStateAsObject<T>(initial: T) {
  const [value, set] = useState(initial);

  return {
    value,
    set,
  };
}

/**
 * If you DO pass a default value, the result should not unclude undefiend.
 */

const notundefined = useStateAsObject({
  name: 'Matt',
});

type ExampleTests = [
  Expect<Equal<typeof notundefined.value, { name: string }>>,
  Expect<
    Equal<
      typeof notundefined.set,
      React.Dispatch<React.SetStateAction<{ name: string }>>
    >
  >
];

/**
 * If you don't pass a value, it should be undefined.
 */

const hasUndefined = useStateAsObject1<number>();

type UseStateReturnValue<T> = {
  value: T;
  set: React.Dispatch<React.SetStateAction<T>>;
};

type NumTests = [
  Expect<Equal<typeof hasUndefined.value, number | undefined>>,
  Expect<
    Equal<
      typeof hasUndefined.set,
      React.Dispatch<React.SetStateAction<number | undefined>>
    >
  >
];

export function useStateAsObject1<T>(initial: T): {
  value: T;
  set: React.Dispatch<React.SetStateAction<T>>;
};
export function useStateAsObject1<T>(): {
  value: T | undefined;
  set: React.Dispatch<React.SetStateAction<T | undefined>>;
};
export function useStateAsObject1<T>(initial?: T) {
  const [value, set] = useState(initial);

  return {
    value,
    set,
  };
}
