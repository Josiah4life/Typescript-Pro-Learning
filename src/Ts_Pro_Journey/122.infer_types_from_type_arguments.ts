import type { Expect, Equal } from '@total-typescript/helpers';
import { expect, it } from 'vitest';

export class Component<TProps> {
  private props: TProps;

  constructor(props: TProps) {
    this.props = props;
  }

  getProps = () => this.props;
}

const cloneComponent = <Tprops>(
  component: Component<Tprops>
): Component<Tprops> => {
  return new Component(component.getProps());
};

it('should clone the props from a passed-in Component', () => {
  const component = new Component({
    a: 1,
    b: 2,
    c: 3,
  });

  const clonedComponent = cloneComponent(component);
  const result = clonedComponent.getProps();

  expect(result).toEqual({
    a: 1,
    b: 2,
    c: 3,
  });

  type tests = [
    Expect<
      Equal<
        typeof result,
        {
          a: number;
          b: number;
          c: number;
        }
      >
    >
  ];
});
