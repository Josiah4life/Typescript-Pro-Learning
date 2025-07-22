import React, {
  lazy,
  Suspense,
  useMemo,
  type ComponentProps,
  type ComponentType,
} from 'react';

type Prop<C extends ComponentType<any>> = {
  loader: () => Promise<{
    default: C;
  }>;
} & ComponentProps<C>;

/**
 * 1. This component is supposed to take a loader function that returns a component, and
 * render that component when it's loaded.
 *
 * But it's not typed correctly, and it's not generic enough. Fix the typing errors, and make it generic
 * enough to support any component.
 *
 * HInts
 *
 * -- You'll need to make this a generic component!
 * -- React.ComponentProps will come in handy, as will React.COmponentType.
 */

function Lazyload<C extends ComponentType<any>>({ loader, ...props }: Prop<C>) {
  const LazyComponent = useMemo(() => lazy(loader), [loader]);

  return (
    <Suspense fallback={'loading'}>
      <LazyComponent {...props} />
    </Suspense>
  );
}

<>
  <Lazyload loader={() => import('./364.fake')} id="123" />

  <Lazyload
    loader={() => import('./364.fake')}
    //@ts-expect-error number is not assignable to string
    id={123}
  />

  {/* @ts-expect-error id is missing.*/}
  <Lazyload loader={() => import('./364.fake')} />
</>;
