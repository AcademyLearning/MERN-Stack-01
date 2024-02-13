// Syntax

// if-else statement:
// Executes different blocks of code based on a condition.

// Example:
let age = 17;

if (age > 18){
    console.log("You are eligible");
} else {
    console.log("You are Not eligible");
}

// if-else if ladder:
// Allows checking multiple conditions and executing corresponding code blocks.

// Example:
let y = 10;

if (y > 15){
    console.log("y is greater than 15");

} else if (y > 20){
    console.log("y is greater than 10 but less than or equal to 15");

} else if (y > 5) {
    console.log("y is greater than 5 but less than or equal to 10");
} else {
    console.log("y is less than or equal to 5");
}

// Switch-case statement:
// Checks the value of an expression against a list of cases and executes corresponding code blocks.

// Example:
let x = "orange";

switch(x) {
    case "apple":
        console.log("x is an apple");
    break;

    case "banana":
        console.log("x is a banana");
    break;

    case "orange":
        console.log("x is an orange");
    break;
}
