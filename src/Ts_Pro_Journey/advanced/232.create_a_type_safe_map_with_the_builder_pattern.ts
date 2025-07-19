import { expect, it } from 'vitest';

/**
 * In this problem, we need to type the return type of the set() method to make it addd keys to the
 * TMap generic.
 *
 * In the return type of the set(), we'll modify the TMap generic to add the new key/value pair.
 */

class TypeSafeStringMap<Tmap extends Record<string, string> = {}> {
  private map: Tmap;
  constructor() {
    this.map = {} as Tmap;
  }

  get(key: keyof Tmap): string | undefined {
    return this.map[key];
  }

  set<K extends string>(
    key: K,
    value: string
  ): TypeSafeStringMap<Tmap & Record<K, string>> {
    (this.map[key] as any) = value;

    return this;
  }

  //   set<K extends string>(
  //     key: K,
  //     value: string
  //   ): TypeSafeStringMap<Tmap & Record<K, string>> {
  //     const newMap = { ...this.map, [key]: value };
  //     const newInstance = new TypeSafeStringMap<Tmap & Record<K, string>>();
  //     newInstance.map = newMap as any;
  //     return newInstance;
  //   }
}

// type Example = keyof {} | keyof { matt: string } | keyof Record<string, string>;
const map = new TypeSafeStringMap()
  .set('matt', 'pocock')
  .set('jools', 'hooland')
  .set('brandi', 'carlile');

it('should not allow getting values which do not exist', () => {
  map.get(
    //@ts-expect-error
    'fe'
  );
});

it('should return values from keys which do exist', () => {
  expect(map.get('matt')).toBe('pocock');
  expect(map.get('jools')).toBe('hooland');
  expect(map.get('brandi')).toBe('carlile');
});
