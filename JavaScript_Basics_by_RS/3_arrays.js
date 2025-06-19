var marks = Array(6)
var marks = new Array(6)
// let marks = [10, 20, 30, 40, 50, 60] // Array of numbers
marks = [10, 20, 30, 40, 50, 60] // Array of numbers



var marks = [10, 20, 30, 40, 50, 60] // Array of numbers
console.log(marks);
console.log(marks[0]); // Accessing the first element
console.log(marks[1]); // Accessing the second element
console.log(marks[2]); // Accessing the third element
console.log(marks[3]); // Accessing the fourth element 
marks[4] = 100; // Modifying the fifth element
console.log(marks[4]); // Accessing the modified fifth element
marks[3] = 80; // Modifying the third element
console.log(marks[5]); // Accessing the modified sixth element
console.log(marks.length, "is length of the array"); // Getting the length of the array
console.log(marks[marks.length - 1], "is last element of array"); // Accessing the last element 
console.log(marks[marks.length - 2], "is second last element of array"); // Accessing the second last element
// console.log(marks[marks.length - 3], "is last elemenrt of array"); // Accessing the third last element 
marks.push(70); // Adding a new element at the end of the array
console.log(marks);   
marks.pop(); // Removing the last element of the array
console.log(marks); // Displaying the array after removing the last element 
marks.unshift(5); // Adding a new element at the beginning of the array
console.log(marks); // Displaying the array after adding the new element at the beginning   
marks.indexOf(30); // Finding the index of the element 30
console.log(marks.indexOf(30), "is index of 30 in the array"); // Displaying the index of the element 30
marks.includes(120); // Checking if the element 120 is present in the array
console.log(marks.includes(120), "120 is not present in the array"); // Displaying if the element 120 is present in the array
subMarks = marks.slice(1, 4); // Slicing the array from index 1 to index 4 (exclusive)
console.log(subMarks, "is sliced array from index 1 to index 4 (exclusive)"); // Displaying the sliced array



for (let i = 0; i < marks.length; i++) {
    console.log(marks[i], "is element at index", i); // Displaying each element of the array with its index
}   

var sum = 0;
for (let i = 0; i < marks.length; i++) {
    sum += marks[i]; // Calculating the sum of all elements in the array
}
console.log(sum, "is sum of all elements in the array"); // Displaying the sum of all elements in the array


// reduce method    
//reduce method is used to reduce the array to a single value by applying a function to each element of the array   
var marks = [10, 20, 30, 40, 50, 60]; // Array of numbers
console.log(marks); // Displaying the array of numbers  

// Using reduce method to calculate the sum of all elements in the array
var totalsum = marks.reduce((sum, mark) => sum + mark, 0); //accumulator and 
// Using reduce method to calculate the sum of all elements in the array
console.log(totalsum, "is sum of all elements in the array using reduce method"); // Displaying the sum of all elements in the array using reduce method 

// Using map method to create a new array with each element doubled
var marks = [10, 20, 30, 40, 50, 60]; // Array of numbers
var mappedMarks = marks.map((mark) => mark * 2); // Mapping the array to double each element
console.log(mappedMarks, "is sum of all elements multiplied by 2 in the array using reduce method"); // Displaying the sum of all elements in the array using reduce method


var scores = [11,12,13,14,15, 16]; // Array of numbers
// craete a new array with even and odd numbers
var evenScores = scores.filter((score) => score % 2 === 0); // Filtering the array to get even numbers
var oddScores = scores.filter((score) => score % 2 !== 0); // Filtering the array to get odd numbers
for (let i = 0; i < scores.length; i++) {
    if(scores[i] %2 ==0) {
        console.log(scores[i], "is even number at index", i); // Displaying the even number and its index
        continue; // Skipping the rest of the loop for this iteration
    }
    else {
        console.log(scores[i], "is odd number at index", i); // Displaying the odd number and its index
    }
    //console.log(scores[i], "is element at index", i); // Displaying each element of the array with its index

    console.log(evenScores, "is even scores array"); // Displaying the even scores array
    console.log(oddScores, "is odd scores array"); // Displaying the odd scores array
}

evenScores.map((score) => score * 2); // Mapping the even scores array to double each element


// map, filter and reduce methods
var numbers = [1, 2, 3, 4, 5]; // Array of numbers  
// Using map method to create a new array with each element squared
var squaredNumbers = numbers.map((number) => number * number); // Mapping the array to square each element  
console.log(squaredNumbers, "is squared numbers array"); // Displaying the squared numbers array
// Using filter method to create a new array with only even numbers
var evenNumbers = numbers.filter((number) => number % 2 === 0); // Filtering the array to get even numbers  
console.log(evenNumbers, "got even numbers array from mapped method"); // Displaying the even numbers array


console.log(evenNumbers, "is even numbers array"); // Displaying the even numbers array
// Using reduce method to calculate the sum of all elements in the array
var sumOfNumbers = numbers.reduce((sum, number) => sum + number, 0); // Reducing the array to calculate the sum of all elements
console.log(sumOfNumbers, "is sum of all elements in the array using reduce method"); // Displaying the sum of all elements in the array using reduce method
// Using forEach method to iterate over each element in the array
numbers.forEach((number, index) => {
    console.log(number, "is element at index", index); // Displaying each element of the array with its index
});




var score1= [10, 20, 30, 40, 50]; // Array of scores

let sumValue = score1.filter((score) => score%2 === 0).map((score) => score * 2).reduce((sum, score) => sum + score, 0) // Chaining filter, map and reduce methods
  
    console.log(sumValue); // Displaying the final result of the chained methods
// Using forEach method to iterate over each element in the array       
score1.forEach((score, index) => {
    console.log(score, "is element at index", index); // Displaying each element of the array with its index
});




let fruits = ["cherry", "apple", "date", "banana"]; // Array of fruits
// Using forEach method to iterate over each element in the array

fruits.forEach((fruit, index) => {
    console.log(fruit, "is fruit at index", index); // Displaying each fruit with its index
});

fruits.sort(); // Sorting the array of fruits in alphabetical order
console.log(fruits, "is sorted fruits array"); // Displaying the sorted array of fruits
fruits.reverse(); // Reversing the sorted array of fruits   
console.log(fruits, "is reversed sorted fruits array"); // Displaying the reversed sorted array of fruits

// Using forEach method to iterate over each element in the sorted array
fruits.forEach((fruit, index) => {
    console.log(fruit, "is fruit at index", index); // Displaying each fruit with its index in the sorted array
});

let numbers1 = [5, '003', 8, 1, 2]; // Array of numbers

numbers1.sort((a, b) => a - b); // Sorting the array of numbers in ascending order
console.log(numbers1, "is sorted numbers array in ascending order"); // Displaying the sorted array of numbers in ascending order
numbers1.sort((a, b) => b - a); // Sorting the array of numbers in descending order
console.log(numbers1, "is sorted numbers array in descending order"); // Displaying the sorted array of numbers in descending order