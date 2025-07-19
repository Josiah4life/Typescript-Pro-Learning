import type { Expect, Equal } from '@total-typescript/helpers';

type ReturnwhatIpassIn<T> = T;

const returnWhatIPassIn = <T>(t: T): ReturnwhatIpassIn<T> => {
  return t;
};

// const returnWhatIPassIn = <T>(t: T):T => {
//     return t;
// }

// const returnWhatIPassIn = <T>(t: T) => {
//   return t;
// };

function returnWhatIPassIn01<T>(t: T) {
  return t;
}

// The <T> Means this type is generic and accept a type parameter named T. that will be determined based on what we pass to the function.
// So T is a placeholder for whatever type the user supplies at the call site.

const one = returnWhatIPassIn01(1);
const matt = returnWhatIPassIn('matt');

type test = [Expect<Equal<typeof one, 1>>, Expect<Equal<typeof one, 1>>];

const two = returnWhatIPassIn<1>;

type A = 1;
