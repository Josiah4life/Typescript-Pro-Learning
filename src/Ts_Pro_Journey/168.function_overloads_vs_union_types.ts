import type { Expect, Equal } from '@total-typescript/helpers';
import { it, expect } from 'vitest';

function runGenerator(generator: () => string): string;
function runGenerator(generator: { run: () => string }): string;
function runGenerator(generator: { run: () => string } | (() => string)) {
  if (typeof generator === 'function') {
    return generator();
  }
  return generator.run();
}

it('should accept an object where the generator is a function', () => {
  const result = runGenerator({
    run: () => 'hello',
  });

  expect(result).toBe('hello');

  type test1 = Expect<Equal<typeof result, string>>;
});

it('should where ', () => {
  const result = runGenerator(() => 'hello');

  expect(result).toBe('hello');

  type test1 = Expect<Equal<typeof result, string>>;
});
