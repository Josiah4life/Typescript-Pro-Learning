import React from 'react';

type ModalProps =
  | {
      variant: 'no-title';
    }
  | {
      variant: 'title';
      title: string;
    };

export const Modal = ({ variant, ...props }: ModalProps) => {
  if (variant === 'no-title') {
    return <div>No title</div>;
  } else if ('title' in props) {
    return <div>Title: {props.title}</div>;
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
