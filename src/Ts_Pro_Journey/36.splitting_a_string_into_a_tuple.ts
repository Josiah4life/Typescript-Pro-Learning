import type { Equal, Expect } from "@total-typescript/helpers";
import { S } from "ts-toolbelt";

type Path = "Users/John/Documents/notes.txt";

type SplitPath = S.Split<Path, "/">;

type tests = [
  Expect<Equal<SplitPath, ["Users", "John", "Documents", "notes.txt"]>>
];

// type SplitOnce<T> = T extends `${infer First}/${infer Rest}` ? [First, ...SplitOnce<Rest>] : [T]
// type SplitPath1 = SplitOnce<Path>;
