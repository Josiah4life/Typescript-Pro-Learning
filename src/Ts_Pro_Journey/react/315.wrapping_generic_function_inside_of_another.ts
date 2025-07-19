import React, { useState } from 'react';
import type { Equal, Expect } from '@total-typescript/helpers';

/**
 * 1. In this exercise, we want to create a version of the useState hook that slightly modifies
 * the API - returning it as an object instead of a tuple.
 *
 * There are many different solutions -- but they all invove generics
 */

export const useStateObject = (initial: any) => {
  const [value, set] = useState<{ name: string }>(initial);

  return {
    value,
    set,
  };
};

export const useStateObject1 = <T>(initial: T) => {
  const [value, set] = useState(initial);

  return {
    value,
    set,
  };
};

type UseStateObjectReturn<T> = {
  value: T;
  set: React.Dispatch<React.SetStateAction<T>>;
};

export const useStateObject2 = <T>(initial: T): UseStateObjectReturn<T> => {
  const [value, set] = useState(initial);

  return {
    value,
    set,
  };
};

export const useStateObject3 = <T>(initial: T) => {
  const [value, set] = useState<T>(initial);

  return {
    value,
    set,
  };
};

const example = useStateObject1({ name: 'Matt' });

type ExampleTests = [
  Expect<Equal<typeof example.value, { name: string }>>,
  Expect<
    Equal<
      typeof example.set,
      React.Dispatch<React.SetStateAction<{ name: string }>>
    >
  >
];

const num = useStateObject1(2);
