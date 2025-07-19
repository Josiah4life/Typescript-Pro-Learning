import type { Equal, Expect } from '@total-typescript/helpers';

export type Event =
  | {
      type: 'click';
      event: MouseEvent;
    }
  | {
      type: 'focus';
      event: FocusEvent;
    }
  | {
      type: 'keydown';
      event: KeyboardEvent;
    };

type ClickEvent = Extract<Event, { type: 'click' }>;
// Extract<T, U> = T extends U ? T : never
// Extract From T those Types that are assignable to U

type fruit = 'orange' | 'banana' | 'apple';

type AppleAndOrange = Extract<fruit, 'orange' | 'apple'>;

type tests = [Expect<Equal<ClickEvent, { type: 'click'; event: MouseEvent }>>];

/**
 * Below We Now Exclude Part of a Discriminated Union
 *
 */

type NonKeyDownEvents = Exclude<Event, { type: 'keydown' }>;

type tests2 = [
  Expect<
    Equal<
      NonKeyDownEvents,
      | { type: 'click'; event: MouseEvent }
      | { type: 'focus'; event: FocusEvent }
    >
  >
];
