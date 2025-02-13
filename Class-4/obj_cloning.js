// const person = { name: "neeraj", age: 26 };

// let clone = Object.assign({}, person);
// let clone1 = { ...person };
// person.age = 27;

// console.log(clone);
// console.log(clone1);
// console.log(person);

// const person = {
//   name: "neeraj",
//   age: 26,
//   size: {
//     height: 180,
//     weight: 100,
//     measurements: {
//       f: 10,
//     },
//   },
// };

// let clone = Object.assign({}, person);
// // let clone = { ...person };
// console.log(person.size === clone.size);

// person.size.height++; // 181

// console.log(clone.size.height); // 181

// BCZ Object.assign() or spread do shallow cloning

function deepCopy(input) {
  var res = {};
  if (typeof input !== "object") {
    return input;
  }

  for (let key in input) {
    res[key] = deepCopy(input[key]);
  }
  return res;
}

const person = {
  name: "neeraj",
  age: 26,
  size: {
    height: 180,
    weight: 100,
    measurements: {
      f: 10,
    },
  },
};

const clonePerson = deepCopy(person);
console.log(person.size === clonePerson.size); // false

person.size.height++; // 181
person.size.measurements.f = 30;

console.log(clonePerson.size.height); //180
console.log(clonePerson.size.measurements.f); //10
