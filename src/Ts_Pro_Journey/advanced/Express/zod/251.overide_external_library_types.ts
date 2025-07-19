import type { Equal, Expect } from '@total-typescript/helpers';
import { getAnimatingState } from 'name-here';

const animatingState = getAnimatingState();

// If it's from like a library. we can add other decalre file. like d.ts
// so we want to overide the types that're being exported from the library.

//@ts-expect-error
declare module 'name-here' {
  export type wow = string;
  export type AnimatingState =
    | 'before-animation'
    | 'animating'
    | 'after-animation';
  export function getAnimatingState(): AnimatingState;
}

type tests = [
  Expect<
    Equal<
      typeof animatingState,
      'before-animation' | 'animating' | 'after-animation'
    >
  >
];
