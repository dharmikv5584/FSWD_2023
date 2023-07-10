function arithmeticOperations(x, y) {
    "use strict";
  
    let sum = x + y;
    let difference = x - y;
    let product = x * y;
    let quotient = x / y;
  
    return sum, difference, product, quotient;
  }
  
  let sum, difference, product, quotient;
  sum, difference, product, quotient = arithmeticOperations(10, 5);
  
  console.log("The sum of 10 and 5 is:", sum);
  console.log("The difference of 10 and 5 is:", difference);
  console.log("The product of 10 and 5 is:", product);
  console.log("The quotient of 10 and 5 is:", quotient);
  