// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

let employeesArray = [] //intitiate empty array in which to collect employee data

const employeeInfo = { //initiate object literal in which to collect and group individual employee data
  firstName: '',
  lastName: '',
  annualSalary: 0,
};

//establish variables to be levied in the function
let empFirstName = ``
let empLastName = ``
let empSalary = ``

const collectEmployees = function() { //begin process of collecting group of employee data
  
  let nextEmployee = true; //provide condition needed to run while loop

  while (nextEmployee) { //collect employee data
        
    empFirstName = window.prompt(`Enter employee first name:`); //input employee first name
    if (!empFirstName) {
      return;
    } else {
      employeeInfo.firstName = empFirstName;
      console.log(`First name recorded: ${employeeInfo.firstName}`);
    };
    empLastName = window.prompt("Enter employee last name:"); //input employee last name
    if (!empLastName) {
      return;
    } else {
      employeeInfo.lastName = empLastName; //store user input to object literal employeeInfo
      console.log(`Last name recorded: ${employeeInfo.lastName}`);
    };
    empSalary = window.prompt("Enter employee's annual salary (use only numbers):"); //input employee salary
    if (!empSalary) {
      return;
    } else {
      Number(empSalary); //ensure salary is stored in memory as a number type
      employeeInfo.annualSalary = empSalary; //store user input to object literal employeeInfo
      console.log(`Salary recorded: ${employeeInfo.annualSalary}`);
    };
    employeesArray.push(employeeInfo); //push completed object into array for storage
    console.log(`Info stored in array: ${employeeInfo}`); //confirm work
    console.log(`New array: ${employeesArray}`); //confirm result
    
    nextEmployee = window.confirm("Employee added! Would you like to add another?"); //prompt for next employee, reassign nextEmployee variable to false when complete to end while loop
    console.log(`While loop reactivated? ${nextEmployee}`)
  }; //end of while loop function code

}; //end of collectEmployees function

addEmployeesBtn.addEventListener("click", collectEmployees => {
  console.log(collectEmployees);
}); //add event listener to button in order to activate function

//STOPPED HERE------------->>>>>>>>>>>>>>>>>>>>>
// Display the average salary
const displayAverageSalary = function() {
  // TODO: Calculate and display the average salary

}; //end of display average salary code

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
  
}; //end of select random employee code

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
