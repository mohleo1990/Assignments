// Define a function named getUserData that simulates an asynchronous API request to fetch user data
// It takes two arguments: id (user ID) and callback (a callback function)
function getUserData(id, cb) {
  // Simulate the asynchronous behavior using setTimeout
  // After a delay of 2 seconds, call the callback function and pass a dummy user object with properties like id, name, and email
  setTimeout(() => cb({ id: id, name: "mohleo", email: "mohleo@yahoo.com" }), 2000);
}

// Define a function named displayUser that takes a user object as an argument and displays the user details using console.log()
function displayUser(obj) {
  console.log(obj);
}

// Call the getUserData function with a user ID (1) and the displayUser function as the callback
getUserData(1, displayUser);
