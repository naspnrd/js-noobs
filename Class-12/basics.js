// sync programming
// console.log("Task 1");
// console.log("Task 2");
// console.log("Task 3");

// O/P

// Task 1
// Task 2
// Task 3

// Async programming

// console.log("Task 1");
// setTimeout(() => {
//   console.log("Task 2");
// }, 1000); // 1000 ms = 1 sec // time in milliseconds
// console.log("Task 3");

// O/P

// Task 1
// Task 3
// Task 2

// Example
// console.log("One!");
// console.log("Two!");

// function logThree() {
//   console.log("Three!");
// }

// function logThreeAndFour() {
//   logThree();
//   console.log("Four!");
// }

// logThreeAndFour();

// Example

// if this function that some time like 2 seconds
function longRunningTask() {
  let count = 0;
  // 1e9 => 10^9
  for (let j = 0; j < 1e9; j++) {
    count++;
  }
  console.log("Long task done!");
}

function importantTask() {
  console.log("Important!");
}

longRunningTask();
importantTask();
