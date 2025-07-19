import React from 'react';

type EmbeddedPlaygroundProps =
  | {
      useStackblitz: true;
      stackblitzId: string;
    }
  | {
      useStackblitz?: false;
      codeSandboxId: string;
    };
//   |
//   {
//       useStackblitz?: undefined;
//       codeSandboxId: string;
//     };

const EmbeddedPlayground = (props: EmbeddedPlaygroundProps) => {
  if (props.useStackblitz) {
    return (
      <iframe
        src={`https://stackblitz.com/edit/${props.stackblitzId}?embed=1`}
      />
    );
  }

  return (
    <iframe
      src={`https://stackblitz.com/edit/${props.codeSandboxId}?embed=1`}
    />
  );
};

<>
  <EmbeddedPlayground useStackblitz stackblitzId="my-stackblitz-id" />
  <EmbeddedPlayground codeSandboxId="my-codebox" />
  <EmbeddedPlayground
    useStackblitz
    //@ts-expect-error
    codeSandboxId="my-codebox"
  />
</>;
