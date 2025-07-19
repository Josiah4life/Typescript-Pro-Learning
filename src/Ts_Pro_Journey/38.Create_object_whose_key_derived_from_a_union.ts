import type { Equal, Expect } from "@total-typescript/helpers";

type TemplateLiteralKey = `${"user" | "post" | "comment"}${"Id" | "Name"}`;

type ObjectOfKeys = {
  [K in TemplateLiteralKey]: string;
};

type ObjectOfKeys01 = Record<TemplateLiteralKey, string>;

type Records<K extends keyof any, T> = {
  [V in K]: T;
};

/**
 * type Records<K extends keyof any, T> = {
    [V in K]: T
    }
K is the set of keys 
T is the value type for those keys.

K extends keyof any --> K must be a type that can be used as a key in TS, the valid obj Key are: string, number, symbol.

 * 
 */

// type ObjectOfKeys = {
//   [K in TemplateLiteralKey]: K extends `${string}Id` ? number : string
// };

type tests = [
  Expect<
    Equal<
      ObjectOfKeys,
      {
        userId: string;
        userName: string;
        postId: string;
        postName: string;
        commentId: string;
        commentName: string;
      }
    >
  >
];
