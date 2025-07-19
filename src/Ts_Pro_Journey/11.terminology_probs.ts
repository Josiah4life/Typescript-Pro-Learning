/**
 * It's important to understand the terminology around unions:
 *
 * One of the type declaration below is a union
 * One of the type declaration below is a discriminated union
 * One of the type declaration below is a enum
 *
 * which is which?
 */

type A =
  | {
      type: "a";
      a: string;
    }
  | {
      type: "b";
      b: string;
    }
  | {
      type: "c";
      c: string;
    };

type B = "a" | "b" | "c";

enum C {
  A = "a",
}

/**
 * Type A -- Discriminated Union
 *
 *
 * It's a union object types that each have a common property called "type" with literal strings values "a" | "b" | "c"
 * This "type" property acts as a discriminant. So we TS can tell which shape we have.
 */

function handle(x: A) {
  if (x.type === "a") {
    console.log(x.a); // safely knows 'a' exists
  }
}

/**
 * Type B == Union
 *
 * It's simply a union of string literals - "a" | "b" | "c"
 * There's no extra property to discriminate between object shapes, it's just the literal values.
 */

function handleB(x: B) {
  // x can be only "a", "b", or "c"
  console.log(x.toUpperCase());
}

/**
 * Enum C
 * Enum is a special named group of constant values. It exists bth in Typescript and at runtime in Js unlike Types.
 *
 * It's useful when we want clear and fixed labels for a group of related values.
 */

enum Role {
  ADMIN = "admin",
  USER = "user",
}

function canAccess(role: Role) {
  if (role === Role.ADMIN) {
    return true;
  }
  return false;
}

console.log(Role.ADMIN); // "admin"
console.log(canAccess(Role.ADMIN)); // true
