/*
Destructuring is basically a way of pulling values out of arrays and objects
 and putting them directly into variables in a short and clean way.
 FOR EXAMPLE
 Using arrays normally*/
 let numbers = [10, 20, 30];
let a = numbers[0];
let b = numbers[1];
let c = numbers[2];
console.log(a, b, c);// outputs 10 20 30

//Using Array destructuring:
let numbers1 = [10, 20, 30];
let [i, j, k ] = numbers1;
console.log(i, j, k);// outputs 10 20 30

//Now with objects normally
let person = {name:"David", age:17};
let name = person.name;
let age = person.age;
console.log(name, age); // David 17

// with object destructuring
let user = {name:"David", age:17}
let {name1, age1} = user;
console.log(name, age);// David 17

