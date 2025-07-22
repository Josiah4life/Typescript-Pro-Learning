/**
 * 1. What's the difference between JSX.element, React.ReactNode and ReactElement ?
 *
 * CMD-Click each of them to understand the difference.
 */

import type { JSX } from 'react';
import React from 'react';

type ClickMe = React.ReactElement;
type ClickMeToo = JSX.Element;
type ClickeThree = React.ReactNode;

/**
 * 2. what is the return type of this Component?
 */

const Component = () => {
  return <div>Hello World</div>;
};

/**
 * 3. Fun fact - This might break your IDE! In TypeScript 5.0, this wouldn't work. But in TypeScript
 * 5.1, it DOES work.
 *
 * If it's not working for you, try making your IDE use the workspace version of TypeScript.
 *
 * https://stackoverflow.com/questions/39668731/what-typescript-version-is-visual-studio-code-using-how-to-update-it
 *
 */

const Component2 = (): React.ReactNode => {
  return <div></div>;
};

<>
  <Component2 />
</>;
