// Given an array of numbers, write a function that returns a new array that contains all numbers from the original array that are less than 100.

// Input: [99, 101, 88, 4, 2000, 50]
// Output: [99, 88, 4, 50]

var input = [99, 101, 88, 4, 2000, 50]

// new array example 

// const newArray = (input) => { 
//   var nArray = [];
//   for(let i = 0; i < input.length; i++){ 
//     number = input[i];
//     if(number < 100){ 
//       nArray.push(number)
//     }
//   }
//   return nArray
// }

// console.log(newArray(input))
 
// Updating current array

const updateArray = (input) => { 

  return input.filter(number => number <= 100)
}

console.log(updateArray(input))