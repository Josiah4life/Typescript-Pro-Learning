import express, { type RequestHandler } from 'express';

const app = express();

const getUser: RequestHandler<
  { id: string }, // URL Params
  { name: string }, // Response Body (not required, but fine)
  any, // Request Body (if needed)
  any // Query Params (if needed)
> = (req, res) => {
  const userId = req.params.id; // Works
  res.json({ name: 'Alice' }); // Response
};

const getUser1: RequestHandler<
  { id: string }, // req.params
  { name: string } // res.json()
> = (req, res) => {
  const id = req.params.id;

  // Dummy lookup
  const name = id === '1' ? 'Alice' : 'Unknown';

  res.json({ name });
};

app.get('/user', (req, res) => {
  res.send('Hello');
});

app.post('/user', (req, res) => {
  req.body;
});

app.listen(3000);

interface appme {
  <T>(age: T): T;
}

const a = (): appme => {
  return <T>(app: T) => app;
};

const e = a()('23');

interface appe {
  (id: number): number;
}

const b = (): appe => {
  return (id: number) => Math.floor(id);
};

//@ts-expect-error
const f = b()('ds');

interface MyFunc {
  (): string;
  (id: number): number;
}

const func: MyFunc = (id?: number) => {};
