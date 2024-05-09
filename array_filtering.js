// Array Setup: Create an array named numbers with some random integer values.
var arr = [12,56,-8,0,1,99, 786, -569]
function filterArray(arr,cb){
// Inside the filterArray function, iterate over each element of the arr array and call the callback function on each element.
// Array Filtering: Use the returned values from the callback function to create a new array of filtered elements.
    var filteredArr = arr.filter(each=>cb(each))
// Return the filtered array
    return filteredArr
}
// Define a callback function named callback that takes an element of the arr array as an argument.
function callback(each){
// The callback function should check if the current element is even or odd and return true for even elements and false for odd elements.
// Returns true for even elements and false for odd elements
   return each % 2 === 0 
}
var result = filterArray(arr, callback)
// Display Results: Use console.log() to display the original array and the filtered array.
console.log(arr, result)