// setInterval() is used to repeatedly execute a function or
// piece of code at specified intervals (in milliseconds)

// syntax

// setInterval(function, interval, ...args)
//   - function: it's a callback function to be executed
//   - interval: The time in milliseconds, between each execution of the function
//   - args: Additional arguments to pass to the function

let count = 0;

const intervalId = setInterval(() => {
  count++;
  console.log(`Interval count: ${count}`);
  if (count === 5) {
    clearInterval(intervalId);
  }
}, 1000);
