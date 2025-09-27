/*A Module is a file that contains some code like variables
functions and classes that you can reuse in other files.
It helps keep related code together, helps avoud writing the
same code in multiple places.
EXAMPLE OF EXPORTING AND IMPORTING MODULES*/
//Exporting funuctions for example lets say this is in calc.js
export function add(a, b) {
  return a + b;
}
export function sub(a, b) {
    return a - b;
}
// while in another file app.js
//importing functions from math.js
import { add, subtract } from './math.js';

console.log(add(5, 3));      // 8
console.log(subtract(5, 3)); // 2

//TYPE OF EXPORTS
//Named exports- export mulitiple things with {}.
// Default exports- export one default thing usually the main thing without{}.
// youcan also combine both methods
// file: shapes.js
export default function circleArea (r) {
  return Math.PI * r * r;
}
export const squareArea = s => s * s;

//in another file e.g math.js
import circleArea, { squareArea } from './shapes.js';

console.log(circleArea(5));  // 78.54
console.log(squareArea(4));