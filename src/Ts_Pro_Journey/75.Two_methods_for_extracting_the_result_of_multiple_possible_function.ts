import type { Expect, Equal } from "@total-typescript/helpers";

const parser1 = {
  parse: () => 1,
};

const parser2 = () => "123";

const parser3 = {
  extract: () => true,
};

type GetParserResult<T> = T extends {
  parse: () => infer TResult;
}
  ? TResult
  : T extends () => infer TResult
  ? TResult
  : T extends {
      extract: () => infer TResult;
    }
  ? TResult
  : never;

type GetParserResult01<T> = T extends
  | {
      parse: () => infer TResult;
    }
  | {
      extract: () => infer TResult;
    }
  | (() => infer TResult)
  ? TResult
  : never;

type tests = [Expect<Equal<GetParserResult<typeof parser1>, number>>];
