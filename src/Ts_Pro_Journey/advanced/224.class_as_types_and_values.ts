import type { Equal, Expect } from '@total-typescript/helpers';
import { error } from 'console';

class CustomError extends Error {
  constructor(message: string, public code: number) {
    super(message);
    this.name = 'CustomError';
  }
}

// How do we type the 'error' parameter?

const handleCustomError = (error: unknown) => {
  if (error instanceof CustomError) {
    console.error(error.code);

    type test = Expect<Equal<typeof error.code, number>>;
  }
};

const handleCustomError01 = (error: { message: string; code: number }) => {
  console.error(error.code);

  type test = Expect<Equal<typeof error.code, number>>;
};

// So class can boundries a little bit and be use as either a types or runtime value.
const handleCustomError02 = (error: CustomError) => {
  console.error(error.code);

  type test = Expect<Equal<typeof error.code, number>>;
};

const customError = new CustomError('oh no', 401);

handleCustomError01(customError);

const error: CustomError = new CustomError('oh no', 401);

export {};

//Buit in Error Class in typescript (simplified)

// class Error {
//   name: string;
//   message: string;
//   stack?: string;

//   constructor(message?: string) {
//     this.message = message ?? '';
//     this.name = 'Error';
//   }
// }

// Object.setPrototypeOf(this, new.target.prototype);

throw new Error('Error here');

// class CustomError extends Error {
//   constructor(message: string, public code: number, public status: number) {
//     super(message);
//     this.name = "CustomError";
//     Object.setPrototypeOf(this, new.target.prototype);
//   }
// }

//Usage

// const getUser = async (req, res) => {
//   try {
//     const user = await findUserById(req.params.id);
//     if (!user) {
//       throw new CustomError("User not found", 1001, 404);
//     }

//     res.json(user);
//   } catch (error: unknown) {
//     // Handle safely
//     if (error instanceof CustomError) {
//       res.status(error.status).json({
//         message: error.message,
//         code: error.code,
//       });
//     } else {
//       // fallback for unexpected errors
//       res.status(500).json({ message: "Unexpected server error" });
//     }
//   }
// };

class A {
  age: string;

  constructor(public name: string, public code: number) {
    this.age = 'Error';
  }
}

// class B extends A {
//   constructor(age: string, name: string, code: number) {
//     super(name, code); //required by A
//     // custom B property
//     this.age = age;
//   }
// }

class B extends A {
  constructor(public age: string, name: string, code: number) {
    super(name, code);

    // For the age might work because B defines it's own property and age: number which overides
    // or hides the age: string from A

    // public age: number	Becomes a class property + auto this.age = age
    // IT's better to avoid different types.
  }
}

/**

class B extends A {
  constructor(public age: number) {
    const name = `User${age}`;
    const code = age * 100;
    super(name, code); // dynamic
  }
}
 */

/**
class B extends A {
  constructor(public age: number) {
    super("Default Name", 123); // hardcoded
  }
}
*/

/**
class A {
  constructor(public name: string, public code: number) {}
}

class B extends A {
  constructor(public age: number, name: string, code: number) {
    super(name, code); // you must pass these to A
  }
}
*/

/**

class Error {
  constructor(message?: string) {
    this.message = message;
    this.name = "Error";
    this.stack = getStackTrace(); // simplified
  }
}

class CustomError extends Error {
  constructor(message: string, public code: number) {
    super(message);         // Sets this.message, this.stack, etc.
    this.name = "CustomError";
    this.code = code;
  }
}

*/
