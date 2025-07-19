import React from 'react';

const Component = (props: { config: {} }) => {
  return <div />;
};

/**
 * Why can i pass _anything_ to config?
 */

<>
  <Component
    config={{
      foo: 'bar',
      whatever: {},
    }}
  />
</>;
