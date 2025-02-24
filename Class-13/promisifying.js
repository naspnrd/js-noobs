function getCurrentPosition() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

getCurrentPosition()
  .then((val) => console.log(val)) // .then(onFulfilled, onRejected)
  .catch((error) => console.log(error)); // internally catch also calles the .then method only
// with .then(_, onRejected) ,onRejected => (error) => console.log(error) (handler)
