import { F } from 'ts-toolbelt';

interface FMConfig<Tstate extends string> {
  initial: F.NoInfer<Tstate>;
  states: Record<
    Tstate,
    {
      onEntry?: () => void;
    }
  >;
}

export const makeFiniteStateMachine = <TState extends string>(
  config: FMConfig<TState>
) => config;

const config = makeFiniteStateMachine({
  initial: 'a',
  states: {
    a: {
      onEntry: () => {
        console.log('a');
      },
    },

    // b should be allowed to be specified.
    b: {},
  },
});

const config2 = makeFiniteStateMachine({
  // c should not be allowed! It doesn't exist on the states below
  //@ts-expect-error
  initial: 'c',
  states: {
    a: {},
    //b should be allowed to be specified
    b: {},
  },
});

const compare = <T>(a: F.NoInfer<T>, b: T) => {
  return a == b;
};

//@ts-expect-error
compare(2, '123');
