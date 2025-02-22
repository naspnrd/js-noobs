// Geolocation API
// allows user to provide their location to web applications

// document.querySelector("button").addEventListener("click", () => {
//   console.log("button clicked");
// });
navigator.geolocation.getCurrentPosition(
  (postion) => console.log(postion), // success callback
  (error) => console.log(error) // errorCallback
);
