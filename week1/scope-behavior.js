function scopeWithVar() {
  var myVariable = "Hello";
}

scopeWithVar();
console.log(myVariable); // Output: ReferenceError: myVariable is not defined
function scopeWithLet() {
  let myVariable = "Hello";
}

scopeWithLet();
console.log(myVariable); // Output: ReferenceError: myVariable is not defined
function scopeWithConst() {
  const myVariable = "Hello";
}

scopeWithConst();
console.log(myVariable); // Output: ReferenceError: myVariable is not defined
