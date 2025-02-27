//fetch () function
// It is used to initiate an HTTP request and returns a promise that resolves to
// the response object

// Request -> the first parameter of fetch () function is required and it should be
// either an URL string or request object
// second paramater for the fetch () is optional
// methods
// headers
// body
// mode
// cache
// signal:  An AbortSignal object instance: allows you to communicate with a
// fetch request and abort it if desired

// Response
// response.json()-> it also returns promise
// response.text() ->  it also returns promise
// etc....

// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((res) => res.json())
//   .then(console.log);

// async function makeApiCall() {
//   const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//   const data = await response.json();
//   console.log({ data });
// }

// makeApiCall();

// post API Call

async function makeApiCall() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      title: "hello",
      body: "Neeraj",
      userId: 1,
    }),
  });
  const data = await response.json();
  console.log({ data });
}

makeApiCall();
