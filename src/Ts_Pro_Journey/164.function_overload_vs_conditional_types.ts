/**
 * This time, let's try and solve this one with fucntion overloads too
 */

import type { Equal, Expect } from '@total-typescript/helpers';
import { expect } from 'vitest';

function youSayGoodbyeISayHello(greeting: 'goodbye'): 'hello';
function youSayGoodbyeISayHello(greeting: 'hello'): 'goodbye';
function youSayGoodbyeISayHello(greeting: 'goodbye' | 'hello') {
  return greeting === 'goodbye' ? 'hello' : 'goodbye';
}

it('should return goodbye when hello is passed', () => {
  const result = youSayGoodbyeISayHello('hello');

  type test = [Expect<Equal<typeof result, 'goodbye'>>];

  expect(result).toEqual('goodbye');
});

it('should return hello when goodbye is passed', () => {
  const result = youSayGoodbyeISayHello('goodbye');

  type test = [Expect<Equal<typeof result, 'hello'>>];

  expect(result).toEqual('hello');
});
