declare module 'name-here' {
  export type wow = string;
  export type AnimatingState =
    | 'before-animation'
    | 'animating'
    | 'after-animation';
  export function getAnimatingState(): AnimatingState;
}
