// Given an array of numbers, write a function that returns a new array whose values are the original array’s value doubled.

var input = [4, 2, 5, 99, -4]
// Output: [8, 4, 10, 198, -8]

const double = (input) => { 
  for(let i = 0; i < input.length; i++){ 
    var number = input[i]
    input[i] = number * 2
  }
return input
}

console.log(double(input))