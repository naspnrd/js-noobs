// document.querySelector("#grandParent").addEventListener("click", () => {
//   console.log("GrandParent Clicked!");
// });

// document.querySelector("#parent").addEventListener("click", () => {
//   console.log("Parent Clicked!");
// });

// document.querySelector("#child").addEventListener("click", () => {
//   console.log("Child Clicked!");
// });

// Order of Execution when cliked on Child Div
// Child Clicked!
// Parent Clicked!
// GrandParent Clicked!

// Order of Execution when cliked on Parent Div
// Parent Clicked!
// GrandParent Clicked!

// Capturing

// document.querySelector("#grandParent").addEventListener(
//   "click",
//   () => {
//     console.log("GrandParent Clicked!");
//   },
//   true
// );

// document.querySelector("#parent").addEventListener(
//   "click",
//   () => {
//     console.log("Parent Clicked!");
//   },
//   true
// );

// document.querySelector("#child").addEventListener(
//   "click",
//   () => {
//     console.log("Child Clicked!");
//   },
//   true
// );

// document.body.addEventListener(
//   "click",
//   () => {
//     console.log("Body Clicked!");
//   },
//   true
// );

// Order of Execution when GrandParent Div is Clicked
// GrandParent Clicked!

// Order of Execution when Child Div is Clicked
// GrandParent Clicked!
// Parent Clicked!
// Child Clicked!

// mix of capturing and bubbling phase

// document.querySelector("#grandParent").addEventListener(
//   "click",
//   () => {
//     console.log("GrandParent Clicked!");
//   },
//   true
// );

// document.querySelector("#parent").addEventListener(
//   "click",
//   () => {
//     console.log("Parent Clicked!");
//   },
//   false
// );

// document.querySelector("#child").addEventListener(
//   "click",
//   () => {
//     console.log("Child Clicked!");
//   },
//   true
// );

// Order of Execution on Click of Child Div
// GrandParent Clicked!
// Child Clicked!
// Parent Clicked!

// Example -2
// document.querySelector("#grandParent").addEventListener(
//   "click",
//   () => {
//     console.log("GrandParent Clicked!");
//   }, // event handler
//   true // capturing phase
// );

// document.querySelector("#parent").addEventListener(
//   "click",
//   () => {
//     console.log("Parent Clicked!");
//   },
//   false // bubbling phase
// );

// document.querySelector("#child").addEventListener(
//   "click",
//   () => {
//     console.log("Child Clicked!");
//   },
//   false // bubbling phase
// );

// Order of Execution on Click of Child Div
// GrandParent Clicked!
// Child Clicked!
// Parent Clicked!

// Order of Execution on Click of Parent Div
// GrandParent Clicked!
// Parent Clicked!

// stopPropagation()

document.querySelector("#grandParent").addEventListener(
  "click",
  () => {
    console.log("GrandParent Clicked!");
  },
  true
);

document.querySelector("#parent").addEventListener("click", (event) => {
  //   event.stopPropagation(); // stop the propagation
  console.log("Parent Clicked!");
});

document.querySelector("#child").addEventListener("click", (event) => {
  event.stopPropagation(); // stop the propagation
  console.log("Child Clicked!");
});

// Order of execution when child div clicked
// GrandParent Clicked!
// Child Clicked!
