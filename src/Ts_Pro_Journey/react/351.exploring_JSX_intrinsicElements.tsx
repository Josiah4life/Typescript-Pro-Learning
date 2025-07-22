import React, { type JSX } from 'react';

export type Exaple = JSX.IntrinsicElements;

/**
 * JSX.IntrinsicElements
 *
 * JSX.IntrinsicElements is a TypeScript interface that defines all the built-in
 * HTML and SVG elements that are valid inside JSX (e.g., <div>, <input>, <img>).
 *
 * Purpose:
 * - Enables TypeScript to recognize HTML/SVG tags used in JSX.
 * - Provides correct typing for the props of each tag (e.g., className, onClick).
 * - Helps catch typos and invalid tag/attribute usage.
 *
 * Structure Example:
 *
 * declare namespace JSX {
 *   interface IntrinsicElements {
 *     div: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
 *     input: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
 *     img: React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>;
 *     // ... more built-in tags
 *   }
 * }
 *
 * Invalid Usage:
 * <hello>hi</hello> //Error: 'hello' does not exist on JSX.IntrinsicElements
 *
 * Custom Elements:
 * You can extend IntrinsicElements to add custom tag support:
 *
 * declare namespace JSX {
 *   interface IntrinsicElements {
 *     'my-element': { someProp?: string };
 *   }
 * }
 *
 * Now this works:
 * <my-element someProp="ok" />
 *
 * Summary:
 * - JSX.IntrinsicElements tells TypeScript what tags are valid.
 * - Each tag is mapped to the correct React prop type for that element.
 * - Helps provide auto-completion and catch invalid attributes.
 */
