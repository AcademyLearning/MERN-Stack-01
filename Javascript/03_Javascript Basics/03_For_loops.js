// Loops allow you to repeat a block of code a specific number of times.

// Syntax for standard for loop:
// for (initialization; condition; increment/decrement) {
//     // code to be executed 
// }

console.log("Standard for loop:");
for (let i = 1; i <= 10; i = i + 1) {
    console.log(i);
}

// Syntax for for-in loop:
// for (variable in object) {
//     // code to be executed
// }

console.log("\nFor-in loop:");
// Iterates through each key-value pair in the person object and prints them.
let person = {
    name: "John",
    age: 30,
    job: "developer"
};

for (let key in person) {
    console.log(key + " : " + person[key]);
}

// Syntax for for-of loop:
// for (variable of object) {
//     // code to be executed
// }

console.log("\nFor-of loop:");
// Iterates through each element in the numbers array and prints them.
let numbers = [1, 2, 3, 4, 5];

for (let number of numbers) {
    console.log(number);
}

// Syntax for forEach loop:
// array.forEach(function(currentValue, index, arr), thisValue)
// Executes a provided function once for each array element.

console.log("\nforEach loop:");
// Iterates through each element in the numbers array and prints them.
numbers.forEach(function(number) {
    console.log(number);
});
