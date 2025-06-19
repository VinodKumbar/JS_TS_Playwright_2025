module.exports =  class Person{

    // Constructor to initialize name and age
    // constructor is method that is called when an object is created
    constructor(name, age, location) {
        this.name = name;
        this.age = age;
        this.location = location;
    }

    greet() {
        console.log(`Hello, my name is ${this.name}, I am ${this.age} years old. And I am from ${this.location}.`);
    }


}

// let person = new Person('John', 30, "Canada");
// let person2 = new Person('Jane', 25, "USA");
// // Creating an instance of the Person class 
// // and initializing it with name and age
// // let person = new Person('John', 30, "Canada"); // Creating an instance of the Person class
// // let person2 = new Person('Jane', 25, "USA"); // Creating another instance of the Person class
// console.log(person) // Output: Person { name: 'John', age: 30, location: 'Canada' }
// console.log(person2) // Output: Person { name: 'Jane', age: 25, location: 'USA' }
// // Accessing properties and methods of the Person class 
// person.greet(); // Output: Hello, my name is John and I am 30 years old.   

