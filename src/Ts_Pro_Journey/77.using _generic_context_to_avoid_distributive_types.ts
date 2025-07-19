import type { Equal, Expect } from "@total-typescript/helpers";

type Fruit = "apple" | "banana" | "orange" | "pear";

type GetAppleOrBanana<T> = T extends "apple" | "banana" ? T : never;

type AppleOrBanana = GetAppleOrBanana<Fruit>;
type AppleOrBanana01 = Fruit extends infer T
  ? T extends "apple" | "banana"
    ? T
    : never
  : never;

type tests = [Expect<Equal<AppleOrBanana, "apple" | "banana">>];
