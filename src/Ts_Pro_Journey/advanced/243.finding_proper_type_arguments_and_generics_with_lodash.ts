import _ from 'lodash';
import { expect, it } from 'vitest';
import type { Expect, Equal, doNotExecute } from '@total-typescript/helpers';

/**
 * We've made a resuable function here to group arrays of objects by age. I want you to:
 *
 * 1. Make sure that the errors (below) disapper
 * 2. Take a look at the typings for _.groupBy to see if you can understand them.
 */

const groupByAge =<T extends {age: number}> (array: T[]) => {
  const grouped = _.groupBy(array, 'age');

  return grouped;
};

const result = groupByAge([
  {
    name: 'John',
    age: 20,
  },
  {
    name: 'Jane',
    age: 20,
  },
  {
    name: 'Mary',
    age: 30,
  },
]);

it('should group the items by age', () => {
  expect(result).toEqual({
    20: [
      {
        name: 'John',
        age: 20,
      },
      {
        name: 'Jane',
        age: 20,
      },
    ],
    30: [
      {
        name: 'Mary',
        age: 30,
      },
    ],
  });

  type tests = [
    Expect<Equal<typeof result, _.Dictionary<{ name: string; age: number }[]>>>
  ];
});

it('should not let you pass in an array of objects NOT containing age', () => {
  doNotExecute(() => {
    groupByAge([
      {
        //@ts-expect-error
        name: 'John',
      },
      {
        //@ts-expect-error
        name: 'Bill',
      },
    ]);
  });
});



// A dictionary in TypeScript is a kind of object, but not all objects are dictionaries.
// Object is any non-primitive value that can have key-value pairs.

const user = {
  name: 'Alice',
  age: 23,
};

// Thi s is an object with known, fixed keys {name, age}

// A dictionary is an object where the keys are dynamic or unknown in advance, and all values share the same type.
const scores: { [key: string]: number } = {
  alice: 90,
  bob: 75,
  carol: 88,
};

//Here:
// The keys (alice, bob, carol) are not declared in advance.
// All values are of the same type (number).

type here = {
  [key: string]: string;
  name: string;
};

// Example 1: Array of Dictionary-style objects

const data: { [key: string]: number }[] = [
  { apples: 5, oranges: 10 },
  { bananas: 7, pineapples: 2 },
];

/**
 * An array
 * each item is an object
 * each object is a dictionary of keys are strings, values are numbers.
 */

type DictionaryObject = { [key: string]: number };
const data1: DictionaryObject[] = [ ... ];


// Example 2: Array of fixed-shape objects inside a dictionary above / a.k.a Array of dictionary Object. 

//OR Below Dictionary of array of objects. 

const usersByRole = {
  admin: [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
  ],
  user: [
    { id: 3, name: "Carol" },
  ],
};

//TYPE

type User = { id: number; name: string };
type UsersByRole = {
  [role: string]: User[];
};


type DictOfObjectArrays = {
  [key: string]: object[];
};



// const abc = (aa: object[]) => {
// return aa
// }

// abc([{
//     rr: "fse",
//     name: "fes",
//     age: "fesf",
//     here: "fsf"
// },

// {
//     name: "efw",
//     where: 20
// },
// ])
