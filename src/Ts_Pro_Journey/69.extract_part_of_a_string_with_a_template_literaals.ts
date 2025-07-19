import type { Equal, Expect, Extends } from '@total-typescript/helpers';
import { S } from 'ts-toolbelt';

type Names = [
  'Matt Peacock',
  'Jimi Headrix',
  'Eric Clapton',
  'John Mayer',
  'BB King'
];

type GetSurname<T> = T extends `${infer First} ${infer Last}` ? Last : never;
type GetSurname01<T extends string> = S.Split<T, ' '>[1];

type tests = [
  Expect<Equal<GetSurname<Names[0]>, 'Peacock'>>,
  Expect<Equal<GetSurname<Names[1]>, 'Headrix'>>,
  Expect<Equal<GetSurname<Names[2]>, 'Clapton'>>,
  Expect<Equal<GetSurname<Names[3]>, 'Mayer'>>,
  Expect<Equal<GetSurname<Names[4]>, 'King'>>
];
