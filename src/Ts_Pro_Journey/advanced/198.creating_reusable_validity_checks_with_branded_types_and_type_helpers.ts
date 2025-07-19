import { it } from 'vitest';
import type { Brand } from './brand';

type Valid<T> = Brand<T, 'valid'>;

interface PasswordValues {
  password: string;
  confirmPassword: string;
}

const validatedPassword = (
  values: PasswordValues
): Valid<PasswordValues> | Error => {
  if (values.password.length < 8) {
    return new Error('Password too short');
  }

  if (values.password !== values.confirmPassword) {
    return new Error('Passwords do not match');
  }
  return values as Valid<PasswordValues>;
};

const createUserOnApi = (values: Valid<PasswordValues>) => {
  // Imagine this function creates the user on the API
};

it('should fail if you do not validate the values before calling createUserOnApi', () => {
  const onSubmitHandler = (values: PasswordValues) => {
    // @ts-expect-error
    createUserOnApi(values);
  };
});

it('should succeed if you DO validate the values before calling createUseOnApi', () => {
  const onSubmitHandler = (values: PasswordValues) => {
    const validatedValues = validatedPassword(values);

    if (validatedValues instanceof Error) {
      return;
    }
    createUserOnApi(validatedValues);
  };
});
