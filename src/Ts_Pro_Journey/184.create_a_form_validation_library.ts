import type { Equal, Expect } from '@total-typescript/helpers';
import { expect, it } from 'vitest';

// type Validator = {
//   [key: string]: (value: string) => string | undefined;
// };

// type valid = Record<string, (value: string) => undefined | string>;

const makeFormValidationFactory =
  <Tvalidator extends string>(
    validators: Record<Tvalidator, (value: string) => string | void>
  ) =>
  <TObjKeys extends string>(config: Record<TObjKeys, Array<Tvalidator>>) => {
    return (values: Record<TObjKeys, string>) => {
      const errors = {} as Record<TObjKeys, string | undefined>;

      for (const key in config) {
        for (const validator of config[key]) {
          const error = validators[validator](values[key]);
          if (error) {
            errors[key] = error;
            break;
          }
        }
      }

      return errors;
    };
  };

const createFormValidator = makeFormValidationFactory({
  required: value => {
    if (value === '') {
      return 'Required';
    }
  },

  minlength: value => {
    if (value.length < 5) {
      return 'Minimum length is 5';
    }
  },

  email: value => {
    if (!value.includes('@')) {
      return 'Invalid email';
    }
  },
});

const validateUser = createFormValidator({
  id: ['required'],
  username: ['required', 'minlength'],
  email: ['required', 'email'],
});

it('should properly validate a user', () => {
  const errors = validateUser({
    id: '1',
    username: 'john',
    email: 'Blah',
  });

  expect(errors).toEqual({
    username: 'Minimum length is 5',
    email: 'Invalid email',
  });

  type test = Expect<
    Equal<
      typeof errors,
      {
        id: string | undefined;
        username: string | undefined;
        email: string | undefined;
      }
    >
  >;
});
