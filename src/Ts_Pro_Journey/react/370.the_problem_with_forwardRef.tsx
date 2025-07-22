import type { Equal, Expect } from '@total-typescript/helpers';
import { forwardRef, useRef, type ForwardedRef } from 'react';

type Props<T> = {
  data: T[];
  renderRow: (item: T) => React.ReactNode;
};

/**
 * Try uncommenting the following code. You'll see that the type of the `row` prop is inferred to
 * the `string`.
 *
 * This suggestion is from Stefan Baumgartner:
 *
 * https://fettblog.eu...
 *
 * declare module "react" {
 *      function forwardRef<T, P ={}>(
 *          render: (props: P, ref: React.Ref<T>) => React.ReactNode,
 *      ): (props: P & React.RefAttributes<T>) => React.ReactNode;
 *  }
 *
 *
 * By ditching defaultProps and propTypes on the type passed to render we can make use of something
 * called 'higher order function type inference':
 *
 *By doing it this way, we preserve the generic context of the function being passed in.
 */

export const Table = <T,>(
  props: Props<T>,
  ref: ForwardedRef<HTMLTableElement>
) => {
  return <table ref={ref} />;
};

const ForwardedReffedTable = forwardRef(Table);

const Parent = () => {
    const tableRef = useRef<HTMLTableElement>(null);
    const wrongRef = useRef<HTMLDivElement>(null)
    return (
        <>
            <ForwardedReffedTable
                ref={tableRef}
                data={["123"]}
                renderRow={(row) => {
                    type test = Expect<Equal<typeof row, string>>;
                    return <div>123</div>
                }}
                />

            <ForwardedReffedTable
                //@ts-expect-error
                ref={wrongRef}
        </>
    )
}