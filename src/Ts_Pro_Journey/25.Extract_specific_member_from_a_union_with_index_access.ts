import type { Equal, Expect } from "@total-typescript/helpers";

export const programModeEnumMap = {
  GROUP: "group",
  ANNOUNCEMENT: "announcement",
  ONE_ON_ONE: "1on1",
  SELF_DIRECTED: "selfDirected",
  PLANNED_ONE_ON_ONE: "planned1on1",
  PLANNED_SELF_DIRECTED: "plannedSelfDirected",
} as const;

export type IndividualProgram = (typeof programModeEnumMap)[Exclude<
  keyof typeof programModeEnumMap,
  "GROUP" | "ANNOUNCEMENT"
>];

type tests = Expect<
  Equal<
    IndividualProgram,
    "1on1" | "selfDirected" | "planned1on1" | "plannedSelfDirected"
  >
>;

/**
 * OR
 */

export type IndividualProgram02 = (typeof programModeEnumMap)[
  | "ONE_ON_ONE"
  | "SELF_DIRECTED"
  | "PLANNED_ONE_ON_ONE"
  | "PLANNED_SELF_DIRECTED"];

type tests02 = Expect<
  Equal<
    IndividualProgram02,
    "1on1" | "selfDirected" | "planned1on1" | "plannedSelfDirected"
  >
>;
