const fs = require('fs');
const readline = require('readline');

// Create a readline interface to read input from the user
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Create an empty array to store employee data
const employees = [];

// Ask the user for employee information
function askEmployeeInfo() {
  rl.question('Enter employee name (or type "done" to finish): ', (name) => {
    if (name.toLowerCase() === 'done') {
      // User has finished entering employee information
      saveEmployeeData();
    } else {
      rl.question('Enter employee age: ', (age) => {
        rl.question('Enter employee department: ', (department) => {
          // Create an employee object
          const employee = {
            name: name,
            age: parseInt(age),
            department: department
          };
          
          // Add the employee to the array
          employees.push(employe);

          // Ask for the next employee information
          askEmployeeInfo();
        });
      });
    }
  });
}

// Save employee data to a file
function saveEmployeeData() {
  const jsonData = JSON.stringify(employees, null, 2);

  fs.writeFile('employee-data.json', jsonData, 'utf8', (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log('Employee data saved to employee-data.json');
    }

    // Close the readline interface
    rl.close();
  });
}

// Start asking for employee information
askEmployeeInfo();
