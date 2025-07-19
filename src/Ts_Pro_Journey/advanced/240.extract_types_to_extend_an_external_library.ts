import { fetchUser } from './240.fetches';
import type { Equal, Expect } from '@total-typescript/helpers';

/**
 * We're using a function from fake-external lib, but we need to extend the types. Extract the types below.
 */

type ParametersOfFetchUser = Parameters<typeof fetchUser>;

type FetchUserFunc = typeof fetchUser;

type ReturnTypeOfFetchUserWithFullName = Awaited<
  ReturnType<typeof fetchUser>
> & { fullname: string };

export const fetchUserWithFullname = async (
  ...args: ParametersOfFetchUser
): Promise<ReturnTypeOfFetchUserWithFullName> => {
  const user = await fetchUser(...args);
  return {
    ...user,
    fullname: `${user.firstName} ${user.lastName}`,
  };
};

type tests = [Expect<Equal<ParametersOfFetchUser, [string]>>];
