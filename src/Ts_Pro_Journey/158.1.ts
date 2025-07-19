import type { CSSProperties } from 'react';

const makeUseStyled = <TTheme>(theme: TTheme) => {
  return (func: (theme: TTheme) => CSSProperties): CSSProperties => {
    return func(theme)
  };
};


// const makeUseStyled = <TTheme>() => {
//   return (func: (theme: TTheme) => CSSProperties): CSSProperties => {
//     // Imagine getting theme globally here
//     return {} as CSSProperties;
//   };
// };


interface MyTheme {
  color: {
    primary: string;
  };

  fontSize: {
    small: string;
  };
}

const theme: MyTheme = { ... }

const useStyled = makeUseStyled(theme);


// const useStyled = makeUseStyled<MyTheme>();

useStyled(theme => ({
  backgroundColor: theme.color.primary,
  fontSize: theme.fontSize.small,
}));
