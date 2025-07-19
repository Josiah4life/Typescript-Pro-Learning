import type { Expect, Equal } from '@total-typescript/helpers';

const divElement = document.querySelector('div');
const spanElement = document.querySelector('span');

/**
 * Your challenge: figure our why divElement2 is not of type HTMLDivElement.
 */

// const divElement2 = document.querySelector<HTMLDivElement>('div.foo');
const divElement2 = document.querySelector('div.foo') as HTMLDivElement | null;

interface MattInterface {
  a(): 1;
  a(param: 'wow'): 2;
}

const example = {} as MattInterface;

example.a('wow');

// This methods above lets us declare different overloads on the interface.

type tests = [
  Expect<Equal<typeof divElement, HTMLDivElement | null>>,
  Expect<Equal<typeof spanElement, HTMLSpanElement | null>>,
  Expect<Equal<typeof divElement2, HTMLDivElement | null>>
];
