// Inheritance in JavaScript
/*

1. Inheritance is the Main pillar in Object Oriented Programming
2. One class can be inherit / acquire the properties, methods of anoter class
3. The class which inherits the properties of other is knows as SUbclass ( derived class, child class)
4. The class whose properties are inherited is known as Superclass or Parent class
5. Must user extends keyword to inherit to parent class
6. Must use require method 
7. If use constructor in subclass, then first constructor should be the parent class, constructor using Super keyword
*/

const Person = require('./7_classes'); // Importing the Person class
class Pet extends Person{

    constructor(name, age, location, petType) {
        super(name, age, location); // Calling the parent class constructor
        this.petType = petType; // Adding a new property for the pet type
    }

    greet() {
        console.log(`Hello, my name is ${this.name}, I am ${this.age} years old. I am a ${this.petType} and I am from ${this.location}.`);
    }   

}
    let pet = new Pet('Buddy', 5, 'USA', 'Dog'); // Creating an instance of the Pet class
    pet.greet(); // Output: Hello, my name is Buddy, I am 5 years old. I am a Dog and I am from USA.
