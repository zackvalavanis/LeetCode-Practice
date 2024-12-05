// Given an array of numbers, write a function that returns a new array in which only select numbers from the original array are included, based on the following details:

// The new array should always start with the first number from the original array. The next number that should be included depends on what the first number is. The first number dictates how many spaces to the right the computer should move to pick the next number. For example, if the first number is 2, then the next number that the computer should select would be two spaces to the right. This number gets added to the new array. If this next number happens to be a 4, then the next number after that is the one four spaces to the right. And so on and so forth until the end of the array is reached.

var input = [2, 1, 3, 2, 5, 1, 2, 6, 2, 7, 1, 5, 6, 3, 2, 6, 2, 1, 2]

// Output:
// [2, 3, 1, 2, 2, 1, 5, 2, 2]

// - start with first number 
// - first number dictates how many spaces to the right are moved

// const skip = (input) => { 
//   var newArray = [input[0]]
//   for(let i = 2; i < input.length; i += input[i]){ 
//     var numbers = input[i]
//     newArray.push(numbers)
//   }

//   return newArray
// }

// console.log(skip(input))

const skip = (input) => { 
  let newArray = [input[0]];  // Start with the first element
  let i = 0;

  while (i < input.length) {
    i += input[i];  // Skip the number of elements based on the current element
    if (i < input.length) {
      newArray.push(input[i]);  // Add the current element to newArray
    }
  }

  return newArray;
};

console.log(skip(input));  // Output: [1, 3, 6]
