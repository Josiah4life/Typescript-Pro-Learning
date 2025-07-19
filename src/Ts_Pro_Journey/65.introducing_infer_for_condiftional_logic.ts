import type { Equal, Expect } from "@total-typescript/helpers";

type GetDataValue<T> = T extends { data: infer U } ? U : never;
type GetDataValue01<T> = T extends { data: any } ? T["data"] : never;

type tests = [
  Expect<Equal<GetDataValue<{ data: "hello" }>, "hello">>,
  Expect<Equal<GetDataValue<{ data: { name: "hello" } }>, { name: "hello" }>>,

  Expect<
    Equal<
      GetDataValue<{ data: { name: "hello"; age: 20 } }>,
      { name: "hello"; age: 20 }
    >
  >
];

// function acc(Tdata: GetDataValue<{ data: {name: "dabadaba"}}>) {}

// acc({name: "dabadaba"})
