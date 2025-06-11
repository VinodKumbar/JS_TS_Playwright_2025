// block of code to be executed
function greet(name) {
    console.log("Hello, " + name + "!");
}


// Using the greet function to greet a user
greet("Alice"); // Output: Hello, Alice!    
greet("Bob"); // Output: Hello, Bob!
// Using the greet function to greet another user   
greet("Charlie"); // Output: Hello, Charlie!
// Using the greet function to greet yet another user   
greet("Diana"); // Output: Hello, Diana!
// Using the greet function to greet a user with a different name
console.log("Using the greet function to greet a user with a different name");
greet("Eve"); // Output: Hello, Eve!    


function add(a, b) {
    return a + b; // Function to add two numbers and return the result
}   
// Using the add function to add two numbers
console.log("Using the add function to add two numbers");
console.log(add(5, 10)); // Output: 15
console.log(add(20, 30)); // Output: 50



// funtion do not have name called anonymous function
// Using an anonymous function to greet a user  
var greetAnonymous = function(name) {
    console.log("Hello, " + name + "! This is an anonymous function.");
};  
// Calling the anonymous function to greet a user
greetAnonymous("Frank"); // Output: Hello, Frank! This is an anonymous function.

let multiply = function(a, b) {
    return a * b; // Function to multiply two numbers and return the result
}   
// Using the multiply function to multiply two numbers
console.log("Using the multiply function to multiply two numbers"); 
console.log(multiply(5, 10)); // Output: 50
console.log(multiply(20, 30)); // Output: 600

//fat arrow function
let divide = (a, b) => {
    return a / b; // Function to divide two numbers and return the result
}   
// Using the divide function to divide two numbers
console.log("fat arrow -> Using the divide function to divide two numbers");
console.log(divide(50, 10)); // Output: 5
console.log(divide(100, 20)); // Output: 5

let sumOfNumbers = (x,y)=> x+y; // Fat arrow function to sum two numbers
// Using the sumOfNumbers function to sum two numbers   
console.log("fat arrow -> Using the sumOfNumbers function to sum two numbers");
console.log(sumOfNumbers(10, 20)); // Output: 30