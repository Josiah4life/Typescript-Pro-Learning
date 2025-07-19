import { expect, it } from 'vitest';

declare global {
  interface DispatchableEvent {
    LOG_IN: {
      username: string;
      password: string;
    };
    // LOG_OUT: {
    //   username: string;
    //   password: string;
    // };
  }

  type UnionOfDispatchableEvents = {
    [K in keyof DispatchableEvent]: {
      type: K;
    } & DispatchableEvent[K];
  }[keyof DispatchableEvent];
}

const dispatchEvent = (event: UnionOfDispatchableEvents) => {
  //Imagine that this function dispatches this event to a global handler.
};

it('should be able to dispatch a LOG_IN anf LOG_OUT event', () => {
  dispatchEvent({
    type: 'LOG_IN',
    username: 'username',
    password: 'password',
  });
  //   dispatchEvent({
  //     type: 'LOG_OUT',
  //     username: 'username',
  //     password: 'password',
  //   });
});

// const handler = (event: UnionOfDispatchableEvents) => {
//   switch (event.type) {
//     case 'LOG_IN':
//       console.log('LOG_OUT');
//       break;
//     case 'LOG_OUT':
//       console.log(event.username);
//       break;
//   }
// };

it('should be able to handle LOG_OUT and UPDATE_USERNAME events', () => {
  handler({
    type: 'LOG_OUT',
  });
});
// interface Di {
//     LOG_IN: {
//         username: string;
//         password: string
//     };
// }

// type a = {
//     [K in keyof Di]: {
//         type: K
//     } & DispatchableEvent[K]
// }[keyof DispatchableEvent]
