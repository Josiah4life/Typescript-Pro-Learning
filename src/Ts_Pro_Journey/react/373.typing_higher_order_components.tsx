import { Router, useRouter } from 'express';

export const withRouter = <TProps,>(Component: React.ComponentType<TProps>) => {
  const NewComponent = (props: Omit<TProps, 'router'>) => {
    const router = useRouter();

    return <Component {...(props as TProps)} router={router} />;
  };

  NewComponent.displayName = `withRouter(${Component.displayName})`;

  return NewComponent;
};

const UnWrappedComponent = (props: { router: Router; id: string }) => {
  return null;
};

const WrappedComponent = withRouter(UnWrappedComponent);

<>
  {/* @ts-expect-error need a router! */}
  <UnWrappedComponent id="123" />

  {/* Dosen't need a router passed in! */}
  <WrappedComponent id="123" />

  <WrappedComponent
    //@ts-expect-error id must be the correct property
    id={123}
  />
</>;

const Aba = (props: any) => {
  return <div>Hello</div>;
};

Aba.displayName = `withMe`;
