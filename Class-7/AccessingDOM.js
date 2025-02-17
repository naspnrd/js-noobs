// Accessing Elements

// 1. Element By ID: -> This method retrieves an element by it's unique ID attribute

const elementById = document.getElementById("heading");

console.log({ elementById });

// 2. Element By ClassName -> This method returns a collection of HTML elements with
// specified class name

const elementByClassName = document.getElementsByClassName("title");

console.log(elementByClassName);

// 3. Element By Tag Name: This method returns a list of collections of HTML elements
// with specified tag name

const elementByTags = document.getElementsByTagName("h1");

console.log(elementByTags);

// 4. Query Selector: This method retrieves the first element that matches a specified
// CSS Selector

// const elementByQuerySelector = document.querySelector("#heading");
const elementByQuerySelector = document.querySelector(".title");

console.log(elementByQuerySelector);

// 5. Query Selector All: This method retrieves all element that matches a
// CSS Selector

// const elementByQuerySelector = document.querySelector("#heading");
const elementByQuerySelectorAll = document.querySelectorAll(".title");

console.log(elementByQuerySelectorAll);

elementByQuerySelectorAll.forEach((element) => {
  element.style.backgroundColor = "yellow";
  element.style.color = "black";
});

// 5. Accesssing Parent Node

const parentElement = elementById.parentNode;

console.log(parentElement);

// 6. Accessing Child Element ->

const childElement = parentElement.children;

console.log(childElement);

// 6. Access the next sibling

const nextSibling = elementById.nextElementSibling;

console.log(nextSibling);

// 7. Access the prev sibling

const prevSibling = elementById.previousElementSibling;

console.log(prevSibling);
