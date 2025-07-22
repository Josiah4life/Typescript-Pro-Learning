import type { Equal, Expect } from '@total-typescript/helpers';
import { type FieldValues, useForm } from 'react-hook-form';

/**
 * 1. When you provide default values to useForm, the return type of getValues get inferred as the
 * shape of those values.
 *
 * Investigate why this is, and what TFieldValues is being used for.
 */

const Example1 = () => {
  const form = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
    },
  });

  return (
    <form
      onSubmit={form.handleSubmit(values => {
        type test = Expect<
          Equal<typeof values, { firstName: string; lastName: string }>
        >;
      })}
    >
      <input {...form.register('firstName')} />
      <input {...form.register('lastName')} />
    </form>
  );
};

/**
 *
 * Understand what happens when the default values is not provided.
 */

const Example2 = () => {
  const form = useForm();

  return (
    <form
      onSubmit={form.handleSubmit(values => {
        type test = Expect<Equal<typeof values, FieldValues>>;
      })}
    >
      <input {...form.register('firstName')} />
      <input {...form.register('lastName')} />
    </form>
  );
};

type FormValues = {
  firstName: string;
  lastName: string;
};

/**
 *
 * Know how we can force it to understand our default values and what we think they're
 */

const Example3 = () => {
  const form = useForm<FormValues>();

  return (
    <form
      onSubmit={form.handleSubmit(values => {
        type test = Expect<Equal<typeof values, FormValues>>;
      })}
    >
      <input {...form.register('firstName')} />
      <input {...form.register('lastName')} />
      {/* @ts-expect-error */}
      <input {...form.register('middleName')} />
    </form>
  );
};
