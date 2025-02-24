// // Exception handling allows you to manage errors gracefully. Instead of the entire
// program crashing when an error occurs you can catch the errors and handle it appropriately

// try ... catch statement
// it allows you to test a block of code for errors (try block) and handle those errors if they occur
// (catch block)

// without try catch block

// console.log("start");

// let jsonString = `{ name: "Neeraj", age: 30 `;
// let userInfo = JSON.parse(jsonString);
// console.log(userInfo);

// with try catch block
// console.log("end");

// with try catch block

console.log("start");

try {
  let jsonString = `{ "name": "Neeraj", "age": 30 `;
  //   let jsonString = `{ "name": "Neeraj", "age": 30} `;
  let userInfo = JSON.parse(jsonString);
  console.log(userInfo);
} catch (error) {
  // error object
  console.error({ error }, error.message);
} finally {
  console.log("running no matter what happens");
}

console.log("end");

// try and catch block does not work with promises it works with .then(), .catch(), .finally()
