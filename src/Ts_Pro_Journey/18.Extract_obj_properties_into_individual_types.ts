import type { Equal, Expect } from "@total-typescript/helpers";

export const fakeDataDefaults = {
  String: "Default string",
  Int: 1,
  Float: 1.14,
  Boolean: true,
  ID: "id",
};

type fakeDataDefaults = typeof fakeDataDefaults;

export type StringType = fakeDataDefaults["String"];
export type IntType = fakeDataDefaults["Int"];
export type FloatType = fakeDataDefaults["Float"];
export type BooleanType = fakeDataDefaults["Boolean"];
export type IDType = fakeDataDefaults["ID"];

type tests = [
  Expect<Equal<StringType, string>>,
  Expect<Equal<IntType, number>>,
  Expect<Equal<FloatType, number>>,
  Expect<Equal<BooleanType, boolean>>,
  Expect<Equal<IDType, string>>
];
