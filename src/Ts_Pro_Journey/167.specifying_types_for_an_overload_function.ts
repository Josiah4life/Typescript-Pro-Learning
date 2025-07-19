import type { Equal, Expect } from '@total-typescript/helpers';

interface A {
  SiteA: string[];
}

interface B extends A {
  SiteB: string[];
}

interface C extends B {
  SiteC: string[];
}

function getSiteData(role: 'admin'): A;
function getSiteData(role: 'user'): B;
function getSiteData(role: string): C;
function getSiteData(role: string): A | B | C {
  switch (role) {
    case 'admin':
      return {
        SiteA: ['A1', 'A2'],
      };
    case 'user':
      return {
        SiteA: ['A1'],
        SiteB: ['B1', 'B2'],
      };
    default:
      return {
        SiteA: ['A1'],
        SiteB: ['B1'],
        SiteC: ['C1', 'C2'],
      };
  }
}

const adminData = getSiteData('admin'); // Type is A
const userData = getSiteData('user'); // Type is B
const otherData = getSiteData('guest'); // Type is C

type tests = [
  Expect<Equal<typeof adminData, A>>,
  Expect<Equal<typeof userData, B>>,
  Expect<Equal<typeof otherData, C>>
];
