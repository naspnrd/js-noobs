// // Declaration

// // let arr = new Array();

// // let arr1 = []; // preferred way

// let fruits = ["Apple", "Mango"];
// //              0         1

// console.log(fruits[0]); // Apple
// console.log(fruits[1]); // Mango
// console.log(fruits[20000]); // undefined

// fruits[8] = "Banana";

// console.log(fruits);
// console.log(fruits.length);

// An array can store elements of any type

// const arr = [
//   "Apple",
//   1,
//   2,
//   {
//     name: "neeraj",
//   },
//   false,
// ];

// console.log(typeof arr); // object

// // Note: Almost everything in js is object

// // Array.isArray()

// console.log(Array.isArray(arr));

// Methods

// Pop, push

// let arr = [1, 2, 3];

// // arr.push(4);
// arr.pop();
// console.log(arr);

// shift and unshift

// shift() method removes the first element from an array and returns that element.
// the remaining element's indices are updated accordingly

// const fruits = ["Apple", "banana", "Mango"];

// const removedFruit = fruits.shift();
// console.log(removedFruit);
// console.log(fruits);

// var words = ["one", "two", "three", "four"];

// for (let i = 0; i < words.length; i++) {
//   console.log(words[i]);
//   if (words[i] === "two") {
//     words.shift();
//   }
// }

// unshift
// this method adds one or more elements to the beginning of an array and returns the
// new length of the array

// const fruits = ["Apple", "banana"];

// const newLength = fruits.unshift("mango", "kiwi");

// console.log(newLength);
// console.log(fruits);

// splice vs slice

// splice
// how to delete an element from an array?
// The arrays are objects, so we can try to use delete(operator)

// const fruits = ["Apple", "banana", "Mango"];

// delete fruits[1];

// console.log(fruits);
// console.log(fruits.length);

// const fruits = ["Apple", "banana", "Mango"];

// arr.splice() can do everything: insert, remove and replace elements

// Array.splice(start, [deleteCount, elem1, elem2 ... elemN])

// It modifies arr starting from the index start, :remove deleteCount elements
// and then insert elem1, elem2 ... elemN at their place. Returns the array of
// removed elements

// let arr = ["we", "are", "learning", "javaScript"];
// // arr.splice(1, 1); // from index 1 remove 1 element

// arr.splice(0, 3, "Let's", "dance"); // from index 0 remove first 3 elements and replace them
// // with another
// console.log(arr);

// Negative indices are allowed

// let arr = [1, 2, 5];
//         0  1  2
//        -3 -2 -1

// arr.splice(-1, 0, 3, 4); // from index -1 remove 0 element and insert 3 and 4

// console.log(arr); // [1, 2, 3, 4, 5]

// arr.splice(-1, 1, 3, 4); // from index -1 remove 1 element and insert 3 and 4

// console.log(arr); // [1, 2, 3, 4]

// arr.splice(-1, 2, 3, 4); // from index -1 remove 2 element and insert 3 and 4

// console.log(arr); // [1, 2, 3, 4]

// arr.splice(-2, 2, 3, 4); // from index -2 remove 2 element and insert 3 and 4

// console.log(arr); // [1, 3, 4]

// slice method

// arr.slice([start], [end])

// It returns a new array copying to it all items from index start to end(not including end). Both start and end can be
// negative, in that case position from array end is assumed

const nums = [1, 2, 3, 4, 5];
//            0  1  2  3  4
//           -5 -4 -3 -2 -1

// const slicedNumbers = nums.slice(1, 4); // Extract elements from index 1 to 3

// console.log(slicedNumbers); // [2, 3, 4]

const slicedNumbers = nums.slice(-2);

console.log(slicedNumbers); // [4, 5]
