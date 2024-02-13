// Syntax for while loop:
// while (condition){
//     // code to be executed
// }

console.log("While loop:");

// Example 1:
// Prints numbers from 1 to 10 using a while loop.
let i = 1;

while (i <= 10) {
    console.log(i);
    i = i + 1;
}

// Example 2:
// Prompts the user to enter 'yes' or 'no' until a valid input is provided.
let input = "";

while (input !== "yes" && input !== "no") {
    input = prompt("Please enter 'yes' or 'no' ");
}

console.log("User input:", input);
