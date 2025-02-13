// function a() {
//   console.log(this);
// }
// a();

// "use strict";
// function a() {
//   console.log(this); // undefined
// }
// a(); // undefined
// console.log(this); // window(global object)

// Pitfall

// const numbers = {
//   numA: 5,
//   numB: 10,
//   sum: function () {
//     console.log(this === numbers); // true
//     function calculate() {
//       console.log(this === numbers); // false
//       return this.numA + this.numB; // NaN
//     }
//     return calculate(); // function invocation
//   },
// };

// // method invocation
// numbers.sum(); // NaN

// solution-1 -> preserving the context

// const numbers = {
//   numA: 5,
//   numB: 10,
//   sum: function () {
//     const context = this;
//     console.log(this === numbers); // true
//     function calculate() {
//       console.log(context === numbers); // true
//       return context.numA + context.numB; // 15
//     }
//     return calculate(); // function invocation
//   },
// };

// // method invocation
// console.log(numbers.sum()); // 15

// solution -2 using arrow functions

// const numbers = {
//   numA: 5,
//   numB: 10,
//   sum: function () {
//     console.log(this === numbers); // true
//     const calculate = () => {
//       console.log(this === numbers); // true
//       return this.numA + this.numB; // 15
//     };
//     return calculate(); // function invocation
//   },
// };

// // method invocation
// console.log(numbers.sum()); // 15

// METHOD
// const calc = {
//   num: 0,
//   increment() {
//     console.log(this);
//     console.log(this === calc); // true
//     this.num += 1; // 1 // 2
//     return this.num;
//   },
// };

// // method invocation

// calc.increment(); // 1 // method invocation
// calc.increment(); // 2

// const func = calc.increment;
// console.log(func()); // ?

// arrow functions

// const obj = {
//   a: 10,
//   x: function () {
//     console.log(this);
//   },
//   y: () => {
//     console.log(this);
//   },
// };

// obj.x();
// obj.y();

// const y = () => {
//   console.log(this);
// };
// y();

const obj = {
  a: 10,
  x: function () {
    console.log(this);
    const y = () => {
      console.log(this);
    };
  },
};
