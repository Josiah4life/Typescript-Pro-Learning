/**
 * How do we add a new base element to React's JSX?
 *
 * You'll need to do some detctive work: check out JSX.IntrinsicElements.
 *
 * The JSX namespace comes from React - you'll need to check out React's type definitions.
 *
 */

import React from 'react';

// declare module 'react' {
//   namespace JSX {
//     interface IntrinsicElements {
//       'custom-element': {};
//     }
//   }
// }

const element = <custom-element status="success">hello wordld</custom-element>;

/**
 * The React.HTMLAttributes<HTMLElemet>
 * This part means: All the usual props that we can give regular HTML element.
 *
 * This includes: className, style, onClick, id, aria-* ...
 */

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'custom-element': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        status: 'success' | 'failed';
        type?: 'primary' | 'secondary';
        children: React.ReactNode;
      };
    }
  }
}
