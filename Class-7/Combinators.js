const descendantElements = document.querySelectorAll("#container .content");

console.log(descendantElements);

const childElements = document.querySelectorAll("#container > .content");

console.log(childElements);

const adjacentSiblingElements = document.querySelectorAll(".title + .content");

console.log(adjacentSiblingElements);

const generalSiblingElements = document.querySelectorAll(".title ~ .content");

console.log(generalSiblingElements);
