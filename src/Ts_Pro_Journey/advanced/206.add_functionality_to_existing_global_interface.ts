import { it, expect } from 'vitest';
import type { Equal, Expect } from '@total-typescript/helpers';

/**
 *
 * Clues:
 *
 * 1. You'll need to declare global again
 *
 * 2. Inside declare global, you'll need to modify the Window interface to add a makeGreeting function
 */

declare global {
  interface Window {
    makeGreeting: () => string;
  }
}

window.makeGreeting = () => 'Hello';

it('should let you call makeGreeting from the window object', () => {
  expect(window.makeGreeting()).toBe('Hello, World');

  type test1 = Expect<Equal<typeof window.makeGreeting, () => string>>;
});

it('should not be available on globalThis', () => {
  expect(
    //@ts-expect-error
    globalThis.makeGreeting
  ).toBe(undefined);
});

// If this is inside a .ts file, you must force TypeScript to treat it as a module, or it won’t allow declare global.
