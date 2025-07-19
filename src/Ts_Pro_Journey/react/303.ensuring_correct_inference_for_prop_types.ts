import type { Expect, Equal } from '@total-typescript/helpers';

const BACKEND_TO_FRONTEND_STATUS_MAP = {
  0: 'pending',
  1: 'success',
  2: 'error',
} as const;

type BackendStatus = keyof typeof BACKEND_TO_FRONTEND_STATUS_MAP;
type FrontendStatus = (typeof BACKEND_TO_FRONTEND_STATUS_MAP)[BackendStatus];

type test = [
  Expect<Equal<BackendStatus, 0 | 1 | 2>>,
  Expect<Equal<FrontendStatus, 'pending' | 'success' | 'error'>>
];

const BACKEND_TO_FRONTEND_STATUS_MAP1: Record<
  0 | 1 | 2,
  'pending' | 'success' | 'error'
> = {
  0: 'pending',
  1: 'success',
  2: 'error',
};

type BackendStatus1 = keyof typeof BACKEND_TO_FRONTEND_STATUS_MAP;
type FrontendStatus1 = (typeof BACKEND_TO_FRONTEND_STATUS_MAP)[BackendStatus1];

type test1 = [
  Expect<Equal<BackendStatus1, 0 | 1 | 2>>,
  Expect<Equal<FrontendStatus1, 'pending' | 'success' | 'error'>>
];
