import type { Equal, Expect } from '@total-typescript/helpers';

const BACKEND_TO_FRONTEND_STATUS_MAP = {
  0: 'pending',
  1: 'success',
  2: 'error',
} as const;

const BACKEND_TO_FRONTEND_STATUS_MAP1 = Object.freeze({
  0: 'pending',
  1: 'success',
  2: 'error',
});

type BackendStatus = keyof typeof BACKEND_TO_FRONTEND_STATUS_MAP;
type FrontedendStatus = (typeof BACKEND_TO_FRONTEND_STATUS_MAP)[
  | '0'
  | '2'
  | '1'];
type FrontedendStatus1 = (typeof BACKEND_TO_FRONTEND_STATUS_MAP)[BackendStatus];

type test = [
  Expect<Equal<BackendStatus, 0 | 1 | 2>>,
  Expect<Equal<FrontedendStatus, 'pending' | 'success' | 'error'>>
];
