import { useState } from 'react';
import type { Expect, Equal } from '@total-typescript/helpers';

/**
 * Here, we've got a hook that returns a tuple of [value, setValue].
 *
 * But if we hover over id and setId below, you'll see that they're both inferred as string | React.Dispatch<React.SetStateAction<string>>,
 * which is not ideal.
 *
 * 1. Find a way to fix the errors below.
 */

export const useId = (defaultId: string) => {
  const [id, setId] = useState(defaultId);

  return {
    id,
    setId,
  };
};

export const useId1 = (
  defaultId: string
): [string, React.Dispatch<React.SetStateAction<string>>] => {
  const [id, setId] = useState(defaultId);

  return [id, setId];
};

export const useId2 = (defaultId: string) => {
  const [id, setId] = useState(defaultId);

  return [id, setId] as const;
};

const [id, setId] = useId1('1');

type tests = [
  Expect<Equal<typeof id, string>>,
  Expect<Equal<typeof setId, React.Dispatch<React.SetStateAction<string>>>>
];
