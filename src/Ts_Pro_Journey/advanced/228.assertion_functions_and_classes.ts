import type { Equal, Expect } from '@total-typescript/helpers';

interface User {
  id: string;
}

export class SDK {
  //   loggedInUser?: User;

  //   constructor(UserLoggedIn?: User) {
  //     this.loggedInUser = UserLoggedIn;
  //   }

  constructor(public loggedInUser?: User) {}

  //How do we type this assertion function?

  assertIsloggedIn(): asserts this is this & { loggedInUser: User } {
    if (!this.assertIsloggedIn) {
      throw new Error('Not Logged in');
    }
  }

  createPost(title: string, body: string) {
    type test1 = Expect<Equal<typeof this.loggedInUser, User | undefined>>;

    this.assertIsloggedIn();

    type test2 = Expect<Equal<typeof this.loggedInUser, User>>;
  }
}
