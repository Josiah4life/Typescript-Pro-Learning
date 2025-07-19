import type { Expect, Equal } from "@total-typescript/helpers";

const getServerSideProps = async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/todos");
  const json: { title: string } = await data.json();

  return {
    props: {
      json,
    },
  };
};

type InferPropsFromServerSideFunction02<
  T extends (...args: any) => Promise<any>
> = T extends (...args: any[]) => Promise<{ [K in keyof any]: infer Props }>
  ? Props
  : never;
type InferPropsFromServerSideFunction01<T extends (...args: any) => any> =
  Awaited<ReturnType<T>>["props"];
type InferPropsFromServerSideFunction<T extends (...args: any) => any> =
  T extends (...args: any[]) => Promise<{ props: infer Props }> ? Props : never;

type tests = [
  Expect<
    Equal<
      InferPropsFromServerSideFunction<typeof getServerSideProps>,
      { json: { title: string } }
    >
  >
];
