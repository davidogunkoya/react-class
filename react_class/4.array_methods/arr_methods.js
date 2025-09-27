/*ARRAY METHODS
An array method are built in functions in javascript
 that let you add, remove, find or change items in an array.
 They act like tools for arrays
 Some examples of array methods amd their functions are;
 push()- it is used to add values to the end of an array*/
//  for example
let nums = [1, 2];
nums.push(3);
console.log(nums); //outputs [1, 2, 3]
// pop()-it is used to remove an item at the end of an array

let numpop = [1, 2, 3];
numpop.pop();
console.log(numpop); // outputs [1, 2]

//unshift()-its used to add an item to the start
let num = [2, 3];
num.unshift(1);
console.log(num); // outputs [1, 2, 3]

//shift()-to remove from the start
let num2 = [1, 2, 3];
num2.shift();
console.log(num2); // outputs [2, 3]

// map()- to transform each item
let numbers = [1, 2, 3];
let doubled = numbers.map(n => n * 2);
console.log(doubled); // outputs [2, 4, 6]

//filter()- keeps only some items
let numbers1 = [1, 2, 3, 4];
let evens = numbers1.filter(n => n % 2 === 0);
console.log(evens); // keeps the even numbers in the array

//find()- finds the first match
let numbers2 = [5, 10, 15];
let result = numbers2.find(n => n > 8);
console.log(result); // outputs 10

//forEach()- does something for each item
let colors = ["red", "green", "blue"];
colors.forEach(c => console.log(c));
// red
// green
// blue
//includes()- it checks if values exist and tells you if its true or not

let fruits = ["apple", "banana"];
console.log(fruits.includes("apple")); // true
console.log(fruits.includes("cherry")); // false

//join()- turns something to a string
let fruits2 = ["apple", "banana", "cherry"];
console.log(fruits2.join(", ")); // shows output "apple, banana, cherry"