// let p1 = new Promise((resolve, reject) => {
//   //   resolve(1);
//   reject(1);
// });
// let p2 = 2; // non promise values are converted to promise only // Promise.resolve(2)

// let p3 = new Promise((resolve, reject) => {
//   //   setTimeout(() => resolve(3), 2000);
//   setTimeout(() => reject(3), 2000);
// });

// Promise.all () -> all or nothings
// if there is a case where we need to fetch data from multiple apis and process them
// only if all calls are successful then Promise.all() is a good option

// let promise = Promise.all(iterable);

// Promise.all() takes an iterable(usually an array of promises) & returns a new
// promise

// if any of the promise is rejected the promise returned by Promise.all() immediately with the rejected error

// Promise.all([p1, p2, p3]).then(console.log).catch(console.log);

// Promise.race()
// Similar to Promise.all(), but waits only for first settled(fulfilled or rejected) promise and
// gets it's result or error

// Promise.race([p1, p2, p3]).then(console.log).catch(console.log); // 1
// Promise.race([p2, p3]).then(console.log).catch(console.log); // 2

// Promise.any()
// Similar to Promise.race(), but waits only for the first fulfilled promise and gets its result. If all of the
// given promises are rejected, then returned promise is rejected with AggregateError -> a special error
// object that stores all promises errors in its errors(array) property

// Promise.any([p1, p2, p3]).then(console.log).catch(console.log); // 2
// Promise.any([p1, p3]).then(console.log).catch(console.log); // after 2 seconds 3 will be logged
// Promise.any([p1, p3])
//   .then(console.log)
//   .catch((errors) => {
//     console.log({ errors });
//     console.log(errors.constructor.name);
//     console.log(errors.errors);
//     console.log(errors.errors[0]);
//     console.log(errors.errors[1]);
//   }); // both rejected o/p will be

// Promise.allSettled()
// It taks an array of promises and returns a new promise that resolves after all of the given promises
// have either fulfilled or rejected with an array of objects with fields
// status -> value | reason
// value

// [{
//     status: 'fulfilled', value: result
// }
// {
//     status: 'rejected', reason: error
// }]

// Promise.allSettled([p1, p2, p3]).then(console.log).catch(console.log);

// Promise.resolve()
// to convert non promise value to promsie

Promise.resolve(1).then(console.log); // sucess/fulfilled

// Promise.reject() creates a rejected promise with error
Promise.reject(2).catch(console.log); // rejected
