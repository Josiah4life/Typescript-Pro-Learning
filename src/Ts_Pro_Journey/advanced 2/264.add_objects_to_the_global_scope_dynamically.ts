import type { Equal, Expect } from "@total-typescript/helpers";

const addAllOfThisToWindow = {
    addSolution: (a: number, b: number) => a + b,
    subtractSolution: (a: number, b: number) => a - b,
    multiplySolution: (a: number, b: number) => a * b,
    divideSolution: (a: number, b: number) => a / b
}

/**
 * It copies properties from one object into another.
 * 
 * target = window
 * source = addAllofThisToWindow
 */

/**
 * the window is an object in javascript
 * 
 * typeof window === "object"; //true.
 * 
 * it's an object that contains 
 * Built-in-stuff like window.alert, window.document, window.console ...
 * And anything we attach globally, like window.myApp = {...} 
 */

/**
window.name = "my browser window"

console.log(typeof window) //object
console.log(window.name) // "my window browser"

console.log(Object.keys(window)); // shows all properties.
 */

/**
 * In typeScript (browser context), window is of type Window & typeof globalThis
 * declare var window: Window & typeof globalThis;
 * And Window is just an interface -- meaning it descrivbes the structure of the object. 
 * 
 * But at runtime: 
 * console.log(typeof window) //"object"
 */

declare global {
    type adme = typeof addAllOfThisToWindow
    // interface Window extends adme {
    // }

    // type whatever = {
    //     addSolution: typeof addAllOfThisToWindow.addSolution
    // }

    interface a {
        addSolution: (a: number, b: number) => number
    }

    interface Window extends adme

}
Object.assign(window, addAllOfThisToWindow)

type tests = [
    Expect<Equal<typeof window.addSolution, (a: number, b: number) => number>>,
    Expect<Equal<typeof window.subtractSolution, (a: number, b: number) => number>>,
    Expect<Equal<typeof window.multiplySolution, (a: number, b: number) => number>>,
    Expect<Equal<typeof window.divideSolution, (a: number, b: number) => number>>
]
