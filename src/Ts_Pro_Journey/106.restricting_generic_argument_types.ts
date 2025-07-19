import { it } from 'vitest';
import type { Equal, Expect } from '@total-typescript/helpers';

export const returnWhatIPassIn = <T extends string>(t: T) => t;

it('should only allow string to be passed in', () => {
  const a = returnWhatIPassIn('a');

  type test1 = Expect<Equal<typeof a, 'a'>>;

  //@ts-expect-error
  returnWhatIPassIn(1);

  //@ts-expect-error
  returnWhatIPassIn(true);

  //@ts-expect-error
  returnWhatIPassIn({
    foo: 'bar',
  });
});
