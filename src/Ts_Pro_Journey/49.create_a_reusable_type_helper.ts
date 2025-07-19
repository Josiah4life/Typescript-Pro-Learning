import type { Equal, Expect } from "@total-typescript/helpers";

type CreateDataShape<TData, TError> = {
  data: TData;
  error: TError;
};

type tests = [
  Expect<
    Equal<
      CreateDataShape<string, TypeError>,
      {
        data: string;
        error: TypeError;
      }
    >
  >
];

function fetchUser(): CreateDataShape<{ id: number; name: string }, Error> {
  return {
    data: {
      id: 1,
      name: "Joyboy",
    },

    error: new Error("Something went wrong"),
  };
}

type Success<T> = { data: T; error: null };
type Failure<E> = { data: null; error: E };

type Result<T, E> = Success<T> | Failure<E>;

function fetchUserDetails(): Result<{ id: number; name: string }, Error> {
  const success = Math.random() > 0.5;
  if (success) {
    return {
      data: {
        id: 1,
        name: "Jacob",
      },
      error: null,
    };
  } else {
    return {
      data: null,
      error: new Error("Something went wrong"),
    };
  }
}

const result = fetchUserDetails();

if (result.error) {
  console.log(result.error.message);
} else {
  console.log("User: ", result.data.name);
}

//Another Example

type CreateDataShape01<TData, TError = undefined> = {
  data: TData;
  error: TError;
};

type Example = CreateDataShape01<number>;

// Another

type MaybeError = Error | undefined;
type CreateDataShape02<TData, TError extends MaybeError = undefined> = {
  data: TData;
  error: TError;
};

type Example01 = CreateDataShape02<number>;

// OR WE CAN USE DICRIMINANT.

/**
type Success<T> = { status: "success"; data: T };
type Failure<E> = { status: "error"; error: E };

type Result<T, E> = Success<T> | Failure<E>;

So this makes narrowing easier. 

if (result.status === "error") {
  console.log(result.error.message);
} else {
  console.log(result.data.name);
}
 */
