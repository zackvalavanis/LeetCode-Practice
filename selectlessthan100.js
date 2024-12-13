// Given an array of numbers, write a function that returns a new array that contains all numbers from the original array that are less than 100.

// Input: [99, 101, 88, 4, 2000, 50]
// Output: [99, 88, 4, 50]

var input = [99, 101, 88, 4, 2000, 50]

const arrayLessThan100 = (input) => { 
  var array = input.filter(input  => input < 100)
  return array
}

console.log(arrayLessThan100(input))
