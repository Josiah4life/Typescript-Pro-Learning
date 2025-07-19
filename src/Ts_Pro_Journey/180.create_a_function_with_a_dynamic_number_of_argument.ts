import { it } from 'vitest';

interface Events {
  click: {
    x: number;
    y: number;
  };

  focus: undefined;
}

export const sendEvent = <TEvents extends keyof Events>(
  event: TEvents,
  ...args: Events[TEvents] extends undefined ? [] : [payload: Events[TEvents]]
) => {
  //send event somewhere.
};

sendEvent('focus');

it('should force you to pass a second argunment when you choose an event with a payload', () => {
  // @ts-expect-error
  sendEvent('click');

  sendEvent('click', {
    //@ts-expect-error
    x: 'oh dear',
  });

  sendEvent(
    'click',

    //@ts-expect-error
    {
      y: 1,
    }
  );

  sendEvent('click', {
    x: 1,
    y: 2,
  });
});

it('should prevent ypu from passing a second argument when you choose an event without payload', () => {
  sendEvent('focus');

  sendEvent(
    'focus',
    //@ts-expect-error
    {}
  );
});
