// const arr = ["Neeraj", "Chaudhary"];

// const firstName = arr[0];
// const lastName = arr[1];

// const [firstName, lastName] = arr;
// console.log(firstName, lastName);

// const nestedArr = [1, [2, 3], 4];

// const [a, [b, c], d] = nestedArr;

// console.log(a, b, c, d);

// spread operator(...)
// const arr = [1, 2, 3];
// console.log(...arr);

// const first = [1, 2];
// const second = [3, 4];

// const third = [...first, ...second];
// console.log(third);

// function sum(a, b, c) {
//   return a + b + c;
// }

// console.log(sum(...arr));

const arr = [1, 2, 3, 4, 5];

const [a, b, ...rest] = arr;
console.log(a, b, rest);
