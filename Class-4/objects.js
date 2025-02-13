const person = {
  name: "Neeraj",
  age: 26,
  city: "Bangalore",
  "first Name": "Neeraj",
};

// uisng new Object

// const person1 = new Object();
// person1.name = "Neeraj";
// person1.age = 26;

// console.log(person);
// console.log(person1);

// How to accesss key-value from object

// Dot(.) Notation -> It requires the key be a valid identifier
// That implies:
// 1. Contains no spaces
// 2. Doesn't start with digit
// 3. Doesn't include special chars($, &, _ are allowed)

// console.log(person.age);
// console.log(person."first Name");

// Note: So every key internally converts to a string
// 2 square bracket  ([]) notation
// console.log(person["first Name"]);

// Property names limitations

// There is no limitation on property names. even reserved words can be treated as keys

let obj = {
  for: 1,
  let: 2,
  return: 3,
  test: undefined,
};

console.log(obj.for + obj.let + obj.return); // 6

// delete any property

// delete obj.for;

// console.log(obj);

// check if property is exists:
// in operator

// key in object

// console.log("let" in obj);
// console.log("for" in obj);

// console.log(obj.test);
// console.log("test" in obj); // true, the property exist

// console.log(obj.xyz);

// hasOwnProprty mEhtod

// console.log(obj.hasOwnProperty("return"));

// built-in object methods

// 1. Object.keys() -> returns an array of  object's enumerable properties

const movie = {
  title: "The Matrix",
  director: "Lana Wachowski",
  releaseYear: 1999,
};

const movieKeys = Object.keys(movie);

console.log(movieKeys);

// 2. Object.entries() -=> returns both key and value in form arrays

const movieEntries = Object.entries(movie);

console.log(movieEntries);

// 3. Object.values() -> returns an array of objects's value

const movieValues = Object.values(movie);

console.log(movieValues);
