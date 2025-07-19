import { it, expect } from 'vitest';
import type { Equal, Expect } from '@total-typescript/helpers';

export const concatenateFirstNameAndLastName = <
  TUser extends { firstName: string; lastName: string }
>(
  user: TUser
) => {
  return {
    ...user,
    fullname: `${user.firstName} ${user.lastName}`,
  };
};

it('should add fullName to an object which only contains firstName and lastName', () => {
  const users = [
    {
      firstName: 'Matt',
      lastName: 'Pocock',
    },
  ];

  const newUsers = users.map(concatenateFirstNameAndLastName);
});
