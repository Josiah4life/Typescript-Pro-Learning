import type { Equal, Expect } from '@total-typescript/helpers';
import { expect, it } from 'vitest';

type HandlersToDiscriminatedUnions<T extends Record<string, any>> = {
  [K in keyof T]: { type: K } & T[K];
}[keyof T];

export class DynamicReducer<
  TState,
  TPayloadMap extends Record<string, any> = {}
> {
  private handlers = {} as Record<
    string,
    (state: TState, payload: any) => TState
  >;

  addHadler<TType extends string, TPayload extends object>(
    type: TType,
    handler: (state: TState, payload: TPayload) => TState
  ): DynamicReducer<TState, TPayloadMap & Record<TType, TPayload>> {
    this.handlers[type] = handler;

    return this;
  }

  reduce(
    state: TState,
    action: HandlersToDiscriminatedUnions<TPayloadMap>
  ): TState {
    const handler = this.handlers[action.type];

    if (!handler) {
      return state;
    }

    return handler(state, action);
  }
}

// interface me {
//   name: 'esfs';
//   adam: 'fsef';
// }

// type AddTypeField<T> = {
//   [K in keyof T]: { type: K; value: T[K] };
// };

// type Result = k<me>;

// type k<T extends {}> = {
//   [K in keyof T]: { type: K } & T[K]
// }[keyof T];

interface State {
  username: string;
  password: string;
}

const reducer = new DynamicReducer<State>()
  .addHadler(
    'LOG_IN',
    (state, action: { username: string; password: string }) => {
      return {
        username: action.username,
        password: action.password,
      };
    }
  )

  .addHadler('LOG_OUT', () => {
    return {
      username: '',
      password: '',
    };
  });

it('should return the new state after LOG_IN', () => {
  const state = reducer.reduce(
    {
      username: '',
      password: '',
    },
    {
      type: 'LOG_IN',
      username: 'foo',
      password: 'bar',
    }
  );

  type test = [Expect<Equal<typeof state, State>>];

  expect(state).toEqual({
    username: 'foo',
    password: 'bar',
  });
});
