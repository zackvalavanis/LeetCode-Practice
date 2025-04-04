// Description
// This is the same exercise as Two Sum I, but you must now solve it in linear time.

// Given an array of numbers, return a new array containing just two numbers (from the original array) that add up to the number 10. If there are no two numbers that add up to 10, return false.

// Input: [2, 5, 3, 1, 0, 7, 11]
// Output: [3, 7]

// Input: [1, 2, 3, 4, 5]
// Output: false (While 1, 2, 3, and 4 altogether add up to 10, we're seeking just one pair of numbers.)

var input = [2, 5, 3, 1, 0, 7, 11]

const twoSum = (input) => { 
  var hash = {}
  for(let i = 0; i < input.length; i++){ 
    let remainder = 10 - input[i]
    if(remainder in hash){ 
      return [remainder, hash[remainder]]
    }
    hash[input[i]] = remainder
  }
  return ''
}

console.log(twoSum(input))