const person = {
  name: "Neeraj",
  age: 26,
  isStudent: false,
  address: {
    street: "Bengaluru",
    city: "Bengaluru",
    country: "IN",
  },
  hobbies: ["traveling", "bide rides", "playing games"],
  hasPets: null,
};

// console.log(person);

// const jsonStringified = JSON.stringify(person);

// console.log(jsonStringified);

// limitations of JSON.stringify()

// 1. Circular reference

// const obj = {};

// obj.circularRef = obj;

// try {
//   const jsonStringified = JSON.stringify(obj);
//   console.group(jsonStringified);
// } catch (error) {
//   console.group(obj);
//   console.log("Error", error.message);
// }

// 2. Non-Serializable Values and Function

// const person = {
//   name: "Neeraj",
//   age: 26,
//   isStudent: false,
//   address: {
//     street: "Bengaluru",
//     city: "Bengaluru",
//     country: "IN",
//   },
//   hobbies: ["traveling", "bide rides", "playing games"],
//   hasPets: null,
//   greet: function () {
//     console.log("hello ", this.name);
//   },
//   undefinedVal: undefined, // Non-Serializable Value
// };

// console.log(person);

// const jsonStringified = JSON.stringify(person);

// console.log(jsonStringified);

// JSON.parse()
//  -> does reverse of the JSON.stringify() does
// simply converts JSON string into an object

// const parseObj = JSON.parse(jsonStringified);

// console.log(parseObj);

// const person = `{
//   "name": "Neeraj",
//   "age": 26,
//   "isStudent": false,
//   "hobbies": ["traveling", "bide rides", "playing games"],
//   "hasPets": null
// }`;

// console.log(person);

// console.log(typeof person);

// console.log(JSON.parse(person));

// limitations of JSON.parse()

// 1. Invalid JSON

// const jsonString = '{"name": "Neeraj", "age": 30}';

// try {
//   const obj = JSON.parse(jsonString);
//   console.log(obj);
// } catch (error) {
//   console.error(error.message);
//   // TODO: for invalid json
// }
