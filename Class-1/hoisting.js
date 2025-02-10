// console.log(x);
// var x = 10;
// console.log(x);
// foo();
// function foo() {
//   console.log("Hello, foo here");
// }

/* var, let and const

1. var has function/local scope and let and const have block scope
2. Variables defined with var keyword hoisted at the top while let and const
present in temporal dead zone.
3. Diff between let and const is let defined variables can be reassigned while const can't

*/

// let a = 10;
// a = 20;

// const b = 20;
// b = 15;

// Temporal Dead Zone, -> It is timespan between variable creation and it's initializaton
// where they can't be accessed

console.log(a);
let a = 10;

// Note: Js only hoists declarations not initialisations
