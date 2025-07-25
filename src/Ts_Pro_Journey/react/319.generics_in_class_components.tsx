import React from 'react';
import type { ReactNode } from 'react';
import type { Equal, Expect } from '@total-typescript/helpers';

interface TableProps<TRow> {
  rows: TRow[];
  renderRow: (row: TRow) => ReactNode;
}

export class Table<TRow> extends React.Component<TableProps<TRow>> {
  render(): ReactNode {
    return (
      <table>
        <tbody>
          {this.props.rows.map(row => (
            <tr>{this.props.renderRow(row)}</tr>
          ))}
        </tbody>
      </table>
    );
  }
}

const data = [
  {
    id: 1,
    name: 'John',
  },
];

export const Parent = () => {
  return (
    <div>
      <Table rows={data} renderRow={row => <td>{row.name}</td>} />
      <Table
        rows={data}
        renderRow={row => {
          type test = Expect<Equal<typeof row, { id: number; name: string }>>;
          return <td></td>;
        }}
      />
    </div>
  );
};
