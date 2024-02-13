// Loops with arrays

// Using a standard for loop to iterate over the array elements.
// var myArray = [1, 2, 3, 4, 5];
// for (var i = 0; i < myArray.length; i++) {
//     console.log(myArray[i]);
// }

// ForEach Method: Executes a provided function once for each array element.
var myArray = [1, 2, 3, 4, 5];
myArray.forEach(function my_function(element) {
    console.log(element);
});

// For..of loop: Iterates over the array elements directly.
var myArray = [1, 2, 3, 4, 5];
for (var element of myArray) {
    console.log(element);
}
