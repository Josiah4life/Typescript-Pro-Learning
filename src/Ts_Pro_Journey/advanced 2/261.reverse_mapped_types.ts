import type { Expect, Equal } from '@total-typescript/helpers';

export function makeEventHandlers<TObj>(obj: {
  [K in keyof TObj]: (arg: K) => void;
}) {
  return obj;
}

const obj = makeEventHandlers({
  click: name => {
    console.log(name);

    type test = Expect<Equal<typeof name, 'click'>>;
  },
  focus: name => {
    console.log(name);

    type test = Expect<Equal<typeof name, 'focus'>>;
  },
});
