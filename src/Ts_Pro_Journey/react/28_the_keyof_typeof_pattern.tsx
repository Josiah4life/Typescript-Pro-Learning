import type { Equal, Expect } from '@total-typescript/helpers';
import React from 'react';

interface TableProps {
  renderRow: (index: number) => React.ReactNode;
}

// interface TableProps {
//   name: string;
// }

interface TableProps1 {
  renderRow: React.FC<number>;
}

const Table = (props: TableProps) => {
  const component: React.ReactNode = <div />;
  return (
    <div>
      {component}
      {[0, 1, 3].map(props.renderRow)}
    </div>
  );
};

export const Parent = () => {
  return (
    <>
      <Table
        renderRow={index => {
          type test = Expect<Equal<typeof index, number>>;
          return <div key={index}>{index}</div>;
        }}
      />
      <Table
        renderRow={() => {
          return null;
        }}
      />

      <Table
        //@ts-expect-error
        renderRow={<div></div>}
      />

      <Table
        renderRow={index => {
          return index;
        }}
      />
    </>
  );
};

type MyComponentProps = {
  children: React.ReactNode;
};

const MyComponent = ({ children }: MyComponentProps) => {
  return <div>{children}</div>;
};

<>
  <MyComponent>
    <h1>Hello</h1>
  </MyComponent>
</>;
