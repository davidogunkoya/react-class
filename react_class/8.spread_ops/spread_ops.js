/*SPREAD OPERATOR
The spread operator (...) is a shortcut that unpacks (spreads out) 
items from an array, object, or string.
it can be used to copy arrays and objects, combine arrays, merge objects,
 and also sprea strings*/
 // COPYING ARRAYS
 let nums = [1, 2, 3];
let copy = [...nums];
console.log(copy); // Shows-[1, 2, 3]

//copying objects
let user = {name:"Dara", age:15};
let copyUser = {...user};
console.log(copyUser); // { name: "Dara", age: 15 }

//spread with strings
let word = "Hi!";
let letters = [...word];
console.log(letters); // breaks it into individual characters

// Merging objects
let user1 = {name:"Samuel"};
let info = {age:20, city:"Ilishan"};
let merged = { ...user1, ...info };
console.log(merged); // {name:"Samuel", age:20, city:"Ilishan"}


