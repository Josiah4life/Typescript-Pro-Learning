import type { Expect, Equal } from '@total-typescript/helpers';

const makeStatus = <Tstatuses extends string>(statutes: Tstatuses[]) => {
  return statutes;
};

const statutes = makeStatus(['INFO', 'DEBUG', 'ERROR', 'WARNING']);

type tests = [
  Expect<Equal<typeof statutes, Array<'INFO' | 'DEBIG' | 'ERROR' | 'WARNING'>>>
];

const createClassNamesFactory = <TVariant extends string>
  (classes: Record<TVariant, string>) =>
  (type: TVariant, ...otherClasses: unknown[]) => {
    const classList = [classes[type], ...otherClasses];
    return classList.join(' ');
  };

const createClassNamesFactory01 = <T extends Record<string, string>(classes: T) =>
  (type: keyof T, ...otherClasses: string[]) => {
    const classList = [classes[type], ...otherClasses];
    return classList.join(' ');
  };

const getBg = createClassNamesFactory({
  primary: 'bg-blue-500',
  secondary: 'bg-gray-500',
});


// const createClassNamesFactory = <T extends Record<string, string>>(classes: T) => {
//   return (type: keyof T, ...otherClasses: string[]) => {
//     const classList = [classes[type], ...otherClasses];
//     return classList.join(" ");
//   };
// };

