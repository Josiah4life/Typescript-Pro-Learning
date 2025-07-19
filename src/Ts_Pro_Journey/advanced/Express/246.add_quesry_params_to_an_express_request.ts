import express from 'express';
import type { NextFunction, Request, Response, RequestHandler } from 'express';
import type { Equal, Expect } from '@total-typescript/helpers';

const app = express();

/** 
const parser = (queryParams: { [key: string]: string | string[] | undefined }) => {
  // Do something like checking if queryParams.id exists
}
*/

// const a: RequestHandler = ...
// It means a must be a function that follows the standard Express request handler shape.
// that is (req: Request, res: Response, next: NextFunction) => void | Promise<void>

const makeTypeSafeGet =
  <TQuery extends Request['query']>(
    parser: (queryParams: Request['query']) => TQuery,
    handler: RequestHandler<any, any, any, TQuery>
  ) =>
  (req: Request<any, any, any, TQuery>, res: Response, next: NextFunction) => {
    try {
      parser(req.query);
    } catch (e) {
      res.status(400).send('Invalid query: ' + (e as Error).message);
      return;
    }

    return handler(req, res, next);
  };

const getUser = makeTypeSafeGet(
  query => {
    if (typeof query.id !== 'string') {
      throw new Error('You must pass an id');
    }

    return {
      id: query.id,
    };
  },

  (req, res) => {
    //req.query should be exactly the type returned from the parser above
    type tests = [Expect<Equal<typeof req.query, { id: string }>>];

    res.json({
      id: req.query.id,
      name: 'Matt,',
    });
  }
);

app.get('/user', getUser);

// interface a {
//   name: {
//     age: number,
//     class: string
//   };
//   student: string
// }

// const b = (q: a['name']) => {}

// b({age: 4, 'class': "fgs"})

/**
 * RequestHandler is a type provided by Express that describes:
 *  A function that handles an HTTP request and sends a response.
 */

// router.get('/users/:id', (req, res) => {
//   // this is a RequestHandler
// });

/**
 * The ones needed can be filled below. and others left as either {} or any.
 */

/**
RequestHandler<
  Params = {},      // req.params
  ResBody = any,    // res.json(...)
  ReqBody = any,    // req.body
  ReqQuery = any    // req.query
>
*/

//Example: Typing req.params.

/**
const getUser: RequestHandler<{ id: string }> = (req, res) => {
  req.params.id; // strongly typed as string
  res.json({ name: "Alice" });
};
 */

/**
 * Explanation:
 *
 * The route might be /user/:id
 * means i expect req.params.id to exists and to be a string.
 */

//Example: Typing req.body

/*
const createUser: RequestHandler<{}, { success: boolean }, { name: string }> = (req, res) => {
  const name = req.body.name; // strongly typed
  res.json({ success: true });
};
*/

/**
 * Explanation:
 *
 * req.body.name is expected to be a string
 * res.json(...) is expected to return { success: boolean }
 */

// Internally how it's defined.

// type RequestHandler<
//   //@ts-expect-error
//   P = ParamsDictionary,
//   ResBody = any,
//   ReqBody = any,
//   //@ts-expect-error
//   ReqQuery = ParsedQs
// > = (
//   req: Request<P, ResBody, ReqBody, ReqQuery>,
//   res: Response<ResBody>,
//   next: NextFunction
// ) => void | Promise<void>;

// Example.

const handler: RequestHandler<
  { id: string }, // URL param: /user/:id
  { name: string }, // res.json() returns { name: string }
  {}, // request body (none expected)
  { verbose?: boolean } // query: /user/:id?verbose=true
> = (req, res) => {
  const id = req.params.id;
  const verbose = req.query.verbose;
  res.json({ name: 'John' });
};

// The extends core.RequestHandler... part

// what this line does
// interface RequestHandler<...> extends core.RequestHandler<...> {}

// We’re re-exporting the RequestHandler from the core module (Express core), and override its types via generics.
