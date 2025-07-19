import React from 'react';
import type { Equal, Expect } from '@total-typescript/helpers';

const createRequiredContext = <T,>() => {
  const context = React.createContext<T | null>(null);

  const useContext = () => {
    const contextValue = React.useContext(context);

    if (contextValue === null) {
      throw new Error('Context value is null');
    }

    return contextValue;
  };
  return [useContext, context.Provider] as const;
};

const [useUser, UserProvider] = createRequiredContext<{
  name: string;
}>();

const [useTheme, ThemeProvider] = createRequiredContext<{
  primaryColor: string;
}>();

const Child = () => {
  const user = useUser();

  type test = Expect<
    Equal<
      typeof user,
      {
        name: string;
      }
    >
  >;
};
