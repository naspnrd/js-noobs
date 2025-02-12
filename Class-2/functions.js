// function statement

// a(); // hoisting

// function a() {
//   console.log("a is called");
// }

// a();

// function expressions

// b(); // b is not a function

// var b = function () {
//   console.log("b is called");
// };

// b();

// Major diff b/w func statement vs func expression is hoisting, if we
// call function a before creating, it will work fine but when do same
// for function b is it will throw error, ie TypeError

// Named function expression

// var b = function xyz() {
//   console.log("b is called");
// };

// xyz(); // in this xyz is not created/no memory has been allocated to it in global
// scope but created as a local scope value

// var b = function xyz() {
//   console.log(xyz);
// };

// b();

// Arrow functions -> An arrow function expression is an anonymous function expression
// written with the fat(=>) arrow

// => (fat arrow)

// function statement/Normal function
// function sum(a, b) {
//   return a + b;
// }

// how to write same sum in arrow function

// var sum = (a, b) => {
//   return a + b;
// };

// one liner

// var sum1 = (a, b) => a + b;

// pure vs impure function

const add = (x, y) => x + y; // pure function

// console.log(add(2, 4)); // 6
// console.log(add(2, 4)); // 6
// console.log(add(2, 4)); // 6
// console.log(add(2, 4)); // 6
// console.log(add(2, 4)); // 6

let x = 2;

const add1 = (y) => {
  return (x += y);
};

console.log(add1(4));
console.log(add1(4));
console.log(add1(4));
console.log(add1(4));
console.log(add1(4));

let counter = 0;
function incrementCounter() {
  counter++;
  return counter;
}

console.log(incrementCounter());
console.log(incrementCounter());
console.log(incrementCounter());
