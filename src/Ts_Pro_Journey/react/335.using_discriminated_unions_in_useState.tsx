import { useEffect, useState } from 'react';

type FreeState = {
  status: 'loading' | 'loaded';
};

type CurrentState =
  | FreeState
  | {
      status: 'error';
      error: Error;
    };

export const useLoadAsyncVideo = (src: string) => {
  const [state, setState] = useState<CurrentState>({
    status: 'loading',
  });

  useEffect(() => {
    setState({
      status: 'loading',
    });

    let cancelled = false;

    fetchVideo(src)
      .then(blob => {
        if (cancelled) {
          return;
        }

        appendVIdeoToDomAndPlay(blob);

        setState({
          status: 'loaded',
        });
      })
      .catch((error: Error) => {
        if (cancelled) {
          return;
        }
        setState({
          status: 'error',
          error,
        });
      });

    return () => {
      cancelled = true;
    };
  }, [src]);

  //@ts-expect-error
  setState({
    status: 'error',
  });

  setState({
    status: 'loading',
    //@ts-expect-error
    error: new Error('error'),
  });

  setState({
    status: 'loaded',
    //@ts-expect-error
    error: new Error('error'),
  });

  if (state.status === 'error') {
    console.log(state.error);
  }
};
