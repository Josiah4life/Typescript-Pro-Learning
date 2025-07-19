import { it } from 'vitest';
import type { Brand } from './brand';
import type { Equal, Expect } from '@total-typescript/helpers';

type PostId = Brand<string, 'PostId'>;
type UserId = Brand<string, 'UserId'>;

interface User {
  id: UserId;
  name: string;
}

interface Post {
  id: PostId;
  title: string;
}

/**
 * Change this type definition! We should be able to add users and posts to the db by their id.
 *
 * You'll need an index signature of some kind - or maybe
 */

// const db: Record<string, User | Post> = {};

// const db: {
//   [postId: PostId]: Post;
//   [userId: UserId]: User;
// } = {};

const db: {
  [postId: PostId]: Post;
} & { [userId: UserId]: User } = {};

it('should let you add users and posts to the db by their id', () => {
  const postId = 'post_1' as PostId;
  const userId = 'post_1' as UserId;

  db[postId] = {
    id: postId,
    title: 'Hello World',
  };

  db[userId] = {
    id: userId,
    name: 'Jacob',
  };

  const post = db[postId];
  const user = db[userId];

  type tests = [
    Expect<Equal<typeof post, Post>>,
    Expect<Equal<typeof user, User>>
  ];
});

it('should fail if you try to add a user under a post id', () => {});
