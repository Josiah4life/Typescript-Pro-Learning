import type { Equal, Expect } from "@total-typescript/helpers";

type AddPrefixRoute<Routes extends string> = `/${Routes}`;

type tests = [
  Expect<Equal<AddPrefixRoute<"">, "/">>,
  Expect<Equal<AddPrefixRoute<"about">, "/about">>,
  Expect<Equal<AddPrefixRoute<"about/team">, "/about/team">>,
  Expect<Equal<AddPrefixRoute<"blog">, "/blog">>,

  //@ts-expect-error
  AddPrefixRoute<boolean>,
  //@ts-expect-error
  AddPrefixRoute<number>
];
