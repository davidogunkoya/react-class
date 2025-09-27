/*Arrow Functions
An arrow function is basically shortcuts for writing or creating a function.
But they are generally can't be used everywhere like normal funtion syntax
, because they don't have their own this they jaust grab this from where they
 were created so it might not work as expected especially in classes. They
 also use const instead of normal function 
 For example:*/
 // Normal funtion syntax
 function add(a,b){
    return a + b;
 }
 // Arrow function syntax
 const add1 = (a,b)=>
    a + b;
 //when to use arrow functions
 /*if you want shorter syntax
 -you dont care about this or arguments 
 // when NOT to use arrow functions
 -You need this
 - you need the arguments object 
 - you are writing a class method.*/
//  FOR EXAMPLE
const person = {
  name: "Alex",
  sayName: () => {
    console.log(this.name);
  }
};

person.sayName(); // undefined since arrow functions has no this
// When you need arguments
const arrowFn = () => {
  console.log(arguments); //error,doesn't exist
};
arrowFn(1, 2, 3);
function normalFn() {
  console.log(arguments); // works
}
normalFn(1, 2, 3); // outputs the arguments passed,[1, 2, 3]

