import type { Equal, Expect } from '@total-typescript/helpers';
import { expect, it, describe } from 'vitest';

export const getHomePageFeatureFlags = <
  Tconfig extends { rawConfig: { featureFlags: { homepage: any } } },
  Toverride = Tconfig['rawConfig']['featureFlags']['homepage']
>(
  config: Tconfig,
  overide: (flags: Toverride) => Toverride
) => {
  return overide(config.rawConfig.featureFlags.homepage);
};

describe('getHomePageFeatureFlags', () => {
  const EXAMPLE_CONFIG = {
    apiEndpoint: 'https://api.example.com',
    apiVersion: 'v1',
    apiKey: '1234567890',
    rawConfig: {
      featureFlags: {
        homepage: {
          showBanner: true,
          showLogOut: false,
        },
        loginPage: {
          showCaptcha: true,
          showCOnfirmPassword: false,
        },
      },
    },
  };

  const aa = (a: { showBanner: boolean; showLogOut: boolean }) => {
    return { showBanner: false, showLogOut: false };
  };

  it('should return the homepage flag object', () => {
    const flags = getHomePageFeatureFlags(EXAMPLE_CONFIG, () => ({
      showBanner: true,
      showLogOut: false,
    }));

    type test = [
      Expect<Equal<typeof flags, { showBanner: boolean; showLogOut: boolean }>>
    ];

    it('should allow you to modify the result', () => {
      const flags = getHomePageFeatureFlags(EXAMPLE_CONFIG, defaultFlags => ({
        ...defaultFlags,
        showBanner: false,
      }));
    });

    expect(flags).toEqual({
      showBanner: false,
      showLogOut: false,
    });

    type tests = [
      Expect<Equal<typeof flags, { showBanner: boolean; showLogOut: boolean }>>
    ];
  });
});

const a = <T extends { animal: string }>(config: T) => {
  return config;
};

const d = <T = string>(config: T) => {};

const e = <T extends string>() => [];

// const f = d('', 43);

const b = a({
  fruits: 'apple',
  animal: 'elephants',
});

const c = b.fruits;
