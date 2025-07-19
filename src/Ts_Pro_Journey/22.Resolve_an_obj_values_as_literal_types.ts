export const programModeEnumMap = {
  GROUP: "group",
  ANNOUNCEMENT: "announcement",
  ONE_ON_ONE: "1on1",
  SELF_DIRECTED: "selfDirected",
  PLANNED_ONE_ON_ONE: "planned1on1",
  PLANNED_SELF_DIRECTED: "plannedSelfDirected",
} as const;

/**
 * We can also use Object.freeze() But this only work for the first level ( the surface ) it doesn't go deeper like nested
 * cool: {
 *      mood: "frustrated"
 *  }
 *
 * the mood wont be fixed
 */

export type GroupProgram = (typeof programModeEnumMap)["GROUP"];
export type AnnouncementProgram = (typeof programModeEnumMap)["ANNOUNCEMENT"];
export type OneonOneProgram = (typeof programModeEnumMap)["ONE_ON_ONE"];
export type selfDirectedProgram = (typeof programModeEnumMap)["SELF_DIRECTED"];
export type PlannedOneOnOneProgram =
  (typeof programModeEnumMap)["PLANNED_ONE_ON_ONE"];
export type PlannedSelfDirected = (typeof programModeEnumMap)["SELF_DIRECTED"];

// programModeEnumMap.GROUP = "SomethingElse";  This wont work since we freeze the values
/**
 *  const arr = [1, 2, 3];
 * arr[0] = 123
 */
