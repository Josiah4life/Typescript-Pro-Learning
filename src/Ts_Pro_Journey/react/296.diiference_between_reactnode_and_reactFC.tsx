import React, { type ChangeEventHandler } from 'react';

type InputProps = (
  | {
      value: string;
      onChange: ChangeEventHandler;
    }
  | {
      value?: undefined;
      onChange?: undefined;
    }
) & {
  label: string;
};

export const Input = ({ label, ...props }: InputProps) => {
  return (
    <div>
      <label>
        {label}
        <input {...props} />
      </label>
    </div>
  );
};

export const Test = () => {
  return (
    <div>
      <Input label="Greeting" value="Hello" onChange={() => {}} />
      <Input label="Greeting" />

      {/* @ts-expect-error */}
      <Input label="Greeting" value="Hello" />

      {/* @ts-expect-error */}
      <Input label="Greeting" onChange={() => {}} />
    </div>
  );
};

// --------------------------------------------------------------------------------  //

type AllorNothing<T extends object> = T | ToUndefinedObject<T>;

type ToUndefinedObject<T> = Partial<Record<keyof T, undefined>>;

type Example = ToUndefinedObject<{
  value: string;
  onChange: ChangeEventHandler;
}>;

type Result = AllorNothing<{
  value: string;
  onChange: ChangeEventHandler;
}>;

type InputProps1 = AllorNothing<{
  value: string;
  onChange: ChangeEventHandler;
}> & {
  label: string;
};

type test = [
  //@ts-expect-error
  AllorNothing<string>,

  //@ts-expect-error
  AllorNothing<number>,

  //@ts-expect-error
  AllorNothing<undefined>
];
