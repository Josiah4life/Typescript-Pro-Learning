export type Event =
  | {
      type: 'CLICK';
      page: '/' | '/about' | '/admin' | '/admin/user';
      label: string;
    }
  | {
      type: 'NAVIGATION';
      direction: 'back' | 'forward';
    };

const dispatch = (event: Event) => {};

dispatch({
  type: 'CLICK',
  label: 'lol',
  page: '/admin/user',
});
