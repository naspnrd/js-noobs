// const str = "Hello";

// console.log(str[1]); // 2

// console.log("hello" == "hello"); // true

// console.log("5" == 5); // true (loose equality or coerced)

// console.log("5" === 5); // false (strict)

// string methods

// 1. length

// const str = "Neeraj";

// console.log(str.length);

// 2. slice(startIndex, endIndex) method -> extract a section of a string, and return
// it as a new string, without including the endIndex value

// const str = "Hello, World!";
// //           0123456789101112

// console.log(str.slice(7, 12));

// replace(searchValue, replacevalue) vs replaceAll(searchValue, replacevalue)

// const str = "Hello, World!";

// console.log(str.replace("World", "Universe"));

// console.log(str.replaceAll(/l/g, "0")); // g -> flag that serach for all search

// toUpperCase() vs toLowerCase()

// // toUpperCase() converts a string to uppercase

// const str = "neeraj";

// console.log(str.toUpperCase());

// toLowerCase() converts a string to lowercase

// const str = "NEERAJ";

// console.log(str.toLowerCase());

// includes
// -> check if a searchValue is present in string or not -> returns boolean value

// let str = "neeraj";

// console.log(str.includes("ra")); // true
// console.log(str.includes("ar")); // false

// trim() -> removes whiteSpaces from both ends of a string

// const str = "       Hello, World!       ";

// console.log(str.trim());

// charAt(index) vs charCodeAt(index)

// charAt returns the character at the specified index in a string

// let str = "Hello";
// console.log(str.charAt(1)); // e  === sstr[1]

// // charCodeAt(index) - returns ascii value
// console.log(str.charCodeAt(1)); //

// split(separator, limit(optional)) -> splits a string into an array of substrings based on the
// specified separator and optional limit
// const str = "apple,banana,orange";

// console.log(str.split(""));
