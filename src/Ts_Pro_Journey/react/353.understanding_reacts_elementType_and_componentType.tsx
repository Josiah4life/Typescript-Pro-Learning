import React, { type JSX } from 'react';

export type Example = React.ElementType<{
  autoPlay?: boolean;
}>;

/**
 * Component Type
 */

const FuncComponen = (props: { prop1: string }) => {
  return null;
};

class ClassComponent extends React.Component<{
  prop1: string;
}> {
  render(): React.ReactNode {
    this.props.prop1;
    return null;
  }
}

/**
 * Component Type.
 *
 * React.ComponentType<T> is A component that must accept props of type T. TS will validate this.
 */

type WrapperProps = {
  component: React.ComponentType<{ name: string }>;
};

// This means i expect a React component (function or class) that takes a prop name: string.
// Renaming the prop. to Pascal.
const Wrapper = ({ component: Component }: WrapperProps) => {
  return <Component name="Jacob" />;
};

// Equivalent to
const Wrapper1 = (props: WrapperProps) => {
  const Component = props.component;
  return <Component name="Gege" />;
};

const Greeting = ({ name }: { name: string }) => {
  return <h1>Hello, {name}</h1>;
};

<Wrapper component={Greeting} />;

const MyComponent: React.ComponentType<{ title: string }> = ({ title }) => (
  <h1>{title}</h1>
);

<MyComponent title="dd" />;

/**
 * ElementType.
 *
 * React.ElementType is a typescript type used when we're expecting a React component (element type)
 * but we don't care if it's a function component or an HTML tag.
 *
 * It can be built-in tags like "div", "button"
 * A fucntional component like "MyComponent"
 */

interface WrapperProps2 {
  component: React.ElementType;
  text: string;
}

const Wrapper3 = ({ component: Component, text }: WrapperProps2) => {
  return <Component>{text}</Component>;
};

const Title = ({ children }: { children: React.ReactNode }) => (
  <h1>{children}</h1>
);

<Wrapper3 text="I'm a paragraph" component="p" />;
<Wrapper3 component={Title} text="I'm a Title!" />;

const Button = ({ label, disabled }: { label: string; disabled?: boolean }) => {
  return <button disabled={disabled}>{label}</button>;
};

/**
 * `ButtonProps` uses `React.ComponentProps` to extract the props
 * from the `Button` component above. This is helpful when you want
 * to reuse or extend the props of an existing component without
 * manually redefining them.
 */

type ButtonProps = React.ComponentProps<typeof Button>;

/**
 * Now, `CustomButton` reuses `ButtonProps` without needing to
 * duplicate the prop definitions. This ensures consistency
 * and type-safety if `Button` ever changes.
 */
const CustomButton = (props: ButtonProps) => {
  return <Button {...props} />;
};

//Usage example
<CustomButton label="Click me" disabled={false} />;

type Bprop = Parameters<typeof Button>;
// Parameter gives his in tuple so we might need type Bprop = Parameters<typeof Button>[0] to extract.

//ADDITION ON COMPONENTTYPE

/**
interface WrapperProps {
  component: React.ComponentType;
  componentProps: any; // better to type this!
}

const Wrapper = ({ component: Component, componentProps }: WrapperProps) => {
  return <Component {...componentProps} />;

type MyComponentProps = { name: string };

const MyComponent: React.ComponentType<MyComponentProps> = ({ name }) => {
  return <p>Hello {name}</p>;
};


};
 */

//ADDITION ON ELEMENTTYPE

/**
interface WrapperProps {
  component: React.ElementType;
  children: React.ReactNode;
  [key: string]: any; // forward props
}

const Wrapper = ({ component: Component, children, ...props }: WrapperProps) => {
  return <Component {...props}>{children}</Component>;
};

<Wrapper component="a" href="https://google.com">
  Go to Google
</Wrapper>

 */
