import type { Expect, Equal } from '@total-typescript/helpers';

class Form<TValues> {
  error?: string;

  constructor(
    public values: TValues,
    private validate: (values: TValues) => string | void
  ) {}

  //type A = Form<TValues>; // has: values, validate, error?: string
  // type B = { error: string }; // explicitly says error is a string

  isValid(): this is Form<TValues> & { error: string } {
    const result = this.validate(this.values);

    if (typeof result === 'string') {
      this.error = result;
      return true;
    }

    this.error = undefined;
    return false;
  }
}

const form = new Form(
  {
    username: '',
    password: '',
  },
  values => {
    if (!values.username) {
      return 'Username is requiered';
    }

    if (!values.password) {
      return 'Password is required';
    }
  }
);

if (form.isValid()) {
  form.error;
  type test1 = Expect<Equal<typeof form.error, string>>;
} else {
  type test2 = Expect<Equal<typeof form.error, string | undefined>>;
}
