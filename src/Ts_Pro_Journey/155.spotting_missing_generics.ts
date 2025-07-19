import type { Equal, Expect } from '@total-typescript/helpers';

const getValue = <TObj, Tkey extends keyof TObj>(
  obj: TObj,
  key: Tkey
): TObj[Tkey] => {
  return obj[key];
};

const obj = {
  a: 1,
  b: 'some-string',
  c: true,
};

const numberResult = getValue(obj, 'a');
const stringResult = getValue(obj, 'b');
const booleanResult = getValue(obj, 'c');

type tests = [
  Expect<Equal<typeof numberResult, number>>,
  Expect<Equal<typeof stringResult, string>>,
  Expect<Equal<typeof booleanResult, boolean>>
];

// const setValue = <TObj, Tkey extends keyof TObj, Tval extends TObj[Tkey]>(
//   obj: TObj,
//   key: Tkey,
//   value: Tval
// ) => {
//   const oldObj = obj;
//   const newObj = {
//     ...oldObj,
//     [key]: value,
//   };

//   return newObj;
// };

const setValue = <TObj, TKey extends keyof TObj>(
  obj: TObj,
  key: TKey,
  value: TObj[TKey]
): TObj => {
  return {
    ...obj,
    [key]: value,
  };
};

// const setValue = <TObj, Tkey extends keyof TObj, >(obj: TObj, key: Tkey, value: TObj[Tkey]) => {

//   return obj[key] = value
// }
