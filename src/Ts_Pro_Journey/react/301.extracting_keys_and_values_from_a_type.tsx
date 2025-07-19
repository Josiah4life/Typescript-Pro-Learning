import React from 'react';

const presetSizes = {
  xs: '0.5rem',
  sm: '1rem',
};
type Size = keyof typeof presetSizes;

type LooseSize = Size | (string & {});

export const Icon = (props: { size: LooseSize }) => {
  return (
    <div
      style={{
        width:
          props.size in presetSizes
            ? presetSizes[
                /**
                 * The 'as' is neccessary here because TS can't narrow prop.size to Size properly.
                 */
                props.size as Size
              ]
            : props.size,
      }}
    ></div>
  );
};

<>
  {/* Autocomplete for sm and xs are no longer working */}
  {/* We want to have autocomplete for the 'size' while still being able to pass any valeu. */}

  {/* 1. Try to find a way to express the type LooseSize in a way that gices autocomplete for sm and xs */}
  {/* while also letting the user pasa any value. */}
  <Icon size="sm"></Icon>
  <Icon size="xs"></Icon>
  <Icon size="10px"></Icon>
</>;
