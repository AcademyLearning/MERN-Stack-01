// Primitives and Objects

// Primitives are basic data types in JavaScript.

// Numbers represent numerical values, like 10 or 3.14.
// Strings represent text, like "hello" or 'world'.
// Booleans represent true or false.
// Null represents the absence of a value.
// Undefined represents a variable that has been declared but not assigned a value yet.

// Primitives are immutable, meaning they cannot be changed after creation.
// For example:

let x = 10; // x is assigned the number 10
console.log("Before: x =", x); // Output: Before: x = 10
x = 20; // now x is assigned the number 20
console.log("After: x =", x); // Output: After: x = 20

// Objects

// Objects are more complex data types in JavaScript.

// They represent real-world objects or abstract concepts.
// Objects are made up of key-value pairs.
// The keys are strings and the values can be any data type, including primitives and other objects.

// Unlike primitives, objects are mutable, meaning they can be changed after creation.
// For example:

let obj = { // defining an object with properties
    name: "John", // key "name" with value "John"
    age: 30 // key "age" with value 30
};

console.log("Before: obj =", obj); // Output: Before: obj = { name: 'John', age: 30 }
obj.age = 31; // changing the value of the "age" property to 31
console.log("After: obj =", obj); // Output: After: obj = { name: 'John', age: 31 }
