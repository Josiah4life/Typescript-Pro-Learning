import { it } from 'vitest';
import type { Brand } from './brand';

type Valid<T> = Brand<T, 'Valid'>;

interface PasswordValues {
  password: string;
  confirmPassword: string;
}

/**
 * You'll need to change this function...
 */

function assertIsValidPassword(
  values: PasswordValues
): asserts values is Valid<PasswordValues> {
  if (values.password !== values.confirmPassword) {
    throw new Error('Password is invalid');
  }
}

const createUserOnApi = (values: Valid<PasswordValues>) => {
  // Imagine this function creates the user on the API
};

it('should fail if you do not validate the passwords before calling createUserOnApi', () => {
  const onSubmitHandler = (values: PasswordValues) => {
    //@ts-expect-error
    createUserOnApi(values);
  };
});

it('should succeed if you DO validate the passwords before calling createUserApi', () => {
  const onSubmitHandler = (values: PasswordValues) => {
    assertIsValidPassword(values);

    //
  };
});
