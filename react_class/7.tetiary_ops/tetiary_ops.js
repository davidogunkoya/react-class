/*TENIARY OPERATOR 
It's basically a shortcut for writing if else statements in javascript
For Example */
condition ? valueIfTrue : valueIfFalse
//Using normal if else statement
let age = 18;
let canVote;

if (age >= 18) {
  canVote = "Yes";
} else {
  canVote = "No";
}
console.log(canVote);// checks if the can vote and picks the right answer
// in this case yes
// With ternary operator
let voteAge = 18;
let canVote1 = age >= 18 ? "Yes" : "No";
console.log(canVote); // Yes
// use ternary for simple conditions
/* it is not advisable to use it in complex logic
 so it is easy to read*/