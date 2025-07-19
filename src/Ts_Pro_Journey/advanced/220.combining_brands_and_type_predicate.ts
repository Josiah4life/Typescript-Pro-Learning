import { it } from 'vitest';
import type { Brand } from './brand';

type Valid<T> = Brand<T, 'Valid'>;

interface PasswordValues {
  password: string;
  confirmPassword: string;
}

/**
 *
 * You'll need to change this function...
 */

const isValidPassword = (
  values: PasswordValues
): values is Valid<PasswordValues> => {
  if (values.password !== values.confirmPassword) {
    return false;
  }

  return true;
};

const createUserOnApi = (values: Valid<PasswordValues>) => {
  //Imagine this function creates the user on the API
};

it('should fail if you do not validate the values before calling createUserOnApi', () => {
  const onSubmitHandler = (values: PasswordValues) => {
    // @ts-expect-error
    createUserOnApi(values);
  };
});

it('should succeed if you DO validate the values beofe calling createUserOnApi', () => {
  const onSubmitHandler = (values: PasswordValues) => {
    if (isValidPassword(values)) {
      createUserOnApi(values);
    }
  };
});
