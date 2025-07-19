import type { Equal, Expect } from "@total-typescript/helpers";

const makeQuery = (
  url: string,
  opts?: {
    method?: string;
    headers?: {
      [key: string]: string;
    };
    body?: string;
  }
) => {};

type Query = typeof makeQuery;
type MakeQueryParameters = Parameters<Query>;
type MakeQueryParametersSecondArgument = MakeQueryParameters[1];

type test = [
  Expect<
    Equal<
      MakeQueryParameters,
      [
        url: string,
        opts?: {
          method?: string;
          headers?: {
            [key: string]: string;
          };
          body?: string;
        }
      ]
    >
  >
];

// const makeQuery = (
//   url: string,
//   opts?: {
//     method?: string;
//     headers?: { [key: string]: string };
//     body?: string;
//   }
// ) => {
//   return fetch(url, {
//     method: opts?.method ?? 'GET',
//     headers: opts?.headers,
//     body: opts?.body,
//   });
// };

// makeQuery("https://api.example.com/data", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json"
//   },
//   body: JSON.stringify({ name: "TechSage" })
// });
