// Using an object literal to define a person object
let person = {
    name: "John",
    age: 30,
    // Method to greet the person
    greet: function() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
};

// Accessing object properties using dot notation
console.log(person.name); // Output: John

// Accessing object properties using bracket notation
console.log(person['age']); // Output: 30

// Calling the greet method of the person object
console.log(person.greet()); // Output: Hello, my name is John and I am 30 years old.

// Adding new properties to the person object
person.address = "New York";
person['phone'] = '123-456-7890';

// Accessing the newly added properties
console.log(person.address); // Output: New York
console.log(person.phone); // Output: 123-456-7890

// Using a constructor function to define a Person object
function Person(name, age) {
    this.name = name;
    this.age = age;
    // Method to greet the person
    this.greet = function() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
}

// Creating instances of the Person object using the constructor function
let person1 = new Person("John", 30);
let person2 = new Person("Ron", 35);

// Accessing object properties of the instances
console.log(person1.name); // Output: John
console.log(person1.age); // Output: 30

console.log(person2.name); // Output: Ron
console.log(person2.age); // Output: 35

// Calling the greet method of the instances
console.log(person1.greet()); // Output: Hello, my name is John and I am 30 years old.
console.log(person2.greet()); // Output: Hello, my name is Ron and I am 35 years old.
