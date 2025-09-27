/*VARIABLES
A variable in js are data containers and labels for data values
in modern js they are declared using let and const. 
They are idenfied by unique names called identifiers e.g x, y, z.
They must begin with either letters,underscore or signs.
identifiers or names are case sensitive and js keywords cannot be used
The let variable can be changed later in the program while const cannot
 be changed
 you can also use the var keyword and it works almost like let but it 
 is not adviced
FOR EXAMPLE
*/
let age = 15;// can be changed
const MyName = "David";// cannot be changed

console.log(age);
console.log(MyName);
Myname = "Peter" //error
/*Variables are useful when you want to 
- store values
- change values
- reuse values */
/*Differences between var and let
var- function scoped or global if not in a 
function(can be changed from anywhere)
while let is block scoped inside{}
E.G */
if (true) {
  var x = 10;
  let y = 20;
}

console.log(x); //10 (var escapes the block)
console.log(y); //Error (let is block-scoped)
/*Var can alsobe redeclared in the same scope while let can't */
var name = "David";
var name = "Ayo";//allowed

//let age = 15;
//let age = 16;//Error