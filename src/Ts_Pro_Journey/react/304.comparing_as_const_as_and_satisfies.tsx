import type { ComponentProps } from 'react';
import type { Expect, Equal } from '@total-typescript/helpers';
import React from 'react';

const buttonProps: ComponentProps<'button'> = {
  type: 'button',

  //This should be erroring! why isn't it?
  //@ts-expect-error
  illegalProperty: 'I AM ILLEGAL',
};

const buttonProps1 = {
  type: 'button',
  //This should be erroring! why isn't it?
  //@ts-expect-error
  illegalProperty: 'I AM ILLEGAL',
} as ComponentProps<'button'>;

const buttonProps2 = {
  type: 'button',
  //This should be erroring! why isn't it?
  //@ts-expect-error
  illegalProperty: 'I AM ILLEGAL',
} satisfies ComponentProps<'button'>;

<>
  <button {...buttonProps}>Click ME!</button>
</>;

const buttonPropsType = buttonProps2.type;

type test = Expect<Equal<typeof buttonPropsType, 'button'>>;
