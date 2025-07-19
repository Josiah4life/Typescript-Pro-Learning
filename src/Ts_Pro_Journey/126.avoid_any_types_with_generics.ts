import { it, expect } from 'vitest';
import type { Equal, Expect } from '@total-typescript/helpers';

const fetchData = async <T>(url: string): Promise<T> => {
  const data: T = await fetch(url).then(response => response.json());

  return data;
};

it('should fetch data from an API', async () => {
  const data = await fetchData<{ name: string }>(
    'https://swapi.dev/api/people/1'
  );

  expect(data.name).toEqual('Luke Skywalker');

  type tests = [Expect<Equal<typeof data, { name: string }>>];
});
