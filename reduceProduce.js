// Write a function that accepts an array of numbers and returns the product of all the numbers.

var input = [1, 2, 3, 4]
// Output: 24

const productNums = (input) => { 
  product = 1;
  for(let i = 0; i < input.length; i++){ 
    var number = input[i]
    product *= number
  }
  return product
}

console.log(productNums(input))