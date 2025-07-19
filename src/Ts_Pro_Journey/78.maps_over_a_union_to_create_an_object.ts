import type { Equal, Expect } from '@total-typescript/helpers';

type Route = '/' | '/about' | '/admin' | '/admin/users';

type RoutesObject = {
  [K in Route]: K;
};

type tests = [
  Expect<
    Equal<
      RoutesObject,
      {
        '/': '/';
        '/about': '/about';
        '/admin': '/admin';
        '/admin/users': '/admin/users';
      }
    >
  >
];

type RoutesObject01 = {
  [K in Route]: K extends `/${infer Rest}` ? Rest : K;
};
