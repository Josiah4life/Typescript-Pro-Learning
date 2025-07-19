import { useEffect, useState } from 'react';
import React from 'react';

export type Result<T> =
  | ['loading', undefined]
  | ['success', T]
  | ['error', Error];

/**
 * Let's look at one more example of disciminated unions. This time, we're going to use them to make
 * the tuple return type of a hook smarter.
 *
 * 1. Change the Result type so that the second element is inferred from narrowing the first.
 *
 * const [status, value] = useData<{title: string}>("http://jsonplaceholder.typicode/todos/1",)
 *
 * when status is 'loading' value should be undefined.
 * when status is 'error' value should be an Error.
 * when status is 'success', value should be T
 */

export const useData = <T,>(url: string): Result<T> => {
  const [result, setResult] = useState<Result<T>>(['loading', undefined]);

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => setResult(['success', data]))
      .catch(error => setResult(['error', error]));
  }, [url]);

  return result;
};

const component = () => {
  const [status, value] = useData<{
    title: string;
  }>('https://jsonplaceholder.typicode.com/todos/1');

  if (status === 'loading') {
    return <div>Loading</div>;
  }

  if (status === 'error') {
    return <div>Error: {value.message}</div>;
  }

  return <div>{value.title}</div>;
};
