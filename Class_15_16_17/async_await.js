// async and await are nothing just the syntactic sugar over promises

// async function f() {
//   return 1; // Promise.resolve(1)
// }

// f().then(console.log).catch(console.log);

// async keyword before a function ensures that the func returns a promise and wraps
// non promises in it.

// let value = await Promise; // only works inside async func

// async function f() {
//   let promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("done"), 1000);
//   });
//   let res = await promise; // wait until the promise resolves
//   console.log(res);
// }

// At await line function execution pauses at the line and resumes when promise settles with result becoming it's
// result
// await suspends the function execution until promise settles and resumew it with promise result.
// It's just a more elegant syntax of getting promise result than promise.then() and it's easier to read and
// write

// Example

// const p = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Promise resolved value!");
//   }, 10000);
// });

// async function handlePromise() {
//   console.log("Hello world");
//   const val = await p;
//   console.log("Hello javascript");
//   console.log(val);
//   const val2 = await p;
//   console.log("Hello javascript again");
//   console.log(val2);
// }

// handlePromise();

// O/P
// Hello world
// Hello javascript
// Promise resolved value!
//  Hello javascript again
// Promise resolved value!

// example

// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Promise resolved value 1!");
//   }, 10000);
// });

// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Promise resolved value 2!");
//   }, 5000);
// });

// async function handlePromise() {
//   debugger;
//   console.log("Hello world");
//   const val = await p1;
//   console.log("Hello javascript");
//   console.log(val);
//   const val2 = await p2;
//   console.log("Hello javascript again");
//   console.log(val2);
// }

// handlePromise();

// console.log("end");

// O/P

// Hello world
// end
// starts executing again after 10 seconds
// Hello javascript
// Promise resolved value 1!
// Hello javascript again
// Promise resolved value 2!

// Example

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise resolved value 1!");
  }, 5000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Promise resolved value 2!");
  }, 10000);
});

async function handlePromise() {
  try {
    console.log("Hello world");
    const val = await p1;
    console.log("Hello javascript");
    console.log(val);
    const val2 = await p2;
    console.log("Hello javascript again");
    console.log(val2);
  } catch (error) {
    console.log("error ---", error);
  }
}

handlePromise();

console.log("end");
