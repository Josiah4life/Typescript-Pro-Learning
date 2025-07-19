import { it } from 'vitest';
import type { Expect, Equal } from '@total-typescript/helpers';

function returnWhatIPassInExceptFor1(t: 1): 2;
function returnWhatIPassInExceptFor1<T>(t: T): T;
function returnWhatIPassInExceptFor1(t: unknown): unknown {
  return t;
}

it('should return the type 2 when you pass in 1', () => {
  const result = returnWhatIPassInExceptFor1(1);

  type test1 = Expect<Equal<typeof result, 2>>;
});

it('otherwise, should return what you pass in', () => {
  const a = returnWhatIPassInExceptFor1('a');
  const b = returnWhatIPassInExceptFor1('b');
  const c = returnWhatIPassInExceptFor1('c');

  type tests = [
    Expect<Equal<typeof a, 'a'>>,
    Expect<Equal<typeof b, 'b'>>,
    Expect<Equal<typeof c, 'c'>>
  ];
});
