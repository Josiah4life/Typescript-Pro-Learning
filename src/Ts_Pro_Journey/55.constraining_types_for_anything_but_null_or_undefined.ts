export type Maybe<T extends {}> = T | null | undefined;

type tests = [
  //@ts-expect-error
  Maybe<null>,
  //@ts-expect-error
  Maybe<undefined>,

  Maybe<false>,
  Maybe<string>,
  Maybe<0>,
  Maybe<"">
];

// UNRELATED.

/**
type Result<T> = {
  data: T;
  error: string | null;
};

function handleResult<T>(result: Result<T>) {
  console.log("Data is:", result.data);
}

handleResult({ data: "hello", error: null });       // T = string
handleResult({ data: { id: 1 }, error: "Not found" }); // T = { id: number }
 */
