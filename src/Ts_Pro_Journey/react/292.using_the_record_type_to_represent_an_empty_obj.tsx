import React from 'react';

type variantModalProps =
  | {
      variant: 'no-title';
    }
  | {
      variant: 'title';
      title: string;
    };
type ModalProps = variantModalProps & {
  buttonColor: string;
};

export const Modal = (props: ModalProps) => {
  if (props.variant === 'no-title') {
    return (
      <div>
        <span>No title</span>
        <button
          style={{
            backgroundColor: props.buttonColor,
          }}
        >
          Click Me
        </button>
      </div>
    );
  } else {
    return (
      <div>
        <span>Title: {props.title}</span>
        <button
          style={{
            backgroundColor: props.buttonColor,
          }}
        >
          Click Me
        </button>
      </div>
    );
  }
};

export const Test = () => {
  return (
    <div>
      {/* @ts-expect_error */}
      <Modal buttonColor="red" />
      <Modal
        variant="no-title"
        //@ts-expect-error
        title="Hello"
        buttonColor="red"
      />
      <Modal variant="title" title="Hello" buttonColor="red" />
    </div>
  );
};
