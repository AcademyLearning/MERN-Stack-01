// var vs let vs const

// var: Declares a variable with function or global scope.
var x = 10;
console.log("x =", x); // Output: x = 10

// let: Declares a variable with block scope.
let y = 20;
console.log("y =", y); // Output: y = 20

// const: Declares a constant variable with block scope.
const PI = 3.14;
console.log("PI =", PI); // Output: PI = 3.14

// Error examples:
// var:
// var x = 10;
// var x = 20; // Error: 'x' has already been declared.

// let:
// let y = 20;
// let y = 30; // Error: Identifier 'y' has already been declared.

// const:
// const PI = 3.14;
// PI = 3.14159; // Error: Assignment to constant variable.
