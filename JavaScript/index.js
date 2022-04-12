// LEARN JAVASCRIPT

// hello world
// console.log("Hello World!!");

// Variables
/*
  1 => let -> for local variables
  2 => var -> global variables
  3 => const -> constant data
 */
//? we cannot the update the value of constant...
//* constant must initialized at the time of declaration
//! declare is to define the variable
//! initialize is assigning a value to the variable

// const a = 10;
// // a = 20   -----> Not Possible
// console.log(a)
for (let i = 0; i < 10; i++) {
  console.log(i + " " + i * i);
}

/* 
*
* *
* * *
* * * *
* * * * *


* * * * *
* * * *
* * *
* * 
* 

1 2 3 4
1 2 3
1 2
1

1
1 2
1 2 3
1 2 3 4
*/

// DataTypes
/**
 * 1 => Number ----> 1, -2, 0.10, -0.20
 * 2 => boolean ----> true, false
 * 3 => String -----> 'string', "string"
 * 4 => Object -----> { key : value } 
 */

let string = "10";
let string2 = 10 + string;

console.log(string2);

//! String --> Number we will use parseInt() function

let st = Number(string, 2);
let result = st + 10;
console.log(result);

//boolean

let a = true;
let b = false;

//object

let obj = { name: "Sachin", age: 20 };
let event = {target: {value: "sachin"}}
console.log(event.target.value)
let arr = Object.keys(obj)
console.log(arr)
console.log(arr.length)