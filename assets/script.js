// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Major thanks to Clarissa Mobley & Zach Polof for their help in refactoring my code (lines 57-65 & 74)!

let employeesArray = []; //intitiate empty array in which to collect employee data

//function to collect employee data from user input
const collectEmployees = function() { 

  //provide condition needed to run while loop
  let nextEmployee = true; 

  //WHILE LOOP to collect employee data
  while (nextEmployee) { 
  
    //EMPLOYEE INFO INPUT CODE BLOCK
    let firstName = prompt('Employee First Name');
       while (firstName === '') {
        if (firstName === null) {
          break;
        } else {
        alert(`Please enter a name in the box provided.`);
        firstName = prompt('Employee First Name');
        }};
      if (firstName === null) {
        console.log(`Operation cancelled at First Name entry`);
        nextEmployee = false;
        break;
      };
      console.log(`First name entered: ${firstName}`);

    let lastName = prompt('Employee Last Name');
    while (lastName === '') {
      if (lastName === null) {
        break;
      } else {
      alert(`Please enter a name in the box provided.`);
      lastName = prompt('Employee First Name');
      }};
    if (lastName === null) {
      console.log(`Operation cancelled at Salary entry`);
      nextEmployee = false;
      break;
    };
      console.log(`Last name entered: ${lastName}`);
      
    let salary = prompt(`Enter salary`);
    //provide for if salary is not a number
      while (isNaN(salary)) { 
        if (salary === null) {
        break;
      } else {
        alert(`Salary should be a numerical quanitity in US currency. Please enter only whole numbers. Do not use special characters such as $ or , or .`);
        salary = prompt(`Enter salary`);
        salary = parseFloat(salary);
      }
    };
    if (salary === null) {
      console.log(`Operation cancelled at Salary entry`);
      nextEmployee = false;
      break;
    };
    salary = parseFloat(salary)
    console.log(`Salary entered: $${salary}`);    

    //collect employee info variables in an object
    let employeeInfo = { 
      firstName: firstName,
      lastName: lastName,
      salary: salary,
    };
    console.log(`Employee Info = ${employeeInfo}`);

    //add completed object to array
    employeesArray.push(employeeInfo); 
    console.log(`Employee info pushed to array: ${employeeInfo}`);
    
    //prompt to add another employee
    const goAgain = confirm(`Add another?`);
      (!goAgain) ? (nextEmployee = !nextEmployee) : (nextEmployee = nextEmployee)
  
  //end of While loop
  };
  
  //send array info to storage in memory
  return employeesArray; 

//end Collect Employees function
};

// Display the average salary
let totalSalary = 0
const displayAverageSalary = function() {
  // TODO: Calculate and display the average salary
for (let i=0; i<employeesArray.length; i++) {
  totalSalary = (totalSalary += employeesArray[i].salary)
};
let averageSalary = (totalSalary / employeesArray.length);
return console.log(`Average Salary: $${averageSalary}`);
}; //end of display average salary code

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
  let randomEmployee = employeesArray[Math.floor(Math.random() * employeesArray.length)];
  return console.log(`Congratulations, ${randomEmployee.firstName} ${randomEmployee.lastName}, you have been selected!`);
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