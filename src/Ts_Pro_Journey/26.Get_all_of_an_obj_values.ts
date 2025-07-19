import type { Equal, Expect } from "@total-typescript/helpers";

const frontendToBackend = {
  singleModule: "SINGLE_MODULE",
  multiModule: "MULTI_MODULE",
  sharedModule: "SHARED_MODULE",
} as const;

type BackendModuleEnum =
  (typeof frontendToBackend)[keyof typeof frontendToBackend];

type tests = Expect<
  Equal<BackendModuleEnum, "SINGLE_MODULE" | "MULTI_MODULE" | "SHARED_MODULE">
>;
