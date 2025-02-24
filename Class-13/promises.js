// Promises in JS -> A promise in js is like a guarantee that something will happens in the future
// It is used to handle async operations
// such as Fetching data from a server, Reading a file, Waitinf for user input

// A promise has 4 states
// 1. Pending -> The operation is still in progress
// 2. Resolved(fullfilled) -> The operation is successful
// 3. Rejected -> The operation failed
// 4. Settled -> either the promise is fullfilled or rejected

// const promiseObj = new Promise((resolve, reject) => {
//   resolve(2);
//   //   reject(3);
// }).then((val) => {
//   console.log(val);
// });

// // console.log(promiseObj);

// Example

// const promiseObj = new Promise((resolve, reject) => {
//   console.log("Promise 1");
//   setTimeout(() => resolve(2), 2000);
//   console.log("Promise 2");
// }).then((val) => {
//   console.log(val);
// });

// Example

new Promise((resolve, reject) => {
  console.log(1);
  resolve(2);
}).then((val) => {
  console.log(val);
});
console.log(3);

// O/P
// 1
// 2
// 2

// Notes:  By using promises we can handle async operations more cleanly, avoiding callback hell
//  and making the code more readable and maintainable
