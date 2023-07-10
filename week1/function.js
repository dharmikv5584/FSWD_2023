function findMinMaxSalary(salaries) {
    if (salaries.length === 0) {
      return null; // Return null if the array is empty
    }
  
    var minSalary = salaries[0];
    var maxSalary = salaries[0];
  
    for (var i = 1; i < salaries.length; i++) {
      if (salaries[i] < minSalary) {
        minSalary = salaries[i];
      }
  
      if (salaries[i] > maxSalary) {
        maxSalary = salaries[i];
      }
    }
  
    return {
      minSalary: minSalary,
      maxSalary: maxSalary
    };
  }
  
  // Example usage:
  var salaryArray = [25234, 35111, 5257, 46550, 67800];
  var result = findMinMaxSalary(salaryArray);
  
  console.log("Minimum Salary:", result.minSalary);
  console.log("Maximum Salary:", result.maxSalary);
  