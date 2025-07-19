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
      search: {};
    }
  | {
      route: '/admin';
      search: {};
    }
  | {
      route: '/admin/users';
      search: {};
    };

// type Re_Route = {
//     [R in Route as R["route"]]: R["search"]
// }

/**
R in Route: loop over each member of the union

as R["route"]: use the route field as the key

R["search"]: use the search field as the value
     */

type RoutesObject = {
  [R in Route['route']]: Extract<Route, { route: R }>['search'];
};

type RoutesObject01 = {
  [R in Route as R['route']]: R['search'];
};

type tests = [
  Expect<
    Equal<
      RoutesObject,
      {
        '/': {
          page: string;
          perPage: string;
        };
        '/about': {};
        '/admin': {};
        '/admin/users': {};
      }
    >
  >
];

type test = {
  '/': { page: string; perPage: string };
  '/about': {};
  '/admin': {};
  '/admin/users': {};
};

type ReversedRoutes = {
  [K in keyof test]: { route: K; search: test[K] };
}[keyof test];
