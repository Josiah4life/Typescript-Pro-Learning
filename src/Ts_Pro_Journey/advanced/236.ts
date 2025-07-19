type Helper<Tinput, Toutput> = (input: Tinput) => Toutput | Promise<Toutput>;

const toUpperCase: Helper<string, string> = input => {
  return input.toUpperCase();
};

const fetchUser: Helper<number, { name: string }> = async id => {
  return { name: 'User ' + id };
};

type ZodString = {
  min: () => any;
  max: () => any;
} & ZodType<string, {}>;

type ZodType<T, ZodDef> = {
  parse: (input: unknown) => T;
};

const str: ZodString = {} as any;

str.parse('sa');

export {};
