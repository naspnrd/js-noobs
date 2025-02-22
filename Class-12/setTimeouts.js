// console.log("start");

// setTimeout(() => {
//   console.log("callback called after 5000ms");
// }, 5000);

// console.log("end");
// assumptions
// 1 million line of code takes 10 seconds to execute

// O/P
// start
// end
//callback called after 5000ms // after 10 seconds =>
// 5sec for timer and 5sec for waiting in queue as 1
// million line of code were executing took 10 minutes in total

// when setTimeout delay as 0

// console.log("start");

// setTimeout(() => {
//   console.log("callback called after 0ms");
// }, 0);

// console.log("end");

// O/P
// start
// end
// callback called after 0ms

// Note:  setTimeout() doesnot guarantee is will execute exactly after timer expires but
// it guarantees that it will only execute after/once timer is expire and not before that

// syntax

// setTimeout is used to execute a function or piece of code after a specified delay (in milliseconds)
// 1 sec = 1000ms

// setTimeout(function, delay, ...args)
//   - function: it's a callback function to be executed
//   - delay: The time in milliseconds, the timer should wait before executing the function
//   - args: Additional arguments to pass to the function

// console.log("start");

// setTimeout(() => {
//   console.log("callback called after 2000ms");
// }, 2000);

// console.log("end");

// O/P
// start
// end
// after 2 seconds
// callback called after 2000ms

// syntax
// setTimeout(function, delay, arg1, arg2, ...)

function greet(name, message) {
  console.log(`Hello ${name}, ${message}`);
}

const timerId = setTimeout(greet, 5000, "Arpit", "Welcome to JS Module");
console.log(timerId);
clearTimeout(timerId);

// O/P
// After 5 seconds
// Hello Arpit, Welcome to Js Module
