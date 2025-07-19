import type { Equal, Expect } from '@total-typescript/helpers';
import { expect, it } from 'vitest';

// function youSayGoodbyeISayHello<TGreeting extends 'hello' | 'goodbye'>(
//   greeting: TGreeting
// ): TGreeting extends 'goodbye' ? 'hello' : 'goodbye' {
//   return (greeting === 'goodbye' ? 'hello' : 'goodbye') as any;
// }

it('should return goodbye when hello is passed in', () => {
  const result = youSayGoodbyeISayHello('hello');

  type test = [Expect<Equal<typeof result, 'goodbye'>>];
  expect(result).toEqual('goodbye');
});

it('should return hello when goodbye us passed in', () => {
  const result = youSayGoodbyeISayHello('goodbye');

  type test = [Expect<Equal<typeof result, 'hello'>>];
  expect(result).toEqual('hello');
});

const map = {
  hello: 'goodbye',
  goodbye: 'hello',
} as const;

function youSayGoodbyeISayHello<T extends keyof typeof map>(
  greeting: T
): (typeof map)[T] {
  return map[greeting];
}

type GreetingResult<TGreeting> = TGreeting extends 'hello'
  ? 'goodbye'
  : 'hello';

// function youSayGoodbyeISayHello<TGreeting extends string>(greeting: TGreeting) {
//   return (
//     greeting === 'goodbye' ? 'hello' : 'goodbye'
//   ) as GreetingResult<TGreeting>;
// }
