import type { Equal, Expect } from '@total-typescript/helpers';
import { expect, it } from 'vitest';

const makeSafe =
  <T extends (...args: any[]) => any>(func: T) =>
  (
    ...args: Parameters<T>
  ):
    | {
        type: 'success';
        result: ReturnType<T>;
      }
    | {
        type: 'failure';
        error: Error;
      } => {
    try {
      const result = func(...args);
      return {
        type: 'success',
        result,
      };
    } catch (e) {
      return {
        type: 'failure',
        error: e as Error,
      };
    }
  };

// const makeSafe =
//   <T extends any[], TReturn>(func: (...args: T) => TReturn) =>
//   (
//     ...args: T
//   ):
//     | {
//         type: 'success';
//         result: TReturn;
//       }
//     | {
//         type: 'failure';
//         error: Error;
//       } => {
//     try {
//       const result = func(...args);
//       return {
//         type: 'success',
//         result,
//       };
//     } catch (e) {
//       return {
//         type: 'failure',
//         error: e as Error,
//       };
//     }
//   };

//Below
// ): (...args: Parameters<T>) => ...
// (...args: Parameters<T>) means: ... The returned function will accept the same arguments as the original function T
// => { type: "success" | "failure"; ... } means: ... The returned function will return either a success object or a failure object.
// Parameters<T> and ReturnType<T>
// “The returned function will take the same args as the original”
// “And if it succeeds, it returns the same result type”

/** 
const makeSafe = <T extends (...args: any[]) => any>(
  func: T
): (...args: Parameters<T>) => 
  | { type: "success"; result: ReturnType<T> }
  | { type: "failure"; error: Error } => {
    
  return (...args: Parameters<T>) => {
    try {
      const result = func(...args);
      return {
        type: "success",
        result,
      };
    } catch (e) {
      return {
        type: "failure",
        error: e as Error,
      };
    }
  };
};

*/

it("should return the result with a { typ: 'success' ] on a succcessful cal", () => {
  const func = makeSafe(() => 1);

  // const func = makeSafe()()

  const result = func();

  expect(result).toEqual({
    type: 'success',
    result: 1,
  });

  type tests = [
    Expect<
      Equal<
        typeof result,
        | {
            type: 'success';
            result: number;
          }
        | {
            type: 'failure';
            error: Error;
          }
      >
    >
  ];
});

const makeSafe = <T extends (...args: any[]) => any>(
  func: T
): ((
  ...args: Parameters<T>
) =>
  | { type: 'success'; result: ReturnType<T> }
  | { type: 'failure'; error: Error }) => {
  return (...args: Parameters<T>) => {
    try {
      const result = func(...args);
      return {
        type: 'success',
        result,
      };
    } catch (e) {
      return {
        type: 'failure',
        error: e as Error,
      };
    }
  };
};

it('should return the error on a thrown call', () => {
  const func = makeSafe(() => {
    if (1 > 2) {
      return 123;
    }
    throw new Error('Oh dear');
  });

  const result = func();

  const a = makeSafe(() => {
    if (1 > 2) {
      return 123;
    }
    throw new Error('Oh dear');
  });

  expect(result).toEqual({
    type: 'failure',
    result: new Error('Oh dear'),
  });

  it('should properly match the function"s arguments', () => {
    const func = makeSafe((a: number, b: string) => {
      return `${a} + ${b}`;
    });

    //@ts-expect-error
    func();

    //@ts-expect-error
    func(1, 1);

    func(1, '1');
  });

  type tests = [
    Expect<
      Equal<
        typeof result,
        {
          type: 'failure';
        }
      >
    >
  ];
});

// Curried Function & Higher Order Function.

const divide = (a: number, b: number) => {
  if (b === 0) throw new Error("Can't divide by zero");
  return a / b;
};

const safeDivide = makeSafe(divide);

console.log(safeDivide(10, 2));
// { type: "success", result: 5 }

console.log(safeDivide(10, 0));
// { type: "failure", error: [Error: Can't divide by zero] }

/**
 * OTHERS
 */

const parseUserJson = (json: string) => {
  const parsed = JSON.parse(json);
  if (!parsed.name || !parsed.age) {
    throw new Error('Missing required fields');
  }
  return {
    name: parsed.name,
    age: parsed.age,
  };
};

const safeParseUser = makeSafe(parseUserJson);

const response = safeParseUser('{"name":"Jo","age":25}');

if (response.type === 'success') {
  // Access the result safely
  const user = response.result;
  // Do something with the user
  //   console.log("User's name is:", user.name);
} else {
  // Handle error gracefully
  console.error('Failed to parse user:', response.error.message);
}

/**

const layered = (): () => string => {
  return () => "hi!";
};

 */
