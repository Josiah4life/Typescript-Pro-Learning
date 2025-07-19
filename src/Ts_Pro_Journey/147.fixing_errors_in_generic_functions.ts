import type { Expect, Equal } from '@total-typescript/helpers';

type person = {
  name: string;
  age: number;
  birthdate: Date;
};

export function remapPerson<Key extends keyof person>(
  key: Key,
  value: person[Key]
): person[Key] {
  if (key === 'birthdate') {
    return new Date() as person[Key];
  }

  return value;
}

export function remapPerson01<Key extends keyof person>(
  key: Key,
  value: person[Key]
): Key extends 'birthdate' ? Date : person[Key] {
  if (key === 'birthdate') {
    return new Date() as any;
  }

  return value as any;
}

// FUNCTION OVERLOAD BELOW

// function remapPerson(key: 'birthdate', value: Date): Date;
// function remapPerson<Key extends Exclude<keyof person, 'birthdate'>>(
//   key: Key,
//   value: person[Key]
// ): person[Key];
// function remapPerson(key: any, value: any) {
//   if (key === 'birthdate') {
//     return new Date();
//   }
//   return value;
// }

const a = remapPerson('name', 'Jboy');

type tests = [Expect<Equal<typeof a, string>>];
