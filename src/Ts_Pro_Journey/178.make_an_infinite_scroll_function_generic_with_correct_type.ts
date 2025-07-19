import type { Expect, Equal } from '@total-typescript/helpers';
import { expect, it } from 'vitest';

interface makeInfiniteScrollParams<TRow> {
  initialRows?: TRow[];
  fetchRows: () => Promise<TRow[]>;
  key: keyof TRow;
}

const makeInfiniteScroll = <Trow>(params: makeInfiniteScrollParams<Trow>) => {
  const data = params.initialRows || [];

  const scroll = async () => {
    const rows = await params.fetchRows();
    data.push(...rows);
  };

  return {
    scroll,
    getRows: () => data,
  };
};

it('should fetch more data when scrolling', async () => {
  const table = makeInfiniteScroll({
    key: 'id',
    fetchRows: () => Promise.resolve([{ id: 1, name: 'john' }]),
  });

  await table.scroll();
  await table.scroll();

  expect(table.getRows()).toEqual([
    {
      id: 1,
      name: 'john',
    },
    {
      id: 1,
      name: 'john',
    },
  ]);
});

it('should ensure that the key is one of the properties of the row', () => {
  const table = makeInfiniteScroll({
    // @ts-expect-error
    key: 'name',
    fetchRows: () => Promise.resolve([{ id: 1 }]),
  });
});

it('should allow you to pass initialRows', () => {
  const { getRows } = makeInfiniteScroll({
    key: 'id',
    initialRows: [
      {
        id: 1,
        name: 'John',
      },
    ],
    fetchRows: () => Promise.resolve([]),
  });

  const rows = getRows();

  expect(rows).toEqual([
    {
      id: 1,
      name: 'John',
    },
  ]);

  type tests = [
    Expect<Equal<typeof rows, Array<{ id: number; name: string }>>>
  ];
});
