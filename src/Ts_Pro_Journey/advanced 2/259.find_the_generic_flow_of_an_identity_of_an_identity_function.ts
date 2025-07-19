/**
 * fetchers is an object where you can optionally pass keys that match the route names.
 *
 * BUT - how do we prevent the users from passing fetchers that doesn't exist in the routes array?
 *
 * We'll need to change this to a function which takes in the config as an argument.
 *
 * Desired API:
 *
 * const config = makeConfigObj(config)
 */

export const configObj = {
  routes: ['/', '/about', '/contact'],
  fetchers: {
    // @ts-expect-error
    '/does-not-exist': () => {
      return {};
    },
  },
};

interface ConfigObj<TRoute extends string> {
  routes: TRoute[];
  fetchers: {
    [K in TRoute]?: () => any;
  };
}

export const config: ConfigObj<'/' | '/about' | '/contact'> = {
  routes: ['/', '/about', '/contact'],
  fetchers: {
    //@ts-expect-error
    'does-nt-exitst': () => {
      return {};
    },
  },
};

// Better Solution here.
/**
 * The solution is to use an identity function containing a generic, which will capture the names of the routes and allow
 * the user to specify the fetchers.
 */
const makeConfigObj = <TRoute extends string>(config: ConfigObj<TRoute>) =>
  config;

export const configObj1 = makeConfigObj({
  routes: ['/', '/about', '/services'],
  fetchers: {
    //@ts-expect-error
    'does-nt-exitst': () => {
      return {};
    },
  },
});
