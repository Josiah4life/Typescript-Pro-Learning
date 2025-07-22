import React, { type JSX } from 'react';

/**
 * Questions to answer:
 */

//1. What is the React namespace?
type Exmaple = React.ReactNode;
//

/**
 * 2. How come React can be used BOTH as a value and a type?
 *
 * HINT -- We're adding LOTS of things to React's namespace in later exercise, so make sure
 * when you go-to-defimition you go to its original definition, in @types/react/index.d.ts.
 */

const element = React.createElement('div');

export {};

/**
 * ReactNode is a TypeScript type that represent anything that can be rendered in JSX --- basically,
 * what can be put inside React Component or element.
 * It includes:
 *
 * strings("Hello")
 * numbers (42)
 * JSX (<div>Hello</div>)
 * fragments (<>...</>)
 * arrays of nodes ([<p>1</p>, <p>2</p>])
 * null, undefined, false (React will ignore these and render nothing)
 *
 */

/**
 *
 * JSX.Element.
 * Represents a React element created from JSX.
 * It is the return type if a component that returns JSX
 * Strict -- Only allow JSX-like objects.
 * Cannot be string, number, null, array etc.
 */

/**
 * React.ReactElement only takes a single JSX Element.
 */

const A = (children: React.ReactNode) => {
  return <div>{children}</div>;
};

//@ts-expect-error
<A>
  <p>This is a child</p>
  <strong>Another one</strong>
</A>;

A([<p>This is a child</p>, <strong>Another one</strong>]);

const B = ({ children }: { children: React.ReactNode }): JSX.Element => {
  return <div>{children}</div>;
};

<B>
  <p>This is a child</p>
  <strong>Another one</strong>
</B>;

<B>Text String Here</B>;

/**
 * FC stands for FunctionComponent or (React.FC)
 *
 * it's a type helper that gives our component proper type inference -- especially for children.
 *
 * One of the cons of "FC" is that it forces children to be optional which might not be what we
 * intended.
 */

const C: FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div>{children}</div>;
};

/**
 *
 * Also, "FC" automatically adds types for children, so we can do the below:
 */

const D: FC = ({ children }) => {
  return <div>{children}</div>;
};

//we can do this

const Card: React.FC = ({ children }) => {
  return <div className="card">{children}</div>;
};

// or Custom

interface ButtonProps {
  label: string;
}

const Button: FC<ButtonProps> = ({ label, children }) => {
  return (
    <button>
      {label} {children}
    </button>
  );
};

interface ButtonProps {
  label: string;
  children: React.ReactNode;
}

const Button1 = ({ label, children }: ButtonProps) => {
  return (
    <button>
      {label} {children}
    </button>
  );
};

//JSX.Element

const Mycomponent = (): JSX.Element => {
  return <div>Hello</div>;
};


//React.ReactElement

const Wrapper = ({children}: {children: React.ReactElement}) => {
    return <div className='box'>{children}</div>
}

//@ts-expect-error
<Wrapper>
    <div>
        
    </div>
    <div>

    </div>
</Wrapper>



const Wrapper1 = ({childre}: {childre: React.ReactElement}) => {
    return <div className='box'>{childre}</div>
}

<Wrapper1 childre={
    <span>

    </span>
    <p>
        
    </p>
}/>

const Spec: JSX.Element = {} as React.ReactElement
const Spec1: React.ReactElement = {} as JSX.Element


const Spetranet = () => {
    return 'Spectranet Cheat'
}