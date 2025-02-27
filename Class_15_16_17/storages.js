// Local Storage
// it allows web apps to store data without an expiration date.
// maximum storage capacity is 5-10 MB, depending on browser

// localStorage.setItem("key", "value");
// localStorage.setItem("name", "Neeraj");

// console.log(localStorage.getItem("name"));

// localStorage.removeItem("key");

// localStorage.clear();

// Session Storage
// is similar to local storage, but the data stored in session storage is only available
// for the duration of the user's sessin. Once the user closes their browser or
// the session expires, the data is deleted

// sessionStorage.setItem("name", "Neeraj");

// console.log(sessionStorage.getItem("name"));

// sessionStorage.removeItem("name");

// sessionStorage.clear();

// How to store objects as strings in local/session storage

// loca/session storage only accepts the data as in the form of strings.

// const user = {
//   name: "Arpit",
//   age: 22,
// };

// localStorage.setItem("user", JSON.stringify(user));

// cookies
// cookies are small pieces of data stored by web browsers on a user's device at the
// request of web servers. They are sent back unchanged by the browser each time it accesses that server.
// Cookies allows the server to remember specific user information, like maintaining user sessions, remembering
// preferencing and tracking user behaviour
