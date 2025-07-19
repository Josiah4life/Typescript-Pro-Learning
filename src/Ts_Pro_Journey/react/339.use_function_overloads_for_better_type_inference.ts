import { useState } from 'react';
import type { Equal, Expect } from '@total-typescript/helpers';

useState;
// ^^^^ CMD-click to see the implementation of useState

/**
 * 1. Take a loook at useState. you'll notice that it's composed of two overloads.
 *
 * 2. Try to figure out what is the difference is between the two oveloads.
 *
 * 3. Below, there's a single function that expects to behave like useState.
 * Try to write a set of function overloads that:
 *
 * -if it recieves a string, returns a string.
 * -if it reacieves NOTHING, returns a string | undefined.
 *
 * HINT -- you'll need to use the function keyword THREE times.
 */

function maybeReturnString(defaultString?: string) {
  // If you pass a string, it always return a string

  if (defaultString) {
    return defaultString;
  }

  return Math.random() > 0.9 ? 'hello' : undefined;
}

// Otherwise, it MIGHT return a string or undefined.

const exmaple1 = prollyString('hello');
const example2 = prollyString();

type tests = [
  Expect<Equal<typeof exmaple1, string>>,
  Expect<Equal<typeof example2, string | undefined>>
];

/**
 *
 * Default Required
 */
function prollyString(defaultString: string): string;
/**
 * Not Required
 */
function prollyString(defaultString?: string | undefined): string | undefined;
function prollyString(defaultString?: string) {
  if (defaultString) {
    return defaultString;
  }

  return Math.random() > 0.9 ? 'hello' : undefined;
}
