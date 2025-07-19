import type { ReactNode } from 'react';
import React from 'react';
import type { Equal, Expect } from '@total-typescript/helpers';

interface TableProps<T> {
  rows: T[];
  renderRow: (row: T) => ReactNode;
}

// type Example = TableProps<{ id: string; name: number }>;

// type Example1 = Example['rows'];

// const a = (prop: Example) => {
//   return {
//     prop,
//   };
// };

// a({rows: [{
//     id: 12,
//     name: "ed"
// }]})

export const Table = <T,>(props: TableProps<T>) => {
  return (
    <table>
      <tbody>
        {props.rows.map(row => (
          <tr>
            <tr>{props.renderRow(row)}</tr>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

interface User {
  id: number;
  name: string;
  age: number;
}

<>
  <Table<User>
    //@ts-expect-error rows should be User[]
    rows={[1, 2, 3]}
    renderRow={row => {
      type test = Expect<Equal<typeof row, User>>;
      return <td>{row.name}</td>;
    }}
  />

  <Table<User>
    rows={[
      {
        id: 1,
        name: 'John',
        age: 30,
      },
      {
        // @ts-expect-error id should be a string
        id: '2',
        name: 'Jane',
        age: 30,
      },
    ]}
    renderRow={row => {
      type test = Expect<Equal<typeof row, User>>;
      return <td>{row.name}</td>;
    }}
  />
</>;
