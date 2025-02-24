// setTimeout(() => {
//   console.log("first callback");
//   setTimeout(() => {
//     console.log("second callback");
//     setTimeout(() => {
//       console.log("third callback");
//       setTimeout(() => {
//         console.log("fourth callback");
//         setTimeout(() => {
//           console.log("fifth callback");
//           setTimeout(() => {
//             console.log("sixth callback");
//             setTimeout(() => {
//               console.log("seventh callback");
//               setTimeout(() => {
//                 console.log("eighth callback");
//               }, 2000);
//             }, 20000);
//           }, 2000);
//         }, 2000);
//       }, 2000);
//     }, 2000);
//   }, 2000);
// }, 2000);

// Steps to Make a Sandwich
// 1. Get bread
// 2. Take the bread and add veggies
// 3. If cheese is requested, add cheese to bread and veggies
// 4. if toast is requested, toast the sandwich, if not serve it
// 5. Ask for toppings and then serve the sandwich

// step 1: Function to get bread
function fnc1(fnc2) {
  let sandwich = []; // initialize the sandwich array with bread
  sandwich.push("bread");
  console.log("Sandwich so far: ", sandwich);
  fnc2(sandwich, fnc3);
}

// step 2: Function to take bread and add veggies
function fnc2(sandwich, fnc3) {
  // Add veggies to sandwich
  sandwich.push("veggies");
  console.log("Sandwich so far: ", sandwich);
  fnc3(sandwich, false, fnc4);
}

// step 3: function to add cheese if requested
function fnc3(sandwich, addCheese, fnc3) {
  if (addCheese) {
    sandwich.push("cheese");
  }
  console.log("Sandwich so far: ", sandwich);
  fnc4(sandwich, true, fnc5);
}

// step 4: Function to toast the sandwich if requested
function fnc4(sandwich, toast, fnc5) {
  if (toast) {
    sandwich.push("toasted");
  }
  console.log("Sandwich so far: ", sandwich);
  fnc5(sandwich);
}

// Step 5: Function to ask for toppings and then serve the sandwich
function fnc5(sandwich) {
  // define additonal toppings
  let toppings = ["leetuce", "tomato", "onion", "olives"];
  sandwich.push(...toppings);
  console.log("Sandwich so far: ", sandwich);
  console.log("Sandwich is ready to be served!");
}

// start the sandwich making process
fnc1(fnc2);

// Notes: Each function call depends on the completionof the previous function, leading to
// nested callbacks. This structure can quickly become hard to manage as more steps are added.
