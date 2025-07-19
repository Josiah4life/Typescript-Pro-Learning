import type { Equal, Expect } from '@total-typescript/helpers';

type Route =
  | {
      route: '/';
      search: {
        page: string;
        perPage: string;
      };
    }
  | {
      route: '/about';
    }
  | {
      route: '/admin';
    }
  | {
      route: '/admin/users';
    };

type tests = [
  Expect<
    Equal<
      RoutesObject01,
      {
        '/': {
          page: string;
          perPage: string;
        };
        '/about': never;
        '/admin': never;
        '/admin/users': never;
      }
    >
  >
];

type RoutesObject = {
  [K in Route as K['route']]: K extends { search: infer S } ? S : never;
};

type RoutesObject01 = {
  [K in Route as K['route']]: K extends { search: any } ? K['search'] : never;
};
