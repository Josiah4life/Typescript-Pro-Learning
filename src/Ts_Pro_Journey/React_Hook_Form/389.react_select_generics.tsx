import ReactSelect from 'react-select';
import type { Equal, Expect } from '@total-typescript/helpers';

/**
 * 1. Try to figure out the types the props of the Select component should have, including the
 * generic types
 *
 * Here's a clue: ReactSelect export a type called 'Props'...
 */

export const Select: StateManagement = props => {
  return <ReactSelect {...props} />;
};

interface Option {
  id: number;
  label: string;
}

const guitarists: Option[] = [
  {
    id: 1,
    label: 'Jimi Hendrix',
  },
  {
    id: 2,
    label: 'JJ. cock',
  },
  {
    id: 3,
    label: 'Owolabi John',
  },
];

<>
  <Select
    options={guitarists}
    onChange={option => {
      type test = Expect<Equal<typeof option, Option | null>>;
    }}
  />

  <Select
    options={guitarists}
    isMulti
    onChange={option => {
      // tT should infer the type of option!
      // If isMulti is false, it should NOT be an array

      type test = Expect<Equal<typeof option, Option | null>>;
    }}
  />
</>;
