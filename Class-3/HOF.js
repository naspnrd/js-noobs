// function x() {
//   console.log("hello");
// }

// function y(x) {
//   x();
//   return x;
// }

// const radius = [3, 1, 2, 4];

// const calculateArea = function (radius) {
//   const out = [];
//   for (let i = 0; i < radius.length; i++) {
//     out.push(Math.PI * radius[i] * radius[i]);
//   }
//   return out;
// };

// console.log(calculateArea(radius));

// const calculateCircumference = function (radius) {
//   const out = [];
//   for (let i = 0; i < radius.length; i++) {
//     out.push(2 * Math.PI * radius[i]);
//   }
//   return out;
// };

// console.log(calculateCircumference(radius));

// optimisation using HOF

// const radius = [3, 1, 2, 4];

// const area = function (radius) {
//   return Math.PI * radius * radius;
// };

// const circumference = function (radius) {
//   return 2 * Math.PI * radius;
// };

// // HOF
// const calculate = function (radius, logic) {
//   const out = [];
//   for (let i = 0; i < radius.length; i++) {
//     out.push(logic(radius[i]));
//   }
//   return out;
// };

// console.log(calculate(radius, area));
// console.log(calculate(radius, circumference));

// map, filter, reduce, forEach method

// 1. Array.prototype.map() -> It is used to do transformation on whole array

// const arr = [5, 1, 3, 2, 6];

// Double -> [10, 2, 6, 4, 12]
// function double(x) {
//   return 2 * x;
// }
// Triple -> [15, 3, 9, 6, 18]

// const output = arr.map(double);
// const output = arr.map(function (x) {
//   return 2 * x;
// });

// const output = arr.map((item, index) => 2 * item);
// console.log(output);

// Array.prototype.filter() -> It is used to filter values inside the array based on given condition

// const arr = [5, 1, 3, 4];

// function isOdd(x) {
//   return x % 2;
// }

// function isEven(x) {
//   return x % 2 === 0;
// }

// // const output = arr.filter(isOdd);
// const output = arr.filter(isEven);

// console.log(output);

// Array.prototype.reduce() -> It takes the values in an array from left to right and applies functionality
// such that it changes the array into one singular value.

// find the sum of all elements

// const arr = [5, 1, 3, 2, 6];

// function sum(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum;
// }
// console.log(sum(arr));

// const output = arr.reduce(function (accumulator, currentValue, index) {
//   accumulator += currentValue;
//   return accumulator;
// });

// console.log(output);

// // forEach

// let res = 0;
// arr.forEach(function (item, index) {
//   res += item;
// });
// console.log(res);

// const arr = [5, 1, 3, 2, 6];

// const output = arr.map((item) => item * 2).filter((item) => item > 6); // [10, 2, 6, 4, 12] > 6 => [10, 12]

// console.log(output);
