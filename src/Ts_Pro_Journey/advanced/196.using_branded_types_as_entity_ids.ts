import { it } from 'vitest';
import type { Brand } from './brand';

type userId = Brand<string, 'UserId'>;
type PostId = Brand<string, 'PostId'>;

interface User {
  id: userId;
  name: string;
}

interface Post {
  id: PostId;
  title: string;
  content: string;
}

const db: { users: User[]; posts: Post[] } = {
  users: [
    {
      id: '1' as userId,
      name: 'Miles',
    },
  ],
  posts: [
    {
      id: '1' as PostId,
      title: 'Hello world',
      content: 'This is my first post',
    },
  ],
};

const getUserById = (id: userId) => {
  return db.users.find(user => user.id === id);
};

const getPostById = (id: PostId) => {
  return db.posts.find(post => post.id === id);
};

it('should only let you get user by id with user id', () => {
  const PostId = '1' as PostId;

  // @ts-expect-error
  getUserById(PostId);
});

it('should only let you get user by id with user id', () => {
  const userId = '1' as userId;

  // @ts-expect-error
  getPostById(userId);
});
