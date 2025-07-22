/**
 * The 'as' prop is notorious for being difficult to type correctly.
 *
 * Here, we've created a component that takes an 'as' prop. The 'as' prop is a string representing the
 * HTML tag to render. The component will render that tag, and pass all the other props through.
 *
 * BUT currently the types of the props that go along with the 'as' prop are not inferred correctly.
 *
 * I've found two solutions. The first uses an IIMT:
 *
 * The second uses a generic type.
 *
 * Both solutions make use of:
 *
 * - JSX.IntrinsicElements
 * - keyof
 * - 'as'
 * - Indexed access types.
 */

import type { Equal, Expect } from '@total-typescript/helpers';

export const Wrapper = (props: any) => {
  const Comp = props.as;
  return <Comp {...(props as any)}></Comp>;
};

/**
 * Should work specifying a 'button'
 */

const Example1 = () => {
  return (
    <>
      <Wrapper
        as=""
        // @ts-expect-error doesNotExist is not a valid Prop
        doesNotExist
      ></Wrapper>
      <Wrapper
        as="button"
        // e should be inferred correctly.
        onClick={e => {
          type test = Expect<
            Equal<typeof e, React.MouseEvent<HTMLButtonElement>>
          >;
        }}
      ></Wrapper>
    </>
  );
};
