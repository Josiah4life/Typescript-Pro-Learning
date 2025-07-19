import type { Equal, Expect } from "@total-typescript/helpers";

interface Example {
  name: string;
  age: number;
  id: string;
  organizationId: string;
  groupId: string;
}

type tests = [
  Expect<
    Equal<
      OnlyIdKeys<Example>,
      {
        id: string;
        organizationId: string;
        groupId: string;
      }
    >
  >
];

type SearchForId = `${string}${"id" | "Id"}${string}`;

const id: SearchForId = "organizationId";

type OnlyIdKeys02<T> = {
  [K in keyof Example as K extends `${string}id` | `${string}Id`
    ? K
    : never]: Example[K];
};

type OnlyIdKeys01<T> = {
  [K in keyof Example as K extends `${string}${"id" | "Id"}${string}`
    ? K
    : never]: Example[K];
};

type OnlyIdKeys<T> = {
  [K in keyof T as K extends SearchForId ? K : never]: T[K];
};
