import type { Expect, Equal } from "@total-typescript/helpers";

const getUser = () => {
  return Promise.resolve({
    id: "123",
    name: "John",
    email: "john@example.com",
  });
};

type ReturnValue = Awaited<ReturnType<typeof getUser>>;

type tests = [
  Expect<Equal<ReturnValue, { id: string; name: string; email: string }>>
];

//This is promise chaining
//then runs when the promise resolves
getUser().then((user) => {
  console.log(user.name);
});

// Using Await Async
const run = async () => {
  const user = await getUser();
  console.log(user.email); // "john@example.com"
};

//
type UnwrapPromise<T> = T extends Promise<infer U> ? U : T;
