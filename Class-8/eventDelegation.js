// Event Delegation is when a parent element automatically add event listeners
// to it's children elements. The events listener will fire anytime an event is
// triggered on the child due to event propagation(event bubbling)

// Q. Why would you use event delegation?
// Event Delegation allows you to avoid adding event listenrs to each nodes, instead
// event listener is attched to one parent. The event listener analyses bubbled
// events to find a match on child elements

document.querySelector("#category").addEventListener("click", (event) => {
  // event.target -> refers to point what is clicked
  // event.currentTarget -> refers where event has been attached
  // event.target.id -> id for li
  if (event.target.tagName === "LI") {
    window.location.href = `/Class-8/${event.target.id}.html`;
  }
});

// some events which can't be bubbled up -> blue, focus, etc...
