// ClassName and ClassList (it's an array representation of className)

const btn = document.getElementById("btn");

// console.log({ btn });
// btn.className += " active-btn";

// btn.className += " blue-btn";

// btn.classList.add("active-btn", "hello", "blur-btn", "abc");

// btn.classList.remove("hello", "abc");

// console.log(btn.classList.contains("active-btn")); // true
// console.log(btn.classList.contains("hello")); // false
// console.log(btn.classList);

// toggle method -> to remove and add certain class means let's say you have active class
// if active class exist then remove and if not then add that's it

// btn.classList.toggle("active");
// btn.classList.toggle("active");
// console.log(btn.classList);

// btn.classList.add("primary");

// btn.classList.toggle("primary");

// btn.classList.add("secondary");

// const buttons = document.querySelectorAll("button");
// console.log(buttons);

// buttons[0].classList.add("primary");
// buttons[1].classList.add("secondary");

// innerHTML, innerText and textContent

// 1. innerText -> this property sets or returns the text content of the specified
// node and it's descendants. It represents the rendered text of an element excluding
// hidden text(display: none)

// const exampleDiv = document.getElementById("example");
// console.log(exampleDiv.innerText);

// 2. innerHTML -> this property sets or returns the HTML content(including tags) of an element
// It represents the entire HTML structure of an element including it's children

// console.log(exampleDiv.innerHTML);

// exampleDiv.innerHTML = "<p>This is <strong>inner</strong> HTML content</p>";

// 3. textContent -> this property sets or returns the text content of specified node
// and it's descedants. It represents the text content of an element, including all
// text nodes and whitespaces

// const exampleDiv = document.getElementById("example");
// console.log(exampleDiv.textContent);

// Diff
// 1. innerText: Renders text as it would appear visually, exluding hiddent elements and their content

// 2. innerHTML: Renders content as HTML, including HTML tags and their associayted styling and structure

// 3. textContent: Renders content as text including all text nodes and whitespaces, but exluding HTML tags

// Usage:

// 1. innerText: Useful when you only need to access or modify the visible text content of an element

// 2. innerHTMl: Useful when you need to manipulate HTML structure of element, including adding, removing
// or replacing elemets

// 3. textContent: Useful when you need to access or modify all text content within an element, including
//  text nodes and whiteSpaces

// style -> this property sets or returns the inline styles of an element as a CSSStyleDeclaration Object

// Accessing style Properties

const exampleDiv = document.getElementById("example");

console.log(exampleDiv.style);
console.log(exampleDiv.style.color);
console.log(exampleDiv.style.fontSize);

exampleDiv.style.border = "1px solid black";

// Methods
// 1. getAttribute() -> method retrieves the value of specified attribute of an element
console.log(exampleDiv.getAttribute("style"));

// 2. setAttribute() --> this method sets or updates the value of a specified attribute

exampleDiv.setAttribute("class", "active");
// 3. hasAttribute() -> checks whether an element has a specific attribute returning
// true or false
console.log(exampleDiv.hasAttribute("data-id"));

// 4. removeAttribute() -> this method removes a specified attribute from an element
exampleDiv.removeAttribute("class");
