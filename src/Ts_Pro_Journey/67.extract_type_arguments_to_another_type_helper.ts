import type { Equal, Expect } from "@total-typescript/helpers";

interface MyComplexInterface<Event, Context, Name, Point> {
  getEvent: () => Event;
  getContext: () => Context;
  getName: () => Name;
  getPoint: () => Point;
}

type Example = MyComplexInterface<
  "click",
  "window",
  "my-event",
  { x: 12; y: 14 }
>;

type GetPoint<T> = T extends MyComplexInterface<
  infer A,
  infer B,
  infer C,
  infer D
>
  ? D
  : never;
type Example2<T> = T extends MyComplexInterface<any, any, any, any>
  ? ReturnType<T["getPoint"]>
  : never;

type tests = [Expect<Equal<GetPoint<Example>, { x: 12; y: 14 }>>];
