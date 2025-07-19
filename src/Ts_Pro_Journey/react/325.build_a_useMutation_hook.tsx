import { createUser } from './325.1.index';
import { useState } from 'react';
import type { Equal, Expect } from '@total-typescript/helpers';

type Mutation<TArgs extends any[], TReturn> = (
  ...args: TArgs
) => Promise<TReturn>;

interface UseMutationReturn<TArgs extends any[], TReturn> {
  mutate: Mutation<TArgs, TReturn>;
  isLoading: boolean;
}

interface UseMutationOptions<TArgs extends any[], TReturn> {
  mutation: Mutation<TArgs, TReturn>;
}

export const useMutation = <TArgs extends any[], TReturn>(
  opts: UseMutationOptions<TArgs, TReturn>
): UseMutationReturn<TArgs, TReturn> => {
  const [isLoading, setIsLoading] = useState(false);

  return {
    mutate: async (...args) => {
      setIsLoading(true);
      try {
        const result = await opts.mutation(...args);
        return result;
      } catch (e) {
        throw e;
      } finally {
        setIsLoading(false);
      }
    },
    isLoading,
  };
};

const mutation = useMutation({
  mutation: createUser,
});

mutation.mutate({
  name: 'John Doe',
  email: 'john@doe.com',
});

//@ts-expect-error email is missing!
mutation.mutate({
  name: 'John Doe',
});

mutation.mutate(
  {
    name: 'John D',
    email: 'd@gmail.com',
  },
  {
    throwOnError: true,
    //@ts-expect-error extra props.
    extra: 'oh dear',
  }
);

type test = [
  Expect<Equal<typeof mutation.isLoading, boolean>>,
  Expect<
    Equal<
      typeof mutation.mutate,
      (
        user: { name: string; email: string },
        opts?: {
          throwOnError?: boolean;
        }
      ) => Promise<{
        id: string;
        name: string;
        email: string;
      }>
    >
  >
];

/**
//
type Mutation<TArgs extends any[] = any[], TReturn = any> = (...args: TArgs) => Promise<TReturn>;

interface UseMutationReturn<TArgs extends any[], TReturn> {
  mutate: (...args: TArgs) => Promise<TReturn>;
  isLoading: boolean;
}

interface UseMutationOptions<TArgs extends any[], TReturn> {
  mutation: (...args: TArgs) => Promise<TReturn>;
}

export const useMutation = <TArgs extends any[], TReturn>(
  opts: UseMutationOptions<TArgs, TReturn>
): UseMutationReturn<TArgs, TReturn> => {
  const [isLoading, setIsLoading] = useState(false);

  return {
    mutate: async (...args: TArgs) => {
      setIsLoading(true);

      try {
        const result = await opts.mutation(...args);
        return result;
      } catch (e) {
        throw e;
      } finally {
        setIsLoading(false);
      }
    },
    isLoading,
  };
};

 */
