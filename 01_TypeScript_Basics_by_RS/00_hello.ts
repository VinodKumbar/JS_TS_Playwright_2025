console.log('Hello, TypeScript!');
console.log('Welcome to TypeScript Basics!');


let myName : string = "John Wick";
console.log(myName);


let age : number = 55;
console.log(`My name is ${myName} and I am ${age} years old.`);


let numberArray : number[] = [1, 2, 3, 4, 5];
console.log('Number Array:', numberArray);

let data : any = "This can be anything";
data = 42; // Now it's a number
data = { key: "Keanu Reeves" }; // Now it's an object
console.log('Data:', data);