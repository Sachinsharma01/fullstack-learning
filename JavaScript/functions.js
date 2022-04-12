// functions
/**
 * 1. function
 * 2. fat arrow function / arrow function
 * 3. anonymous function
 */

// ? function
/**
 * syntax :
 *          function function_name() {statements}
 */

function add(a, b) {
  console.log(a + b);
  console.log("this is an add function");
}
add(10, 20);

//? fat arrow / arrow function
/**
 * syntax :
 *          const function_name = () => {statements}
 */

const addition = (a, b) => {
  console.log(a + b);
};
addition(10, 30);

/**
 *
 () => {
     console.log("Hello");
   }
   *!anonymous function can only be passed as the callbacks (function inside a function)
 */

// setTimeout(() => {
//   console.log("Hello");
// }, 3000);


// string templates
let val = 20;
let s = `hello ${val} world`;
let s1 = "hello " + val + " world"
let s2 = 'hello ' + val + ' world'
console.log(s)
console.log(s1)
console.log(s2)

//! React => A javascript Library ----> (SPA -> Single Page Application)
// Angular => Framework built on top of JS


// NPM => Node Pacakage Manager
// NPX => ''    ''       Executecd  .