function employeeInformation(employees) {
  var { name: secondEmployeeName, department: secondEmployeeDepartment } =
    employees[1];

  return { secondEmployeeName, secondEmployeeDepartment };
}

const employees = [
  { name: "John Doe", age: 30, department: "HR", salary: 50000 },
  { name: "Jane Smith", age: 28, department: "Finance", salary: 60000 },
  { name: "Alex Johnson", age: 35, department: "IT", salary: 70000 },
];

console.log(employeeInformation(employees));

// /////////////////////
function averageSalary(employees) {
  var sum = 0;

  for (var each of employees) {
    var { salary } = each;
    sum += each.salary;
  }

  return sum / employees.length;
}

console.log(averageSalary(employees));

//////////////////

function thirdEmployeeInfo(employees) {
  var {
    name: thirdEmployeeName,
    age: thirdEmployeeAge,
    salary: thirdEmployeeSalary,
  } = employees[2];
  var bonus = thirdEmployeeSalary * 0.1;

  return `Employee: ${thirdEmployeeName}, Age: ${thirdEmployeeAge}, Salary: ${thirdEmployeeSalary}, Bonus: ${bonus}`;
}

console.log(thirdEmployeeInfo(employees));
