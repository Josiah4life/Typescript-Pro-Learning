import type { Equal, Expect } from '@total-typescript/helpers';
import type { ComponentProps, ElementType, JSX } from 'react';

// type WrapperShape =
//   | ({
//       as: 'div';
//     } & ComponentProps<'div'>)
//   | ({
//       as: 'button';
//     } & ComponentProps<'button'>);

type WrapperProps = {
  [Element in keyof JSX.IntrinsicElements]: {
    as: Element;
  } & ComponentProps<Element>;
}[keyof JSX.IntrinsicElements];

export const Wrapper = (props: WrapperProps) => {
  const Comp = props.as;
  return <Comp {...(props as any)}></Comp>;
};

const Example1 = () => {
  return (
    <>
      <Wrapper
        as="body"
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

export const Wrapper1 = <TAs extends keyof JSX.IntrinsicElements>(
  props: {
    as: TAs;
  } & React.ComponentProps<TAs>
) => {
  const Comp = props.as;
  return <Comp {...(props as any)}></Comp>;
};

export const Wrapper2 = <TAs extends keyof JSX.ElementType>(
  props: {
    as: TAs;
  } & React.ComponentPropsWithoutRef<TAs>
) => {
  const Comp = props.as as string;

  return <Comp {...(props as any)}></Comp>;
};

export const Wrapper3 = <TAs extends ElementType = 'a'>(
  props: {
    as?: TAs;
  } & React.ComponentPropsWithoutRef<
    // If TAs is the default, pass it 'a' instead
    ElementType extends TAs ? 'a' : TAs
    // But if TAs has a value that isn't the default, pass it that/
  >
) => {
  const { as: Comp = 'a', ...rest } = props;
  return <Comp {...rest}></Comp>;
};

/**
 * Should work specifying a 'button'
 */

// const Example1 = () => {
//     return (
//         <>
//             <Wrapper
//                 as="button"
//         </>
//     )
// }
