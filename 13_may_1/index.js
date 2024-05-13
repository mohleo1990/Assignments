function combiningArrays(fruits, vegetables) {
  var groceries = [...fruits, ...vegetables];
  return groceries;
}

var fruits = ["apple", "banana", "orange"];
var vegetables = ["carrot", "broccoli", "spinach"];

console.log(combiningArrays(fruits, vegetables));
///////////////////////////////////////////////////
function cloningObjects(person) {
  var personCopy = { ...person };
  return personCopy;
}
var person = { name: "John", age: 30, address: "123 Main St" };
console.log(cloningObjects(person));
/////////////////////////////////////////////////////
function mergingObjects(student, course) {
  var studentWithCourse = { ...student, ...course };
  return studentWithCourse;
}

var student = { name: "Alice", age: 20 };
var course = { courseName: "Math", teacher: "Mr. Smith" };
console.log(mergingObjects(student, course));
//////////////////////////////////////////////////////
function combiningNestedArrays(array1, array2) {
  var combinedArray = [...array1, ...array2];
  return combinedArray;
}

var array1 = [
  [1, 2],
  [3, 4],
  [5, 6],
];
var array2 = [
  [7, 8],
  [9, 10],
  [11, 12],
];

console.log(combiningNestedArrays(array1, array2));
