import React from 'react';

const classNameMap = {
  primary: 'bg-blue-500 text-white',
  secondary: 'bg-gray-200 text-black',
  success: 'bg-green-500 text-white',
};

type Example = keyof typeof classNameMap;

/**
 * By Using 'typeof' and 'keyof', we can _derive_ the type of variant from the classNames object.
 *
 * 1. Try adding a new key to classNamesMap, and see how the type of variant automatically updates.
 */

type ButtonProps = {
  variant: 'primary' | 'secondary' | 'success';
};

type ModalProps =
  | {
      variant: 'no-title';
    }
  | {
      variant: 'title';
      title: string;
    };

export const Modal = ({ variant, title }: ModalProps) => {
  if (variant === 'no-title') {
    return <div>No title</div>;
  } else {
    return <div>Title: {title}</div>;
  }
};

export const Test = () => {
  return (
    <div>
      <Modal variant="title" title="Hello" />
      <Modal variant="no-title" />
    </div>
  );
};
