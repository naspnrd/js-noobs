// const fruits = ["Banana", "Orange", "Apple", "Mango"];

// fruits.sort();

// console.log(fruits);

// const fruits = ["Banna", "Bani"];

// fruits.sort();

// console.log(fruits);

// const nums = [31, 10, 5, 2, 4];

// nums.sort();

// console.log(nums);

// function compare(a, b) {
//   if (a < b) return -1;
//   if (a > b) return 1;
//   return 0;
// }

/*

>0 -> sort b before a
<0 -> sort a before b
=== 0 -> keep original order of a and b
*/

function compare(a, b) {
  return a - b;
}

const nums = [31, 10, 5, 2, 4];

nums.sort(compare);

console.log(nums);
