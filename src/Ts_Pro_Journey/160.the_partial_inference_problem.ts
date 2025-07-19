import type { Equal, Expect } from '@total-typescript/helpers';

export const makeSelectors = <
  TSource,
  TSelectors extends Record<string, (source: TSource) => any> = {}
>(
  selectors: TSelectors
) => {
  return selectors;
};

interface Source {
  firstName: string;
  middleName: string;
  lastName: string;
}

/**
 * We've got a problem here. We want to be able to infer the type of the selectors object from what we passed in to the makeSelectors.
 *
 * But we can't, As soon as we pass ONE type argument, inference doesn't work on the other type arguments.
 * We want to refactor this so that we can infer the type of the selector object.
 *
 * Desired API:
 *
 * makeSelector<Source>()({...selectorsGoHere})
 */

const selectors = makeSelectors<Source>()({
  getFullName: source =>
    `${source.firstName} ${source.middleName} ${source.lastName}`,
  getFirstAndLastName: source => `${source.firstName} ${source.lastName}`,
  getFirstNameLength: source => source.firstName.length,
  getDisplayName: source => `${source.firstName}_${source.lastName}`,
});

const user = { firstName: 'Jo', lastName: 'Doe', middleName: 'X' };

const fullName = selectors.getFullName(user);

type tests = [
  Expect<Equal<(typeof selectors)['getFullName'], (source: Source) => string>>,
  Expect<
    Equal<(typeof selectors)['getFirstAndLastName'], (source: Source) => string>
  >,
  Expect<
    Equal<(typeof selectors)['getFirstNameLength'], (source: Source) => number>
  >
];

// export const makeSelectors01 = <TSource>() => <TSelectors extends Record<string, (source: TSource) => any>>(selectors: TSelectors): TSelectors => {
//   return selectors;
// }

export const makeSelectors01 =
  <TSource = 'makeselectors expects to be passed a type argument'>() =>
  <TSelectors extends Record<string, (source: TSource) => any>>(
    selectors: TSelectors
  ) =>
    selectors;
