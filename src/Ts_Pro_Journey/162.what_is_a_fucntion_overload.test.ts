import type { Expect, Equal } from '@total-typescript/helpers';
import { expect, test } from 'vitest';

/**
 * This time, let's solve this with function overloads!
 */

function returnWhatIPassIn(t: string): string;
function returnWhatIPassIn(t: number): number;
function returnWhatIPassIn(t: number | string) {
  return t;
}

test('should return', () => {
  // expect(returnWhatIPassIn(1)).toEqual(2);
  // expect(returnWhatIPassIn(1)).toEqual(1);
  expect(returnWhatIPassIn(1)).toEqual(true);
  expect(returnWhatIPassIn(true)).toEqual(true);
});

const one = returnWhatIPassIn(1);
const matt = returnWhatIPassIn('matt');

type tests = [Expect<Equal<typeof one, 1>>, Expect<Equal<typeof matt, 'matt'>>];

// nox vitest run
// .test.ts
