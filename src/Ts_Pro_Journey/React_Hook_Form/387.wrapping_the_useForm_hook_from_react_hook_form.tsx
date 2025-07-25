import {
  useForm,
  type DefaultValues,
  type FieldValues,
  type UseFormGetValues,
  type UseFormHandleSubmit,
  type UseFormRegister,
} from 'react-hook-form';
import type { Equal, Expect, Extends } from '@total-typescript/helpers';

/**
 * Here, we're creating a wrapper around react-hook-form's useForm hook.
 *
 * We want to change the API slightly so that only certain methods are exposed. We also want to
 * make sure that defaultValues is ALWAYS required.
 *
 * A clue: you'll need this line of code:
 *
 * defaultValues as DefaultValues<TValues>
 */

const useCustomForm = <TValues extends FieldValues>(
  defaultValues: TValues
): {
  register: UseFormRegister<TValues>;
  handleSubmit: UseFormHandleSubmit<TValues>;
  getValues: UseFormGetValues<TValues>;
} => {
  const form = useForm({
    defaultValues: defaultValues as DefaultValues<TValues>,
  });

  return {
    register: form.register,
    handleSubmit: form.handleSubmit,
    getValues: form.getValues,
  };
};

// ____ TESTS _______

// @ts-expect-error defaultValues is required.
useCustomForm();

useCustomForm(
  //@ts-expect-error defualtValues must be an object
  2
);

const customForm = useCustomForm({
  firstName: '',
  lastName: '',
});

customForm.handleSubmit(values => {
  type test = Expect<
    //Expext that inside handleSubmit, it's inferred as { firstName: string; lastName: string }
    Extends<
      {
        firstName: string;
        lastName: string;
      },
      typeof values
    >
  >;
});

// Expect that only the methods we want are exposed.

type test = Expect<
  Equal<keyof typeof customForm, 'register' | 'handleSubmit' | 'getValues'>
>;
