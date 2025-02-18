// function callMe(button) {
//   console.log("button Clicked", button);
//   button.classList.toggle("primary");
//   button.draggable = !button.draggable;
// }

// function createBoldElement() {
//   let bold = document.createElement("b");
//   bold.innerText = "Neeraj Chaudhary";
//   const container = document.querySelector("#container");
//   container.appendChild(bold);
// }

// const students = [
//   {
//     name: "Arpit",
//     age: 21,
//   },
//   {
//     name: "Kareena",
//     age: 22,
//   },
//   {
//     name: "Aniruddhsinh",
//     age: 24,
//   },
//   {
//     name: "Himanshu ",
//     age: 22,
//   },
// ];

// function createStudents(button) {
//   const container = document.querySelector("#container");
//   students.forEach((student) => {
//     const card = document.createElement("div");
//     card.setAttribute("id", "card");
//     card.setAttribute("class", "card");
//     const name = document.createElement("span");
//     const age = document.createElement("span");
//     name.innerText = student.name;
//     age.innerText = student.age;
//     card.append(name, age);

//     container.appendChild(card);
//   });
//   console.log(button);
//   button.disabled = true;
// }

// addEventListener()
// element.addEventListener(eventType, callbackFunction [, options])

// const btn = document.getElementById("btn");

// function handleClick() {
//   console.log("Button Clicked!");
// }

// btn.ddEventListener("click", handleClick);

// removeEventListener()
// element.removeEventListener(eventType, callbackFunction [, options])

// btn.removeEventListener("click", handleClick);

// const span = document.querySelector("span");

// span.addEventListener("click", function () {
//   console.log("span clicked");
// });

// span.addEventListener("click", function () {
//   console.log("span clicked again");
// });

// Event Object
/* 
The Event Object is an object that contains info about an event that occurred on a DOM
element. When an event is triggered, the browser creates an Event Object and passes it
as an argument to the event Handler function

We get bydefault event properties for event listeners


Properties and Methods: 
type: Returns the type of event that occurred (e.g click, keydown, blur, etc..)
target: Returns the element that triggered the event(the target of the event)
currentTarget: Returns the element where event listener is attached(current target of event)
preventDefault(): Prevents the default action associated with the event from occuring.
stopPropagation(): Prevents further propagation of the current event in capturing and
bubbling phases.

*/

// const button = document.getElementById("btn");

// button.addEventListener("click", function (event) {
//   console.log(event);
//   console.log("Event Type:", event.type);
//   console.log("Target Event:", event.target);
//   console.log("Current Target Event:", event.currentTarget);
//   event.preventDefault();
//   event.stopPropagation();
// });

// const input = document.querySelector("input");

// input.addEventListener("focus", function () {
//   console.log("focused");
// });

// input.addEventListener("blur", function () {
//   console.log("blurred");
// });

// input event fired synchronously when the value of <input> <textArea>, etc. element
// is chaged
// input.addEventListener("input", function () {
//   console.log("input event triggered");
// });

// Change event -> fires when value of input element changes and element looses focus

// input.addEventListener("change", function () {
//   console.log("change event triggered");
// });

// Use Case of input and change event

/* 
Input Event is suitable for real time validation, dynamic search suggestions or any
scenario requiring instant feedback
While Change Event is suitable for final validations, processing input after completion,
or updating data once user has finished intracting with input
*/
