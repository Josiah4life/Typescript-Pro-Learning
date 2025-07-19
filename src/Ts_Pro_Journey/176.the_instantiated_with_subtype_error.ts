import type { Equal, Expect } from '@total-typescript/helpers';

const obj = {
  a: 1,
  b: 2,
  c: 3,
} as const;

type ObjKey = keyof typeof obj;

function getObjValue(): (typeof obj)['a'];
function getObjValue<Tkey extends ObjKey>(key: Tkey): (typeof obj)[Tkey];
function getObjValue(key: ObjKey = 'a') {
  return obj[key];
}

// function getObjValue<Tkey extends ObjKey>(key: Tkey = "a"){
//     return obj[key]
// }

// getObjValue<"b" | "c">("a")

/**
const getObjValue = <Tkey extends ObjKey = 'a'>(key?: Tkey) => {
  const actualKey = (key ?? 'a') as Tkey;
  return obj[actualKey];
};
 */

const one = getObjValue('a');
const oneByDefault = getObjValue();
const two = getObjValue('b');
const three = getObjValue('c');

type tests = [
  Expect<Equal<typeof one, 1>>,
  Expect<Equal<typeof oneByDefault, 1>>,
  Expect<Equal<typeof two, 2>>,
  Expect<Equal<typeof three, 3>>
];
