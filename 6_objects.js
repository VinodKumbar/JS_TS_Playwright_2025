// objects is collection of properties
// object is a collection of key-value pairs    
const person = {
    firstname: 'John',
    lastname : 'Wick',
    age: 30,
    isEmployed: true,
    fullName: function() {
       console.log(this.firstname +" " + this.lastname )// Method to return full name
       
    }
    // greet: function() {
    //     console.log(`Hello, my name is ${this.fullName()}`); // Method to greet the user
    //     return `Hello, my name is ${this.firstname} ${this.lastname}`; // Method to greet the user
    // }
};
// Accessing object properties

console.log("Accessing object properties:");    
console.log("Name: " + person.firstname); // Output: John
console.log(person.fullName()); // Output: John Wick
console.log("Age: " + person.age); // Output: 30        

console.log("Is Employed: " + person.isEmployed); // Output: true
// Calling the greet method 
//console.log(person.greet()); // Output: Hello, my name is John

// Adding a new property to the object  
person.city = 'New York'; // Adding a new property
console.log("City: " + person.city); // Output: New York
// Modifying an existing property
person.age = 31; // Modifying the age property  

console.log("Updated Age: " + person.age); // Output: 31
// Deleting a property from the object  
//delete person.isEmployed; // Deleting the isEmployed property
//console.log("Is Employed after deletion: " + person.isEmployed); // Output: undefined

person.gender = "Male"; // Adding a new property
console.log (person)    // Output: { name: 'John', age: 31, isEmployed: true, greet: [Function: greet],


console.log ('gender' in person) // Checking if a property exists in the object
// print all properties of the object
for (let key in person) {
    console.log(`${key}: ${person[key]}`); // Iterating over object properties
} // Output: name: John, age: 31, isEmployed: true, greet: [Function: greet], city: New York   


