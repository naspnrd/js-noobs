console.log(5 == "5"); // true (Number 5 is converted to string "5")

// console.log(1 == true); // true (Boolean true is converted to Number 1)

// console.log(0 == false); // true (Boolean false is converted to Number 0)

// console.log(null == undefined); // true (null and undefined are treated as null)

// console.log(0 == null); // false

// console.log(null == null); // true

// strict equality

console.log(5 === "5"); // false (Number 5 is not equal to string "5")

console.log(1 === true); // false (Number 1 is not equal to boolean true)

console.log(0 === false); // false (Number 0 is not equal to boolean false)

console.log(null === undefined); // false (null is not equal to undefined)

console.log(0 === null); // false

console.log(null === null); // true
