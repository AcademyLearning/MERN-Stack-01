// Map: The map method is used to create a new array with the result of a callback function called on each element.

// var myArray = [1 , 2 , 3 , 4, 5];

// var multipliedArray = myArray.map(function(element) {
//     return element * 2;
// });

// console.log(multipliedArray);

// Filter: The filter method is used to filter an array based on a condition.

var myArray = [1 , 2 , 3 , 4, 5];

var evenNumbers = myArray.filter(function(element) {
    return element % 2 === 0;
});

console.log("Filtered array (even numbers):", evenNumbers);

// Reduce: The reduce method is used to reduce an array to a single value.

// acc = accumulator
// cur = current element

var sum = myArray.reduce(function(acc, cur) {
    return acc + cur;
}, 0);

console.log("Sum of array elements:", sum);
