// const regEx = new RegExp();

// const regEx1 = /pattern/gim;

// flags
// 1. i -> search become case-insensitive

// 2. g -> search for all matches(global)

// 3. m -> multiline mode

let num = 1;

let str = "Neeraj2";

let regEx = new RegExp("[0-9]");

console.log(regEx.test(num));
console.log(regEx.test(str));
