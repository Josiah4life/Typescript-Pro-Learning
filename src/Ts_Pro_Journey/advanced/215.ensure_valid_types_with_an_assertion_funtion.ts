import { expect, it } from 'vitest';
import type { Expect, Equal } from '@total-typescript/helpers';

interface User {
  id: string;
  name: string;
}

interface AdminUser extends User {
  role: 'admin';
  organization: string[];
}

interface NormalUser extends User {
  role: 'normal';
}

function assertUserIsAdmin(user: NormalUser | AdminUser) {
  if (user.role !== 'admin') {
    throw new Error('Not an admin user');
  }
}

// If this returns "admin for role" then user is AdminUser
function IsAdmin(user: NormalUser | AdminUser): user is AdminUser {
  return user.role === 'admin';
}

function IsAdmin1(user: NormalUser | AdminUser): asserts user is AdminUser {
  if (user.role !== 'admin') {
    throw new Error('Not an admin user');
  }
}

it('should assert that the type is an admin user after it has been validated', () => {
  const example = (user: NormalUser | AdminUser) => {
    if (IsAdmin(user)) {
      type tests = [Expect<Equal<typeof user, AdminUser>>];
    }
  };
});

it('should assert that the type is an admin user after it has been validated', () => {
  const example = (user: NormalUser | AdminUser) => {
    IsAdmin1(user);
    type tests = [Expect<Equal<typeof user, AdminUser>>];
  };
});

it('should throw an error when it encounters a normal user', () => {
  const user: NormalUser = {
    id: 'user_1',
    name: 'Miles',
    role: 'normal',
  };

  expect(() => assertUserIsAdmin(user)).toThrow();
});

/**
 *
 * In Essence First Type Predicate.
 *
 * isAdmin for example. or take this example below.
 *
 * function isString(values: unknown): value is string {
 *    return typeof value === "string"
 * }
 * 
 * value is string is a type predicate...
 * 
 * it tells TypeScript. 
 * 
 * -> If this returns "true", then value is a string.
 * 
    Usage: 

    function logLength(input: unknwon) {
        if (isString(input)) {
            // Here, typescript knowns that input is string here.
            console.log(input.length)
        }
    }
 *
 */

/**
 * Second Assertion Function. 
 *  An assertion function tells typeScript: 
 *  -> If this function doesn't throw, assume the value is of a specific type.
 * 

  function assertIsString(value: unknown): assert value is string {
    if (typeof value !== "string") {
      throw new Error("Not a string")
    }
  }

  Usage: 
function useInput(input: unknown) {
  assertIsString(input); // throws if not string

  // TypeScript now knows input is a string here
  console.log(input.toUpperCase());
}

If the function throws, execution stops.
If it doesn’t throw, TypeScript trusts that the value is a string.
 * 
 */
