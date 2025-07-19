import { z, ZodType } from 'zod';

type Example = z.ZodType;

const transformer = z.string().transform(s => Number(s));

const result = transformer.safeParse('123');

if (result.success) {
  console.log(result.data); // Number
}

const transformer1 = z
  .string()
  .refine(s => !isNaN(Number(s)), { message: 'Must be a valid number' })
  .transform(s => Number(s));

const userSchema = z.object({
  id: z.string(),
  age: z.number(),
});

/**
 * ZodType is the base class of all Zod schemas.
 *
 * All specific schemas like ZodString, ZodNumber, etc. extends ZodType.
 * Rarely used directly unless we're writing generic wrappers.
 */

//Example Usage:

const schema: z.ZodType<{ a: string; b: number }> = z.object({
  a: z.string(),
  b: z.number(),
});

const schema1: ZodType<{ a: string }> = z.object({
  a: z.string(),
});

// const schemaa = <T>(schema: z.ZodType<T>): T => {
//     return (args: T) => {

//     }
// }

//So

const sch = z.object({ a: z.number(), b: z.number() });

// Means
// ZodObject<{ a: number; b: number }> extends ZodType<{ a: number; b: number }>

// Option 1: Predefine type, then use it with Zod
//@ts-expect-error
type Person = { name: string; age: number };

//@ts-expect-error
const schema: z.ZodType<Person> = z.object({
  name: z.string(),
  age: z.number(),
});

// Option 2: Create schema first, infer type from it
//@ts-expect-error
const schema = z.object({ name: z.string(), age: z.number() });
//@ts-expect-error
type Person = z.infer<typeof schema>; // safer & more flexible

// FOR PREDEFINED OUTPUT AND INPUT

type Input = { age: string };
type Output = { age: number };

//@ts-expect-error
const schema: z.ZodType<Output, any, Input> = z.object({
  age: z.string().transform(val => Number(val)),
});
