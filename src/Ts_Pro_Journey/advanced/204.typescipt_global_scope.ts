import type { Equal, Expect } from "@total-typescript/helpers";
import { expect, it } from "vitest";

/** 
 * Clues: 
 * 
 * 1. declare globar will be needed: 
 * 
 * declare gblobal {}
 * 
 * 2. myFunc will need to be added to the global scope using 'function': 
 * 
 * function MyFunc(): boolean
 * 
 * 3. myVar will need to be added to the global scope using 'var':
 * 
 * var: myVar: number
 */

declare global {
    function MyFunc(): boolean

    var myVar: number
}

globalThis.MyFunc = () => true
globalThis.myVar = 1;

it("should let you call MyFunc without it being imported", () => {
    expect(MyFunc()).toBe(true);
    type test1 = Expect<Equal<typeof MyFunc, () => boolean>>
});

it("should let you access myVar without it being imported", () => {\
    expect(myVar).toBe(1);
    type test1 = Expect<Equal<typeof myVar, number>>
})