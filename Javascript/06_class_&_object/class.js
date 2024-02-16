// Defining the Person class
class Person {
    // Constructor method to initialize object properties
    constructor(name, age) {
        this.name = name; // Assigning the 'name' parameter to the 'name' property of the object
        this.age = age; // Assigning the 'age' parameter to the 'age' property of the object
    }  
}

// Creating instances of the Person class
let obj1 = new Person("John", 30);
let obj2 = new Person("Ron", 35);

// Accessing object properties and printing them
console.log(obj1.name); // Output: John
console.log(obj1.age); // Output: 30

console.log(obj2.name); // Output: Ron
console.log(obj2.age); // Output: 35

// Defining the Home class
class Home {
    // Constructor method to initialize object properties
    constructor(name, age) {
        this.name = name; // Assigning the 'name' parameter to the 'name' property of the object
        this.age = age; // Assigning the 'age' parameter to the 'age' property of the object
    }  

    // Method to greet with the person's name and age
    greet() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
}

// Creating an instance of the Home class
let obj3 = new Home("Harry", 21);

// Calling the greet method and printing the greeting message
console.log(obj3.greet()); // Output: Hello, my name is Harry and I am 21 years old.
