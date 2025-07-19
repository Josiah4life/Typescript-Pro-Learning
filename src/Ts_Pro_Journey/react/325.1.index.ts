/**
 * A fake function to create a user
 */

export const createUser = async (
  user: {
    name: string;
    email: string;
  },
  opts?: {
    throwOnError?: boolean;
  }
): Promise<{
  id: string;
  name: string;
  email: string;
}> => {
  return fetch('/user', {
    method: 'POST',
    body: JSON.stringify(user),
  }).then(response => response.json());
};

export const createUser1 = async (user: {
  name: string;
  email: string;
}): Promise<{
  id: string;
  name: string;
  email: string;
}> => {
  const response = await fetch('/user', {
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('Failed to create user');
  }

  return response.json();
};
