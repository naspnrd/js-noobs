// new Promise((resolve, reject) => {
//   setTimeout(() => resolve(1), 1000); // 1
// })
//   .then((val) => {
//     // 2
//     console.log(val); // 1
//     return val * 2;
//   })
//   .then((val) => {
//     // 3
//     console.log(val); // 2
//     return val * 2;
//   })
//   .then((val) => {
//     // 4
//     console.log(val); // 4
//     // whenever you are not returning anything explictly then
//     // implicitly Js returns undefined
//   })
//   .then((val) => {
//     // 5
//     console.log(val);
//   });

// // Example 2

// let promiseObj = new Promise((resolve, reject) => {
//   setTimeout(() => resolve(1), 1000); // 1
// });
// promiseObj.then((val) => {
//   console.log(val);
//   return val * 2;
// });
// promiseObj.then((val) => {
//   console.log(val);
//   return val * 2;
// });
// promiseObj.then((val) => {
//   console.log(val);
//   return val * 2;
// });

// Example
// Steps to Maka a sandwich
// 1. Get bread
// 2. Take the bread and add veggies
// 3. If cheeses is requested, add cheese to bread and veggies
// 4. If toast is requested, toast the sandwich; if not serve it.
// 5. Ask for toppings and then serve the sandwich

// Step 1: Function to get bread

function getBread() {
  return new Promise((resolve) => {
    let sandwich = [];
    sandwich.push("bread");
    console.log("sandwich so far: ", sandwich);
    resolve(sandwich);
  });
}

// Step 2: Functiuon to take the bread and add veggies

function addVeggies(sandwich) {
  return new Promise((resolve) => {
    sandwich.push("veggies");
    console.log("Sandwich so far: ", sandwich);
    resolve(sandwich);
  });
}

// Step 3: Function to add cheese if requested

function addCheese(sandwich, addCheese) {
  return new Promise((resolve, reject) => {
    if (addCheese) {
      sandwich.push("Cheese");
    }
    console.log("Sandwich so far: ", sandwich);
    resolve(sandwich);
    // reject(sandwich);
  });
}

// Step 4: Function to toast the sandwich if requested

function toastSandwich(sandwich, toast) {
  return new Promise((resolve) => {
    if (toast) {
      sandwich.push("toasted");
    }
    console.log("Sandwich so far: ", sandwich);
    resolve(sandwich);
  });
}

// Step 5: Function to ask for toppings and then serve the sandwich

function addToppingsAndServe(sandwich) {
  return new Promise((resolve) => {
    let toppings = ["lettiuce", "tomato"];
    sandwich.push(...toppings);
    console.log("Sandwich so far: ", sandwich);
    resolve(sandwich);
  });
}

// Start the sandwich-making process with Promises

// getBread()
//   .then(addVeggies)
//   //   .then((sandiwch) => addVeggies(sandiwch))
//   .then((sandwich) => addCheese(sandwich, false))
//   .then((sandwich) => toastSandwich(sandwich, true))
//   .then(addToppingsAndServe)
//   .catch((error) => {
//     console.error("in reject---", error);
//   });
//   .then((val) => console.log(val))
//   .catch((error) => {
//     console.error("in reject---", error);
//   });

// Example

const prom1 = new Promise((resolve) => {
  resolve(1);
});

const prom2 = new Promise((resolve) => {
  resolve(2);
});

const prom3 = new Promise((resolve) => {
  resolve(3);
});

const prom4 = new Promise((resolve) => {
  resolve(4);
  prom2
    .then((res) => console.log(res) /*mtask1 */) // prom2_2
    .then(() => {
      //mtask4
      prom3.then((res) => console.log(res)); // mtask5
    });
});

prom1.then((res) => console.log(res)); // mtask2
prom4.then((res) => console.log(res)); // mtask3

// Explanation
// Things to keep in mind:
// 1. Executors (the callbacks of new Promise()) are executed synchronously
// 2. Promise reactions are the callbacks of somePromise.then(onFulfilled, onRejected)
// 3. If somePromise is already settled(fulfilled or rejected), one of the reactions is immediately added to the
// microtask queue and executed later(based on if callstack is empty or not)
// 4. If somePromse is pending, the reactions are added to the internal list [[PromiseFulfullReactions]] and
// [[PromiseRejectReactions]] and enqueued later when and if a promise is settled

// steps

// Prom1, prom2 and prom3 are getting created and immediately fulfilled via resolve()
// The execute of prom4 runs synchronously(immediately);
// prom4 is fullfilled via resolve()
// since prom2 is already fulfilled, prom2.then() leads to logging 2 being added to the microtask queue.
// The method call .then() immediately returns a new pending promise prom2_2 to which another .then() adds a
// promise fulfill reaction
// prom1.then() leads to logging 1 being added to the microtask queue because prom1 is already fulfilled
// prom4.then() leads to logging 4 being added to the microtask queue because prom4 is already fulfilled
//mtask1 is executed and logs 2 and Its result fulfills prom2_2 whcih triggers the enqueuing of it's Promise
// reaction mtask4.
// mtask2 is executed and logs 1
// mtask3 is executed and logs 4
// mtask4 is executed : since prom3 is alreadt fullfilled, logging 3 is added to microtask queue(mtask5)
// mtask5 is executed and logs 3

// O/P
// 2
// 1
// 4
// 3
