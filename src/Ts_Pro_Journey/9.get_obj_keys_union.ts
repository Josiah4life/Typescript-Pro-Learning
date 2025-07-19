import type { Expect, Equal } from "@total-typescript/helpers";

const testingFrameworks = {
  vitest: {
    label: "Vitest",
  },

  jest: {
    label: "Jest",
  },

  mocha: {
    label: "Mocha",
  },
} as const;

type TestingFrameworks = typeof testingFrameworks;
type a = keyof TestingFrameworks;
type labels = TestingFrameworks[keyof TestingFrameworks]["label"];

type tests = [Expect<Equal<a, "vitest" | "jest" | "mocha">>];
type testLabel = [Expect<Equal<labels, "Vitest" | "Jest" | "Mocha">>]; // Change the testingFrameworks to as const to fixed the value
