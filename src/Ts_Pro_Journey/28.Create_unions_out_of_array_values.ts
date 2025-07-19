import type { Equal, Expect } from "@total-typescript/helpers";

const fruit = ["apple", "banana", "orange"] as const;

type Fruit = (typeof fruit)[number]; // "apple" | "banana" | "orange"
// [number] means “the type of any indexed element in that array”.
type AppleOrBanana = Extract<Fruit, "apple" | "banana">;
type AppleOrOrange = (typeof fruit)[0 | 2];

type tests = [
  Expect<Equal<AppleOrBanana, "apple" | "banana">>,
  Expect<Equal<Fruit, "apple" | "banana" | "orange">>
];
