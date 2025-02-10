// function abc() {
//   console.log("print b----", b); // local scope
// }

// var b = 5; // global scope or parent scope

// abc();

// function abc() {
//   function bcd() {
//     console.log("print b----", b);
//   }
//   bcd();
// }

// // var b = 5;

// abc();

// bcd -> abc -> global scope(GEC) // scope chain

// Lexical Env

// A lexical env is a DS that holds identifier-variable mapping
// (here identifier refers to the name) of variable/func and the
// variable is the reference to the actual object)

/*
LexicalEnv = {
    Identifier: <value>
}
*/

// or in simply terms
// Lexical env => local memory + lexical env of it's parent

const a = 10; // Global Variable

function abc() {
  var b = 20;
  let e = 15;
  console.log(a);
  console.log(b);

  {
    let f = 30;
    var g = 30;
  }

  console.log(f);
}
console.log(a);
abc();
// console.log(b);

{
  let c = 10;
  var d = 10; // scope of var is function/local scope
}

// console.log(c);
console.log(d);

// var, let or const
a = 20; // global variable/scope
