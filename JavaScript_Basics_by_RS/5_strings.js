
let day = "Mon day "; // String variable
let greeting = "Hello, World!"; // String variable  

day.length; // Get the length of the string
console.log("Length of the day string: " + day.length); // Output: 6

day.slice(0, 3); // Get a substring from the string
console.log("Substring of day: " + day.slice(0, 3)); // Output: Mon 

day.split(""); // Split the string into an array of characters
console.log("Array of characters in day: " + day.split("")); // Output: [ 'M', 'o', 'n', 'd', 'a', 'y' ]

day.toUpperCase(); // Convert the string to uppercase
console.log("Uppercase day: " + day.toUpperCase()); // Output: MONDAY

day.toLowerCase(); // Convert the string to lowercase
console.log("Lowercase day: " + day.toLowerCase()); // Output: monday

let splitDay = day.split(" "); // Split the string into an array of characters
console.log(splitDay[1].trim().length); // Output: day
console.log(splitDay[0]); // Output: Mon


let date = "23"
let nextDate = "27"

let dateDifference = parseInt(nextDate) - parseInt(date); // Calculate the difference between two dates
console.log("Difference between dates: " + dateDifference); // Output: 4
dateDifference.toString(); // Convert the difference to a string
console.log("Difference as string: " + dateDifference); // Output: "4"


let newQuote = day.trim() + " " + greeting; // Concatenate two strings
console.log("Concatenated string: " + newQuote); // Output: Mon day  Hello, World!

// Monday is Funday
let funDay = "Monday is Funday"; // String variable
console.log("Original funDay string: " + funDay); // Output: Monday is Funday


let count = 0
let val = funDay.indexOf("day"); // Find the index of a substring in the string
console.log("Index of 'day': " + val); // Output: 3

while (val !== -1) {
    count++; // Increment the count for each occurrence of the substring
    val = funDay.indexOf("day", val + 1); // Find the next occurrence of the substring
}
console.log("Count of 'day' in funDay: " + count); // Output: 2



