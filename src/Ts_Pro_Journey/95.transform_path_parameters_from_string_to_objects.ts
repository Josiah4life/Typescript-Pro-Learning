import type { Equal, Expect } from '@total-typescript/helpers';
import { S } from 'ts-toolbelt';

type UserPath = '/users/:id';
type UserOrgnanizationPath = '/users/:id/organizations/:organizationId';

type ExtractedParams<Tpath extends string> = {
  [K in S.Split<Tpath, '/'>[number] as K extends `:${infer P}`
    ? P
    : never]: string;
};

type tests = [
  Expect<Equal<ExtractedParams<UserPath>, { id: string }>>,
  Expect<
    Equal<
      ExtractedParams<UserOrgnanizationPath>,
      { id: string; organizationId: string }
    >
  >
];

// type ExtractedParams<T extends string> =
//   T extends `${string}:${infer Param}/${infer Rest}`
//     ? { [K in Param]: string } & ExtractedParams<`/${Rest}`>
//     : T extends `${string}:${infer Param}`
//       ? { [K in Param]: string }
//       : {};
