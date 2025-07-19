import { describe, it, expect } from 'vitest';
import type { Brand } from './brand';

type Password = Brand<string, 'Password'>;
type Email = Brand<string, 'Email'>;

export const validateValues = (values: { email: string; password: string }) => {
  if (!values.email.includes('@')) {
    throw new Error('Email invalid');
  }
  if (values.password.length < 8) {
    throw new Error('Password not long enough');
  }

  return {
    email: values.email as Email,
    password: values.password as Password,
  };
};

const createUserOnApi = (values: { email: Email; password: Password }) => {
  // Imagine this function create the user on the API
};

const onSubmitHandler = (values: { email: string; password: string }) => {
  const validatedValues = validateValues(values);

  //How do we stop this erroring?
  createUserOnApi(validatedValues);
};

describe('onSubmitHandler', () => {
  it('should error if the email is invalid', () => {
    expect(() => {
      onSubmitHandler({
        email: 'invalid',
        password: '12345678',
      });
    }).toThrowError('Email invalid');
  });

  it('should error if password is too short', () => {
    expect(() => {
      onSubmitHandler({
        email: 'invalid@gmail.com',
        password: '12347',
      });
    }).toThrowError('Password is noy long enough');
  });

  it('should error if password is too short', () => {
    expect(() => {
      onSubmitHandler({
        email: 'invalid@gmail.com',
        password: '12347',
      });
    }).toThrowError('Email invalid');
  });
});
