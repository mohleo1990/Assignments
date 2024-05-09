// Create a function named calculate that takes two numbers as arguments.
function calculate(a, b, cb) {
  // Define a callback function named operation that takes three arguments: num1, num2, and callback.
  function operation(num1, num2, cb) {
      // Inside the operation function, call the callback function and pass num1 and num2 as arguments to perform an arithmetic operation.
      return cb(num1, num2);
  }
  
  // The calculate function should call the operation function twice, once with addition and once with multiplication as the callback functions.
  console.log(operation(a, b, cb)); // Display the results of the calculations using console.log().
}

// Define a callback function for addition
var sum = (a, b) => a + b;

// Define a callback function for multiplication
var product = (a, b) => a * b;

// Test the calculate function with addition
calculate(1, 2, sum);

// Test the calculate function with multiplication
calculate(1, 2, product);

// Observations:
// 1. Flexibility: easy to pass functions as arguments to other functions. It adds dynamic behavior.
// 2. Modularity: By following separation of concerns and defining callbacks independently, I can write more maintainable and well-organized code.