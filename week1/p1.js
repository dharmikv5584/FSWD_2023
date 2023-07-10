function simulateAsyncOperation(callback) {
    "use strict";
  
    // Simulate an asynchronous operation by waiting for 2 seconds.
    setTimeout(function () {
      callback("The asynchronous operation has completed.");
    }, 2000);
  }
  
  simulateAsyncOperation(function (result) {
    console.log(result);
  });
  