const school = {
  name: "XYZ School",
  establishYear: 1990,
  departments: {
    math: { teachers: 5, students: 150 },
    science: { teachers: 4, students: 120 },
    history: { teachers: 3, students: 100 },
    english: { teachers: 4, students: 130 },
  },
  courses: ["math", "science", "history", "english"],
  students: [
    {
      name: "Alice",
      className: "Grade 5",
      scores: { math: 95, science: 88, history: 85, english: 92 },
    },
    {
      name: "Bob",
      className: "Grade 4",
      scores: { math: 80, science: 78, history: 92, english: 85 },
    },
    {
      name: "Charlie",
      className: "Grade 5",
      scores: { math: 88, science: 90, history: 78, english: 88 },
    },
    {
      name: "Diana",
      className: "Grade 4",
      scores: { math: 92, science: 85, history: 88, english: 90 },
    },
  ],
};

function countCalculation({
  departments: {
    math: { teachers: mathTeachersCount },
    history: { teachers: historyTeachersCount },
    math: { students: mathStudentsCount },
    history: { students: historyStudentsCount },
  },
}) {
  var Output = 
   {
    mathTeachersCount,
    historyTeachersCount,
    mathStudentsCount,
    historyStudentsCount,
  };
  return Output
}

console.log(countCalculation(school));
console.log("//////////////////////");

function findTopStudent({ students }, courseName) {
  var temp = [...students];
  temp.sort(
    (
      { scores: { courseName: courseNameA } },
      { scores: { courseName: courseNameB } }
    ) => {
      return courseNameB - courseNameA;
    }
  );
  return temp[0];
}

console.log(findTopStudent(school, "math"));
console.log("//////////////////////");

var art = { teachers: 2, students: 50 };
function addNewDept(school, newDepartment) {
  var Output = { ...school };
  Output.departments = { ...school.departments, art: newDepartment };
  return Output;
}

console.log(addNewDept(school, art));
console.log("//////////////////////");

function highestStudentCountDepartment(bs) {
  return Object.entries(bs.departments).sort(
    (a, b) => b[1].students - a[1].students
  )[0][0];
}

console.log(highestStudentCountDepartment(school));
console.log("//////////////////////");

function generateGreeting(name, language = "English") {
  var greetings = {
    English: "Hello",
    Spanish: "Hola",
    French: "Bonjour",
  };
  var language = greetings[language];
  return `${language}, ${name}!`;
}

console.log(generateGreeting("Alice"));
console.log(generateGreeting("Bob", "Spanish"));
console.log(generateGreeting("Charlie", "French"));
