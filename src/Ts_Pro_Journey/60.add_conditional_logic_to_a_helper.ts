import type { Equal, Expect } from '@total-typescript/helpers';

type YouSayGoodbyeAndISayHello<T extends 'hello' | 'goodbye'> =
  T extends 'hello' ? 'goodbye' : 'hello';

type YouSayGoodbyeAndISayHello03<T> = T extends 'hello' | 'goodbye'
  ? T extends 'hello'
    ? 'goodbye'
    : 'hello'
  : never;

type tests = [
  Expect<Equal<YouSayGoodbyeAndISayHello03<'hello'>, 'goodbye'>>,
  Expect<Equal<YouSayGoodbyeAndISayHello<'goodbye'>, 'hello'>>
];

type SwitchMap = {
  hello: 'goodbye';
  goodbye: 'hello';
};

type YouSayGoodbyeAndISayHello01<T extends keyof SwitchMap> = SwitchMap[T];

// Map Bidirectional Automatically

type SwitchMap01 = {
  hello: 'goodbye';
  goodbye: 'hello';
};

type InvertMap<T extends Record<string, string>> = {
  [K in keyof T as T[K]]: K;
} & T;

type BidirectionalMap = InvertMap<SwitchMap01>;
// { hello: "goodbye"; goodbye: "hello"; }

type YouSay<T extends keyof BidirectionalMap> = BidirectionalMap[T];
