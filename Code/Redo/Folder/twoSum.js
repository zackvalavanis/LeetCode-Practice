// Given an array of numbers, return a new array containing just two numbers (from the original array) that add up to the number 10. If there are no two numbers that add up to 10, return false.

// Specifically use nested loops to solve this exercise even though there are other approaches as well.

// Input: [2, 5, 3, 1, 0, 7, 11]
// Output: [3, 7]

// Input: [1, 2, 3, 4, 5]
// Output: false (While 1, 2, 3, and 4 altogether add up to 10, we're seeking just one pair of numbers.)

// Activity

var numbers = [2, 5, 3, 1, 0, 7, 11]

const twoSum = (numbers) => { 
  var target = 10;
  var hash = {}
  for(let i = 0; i < numbers.length; i++){ 
    var number = numbers[i]
    var remainder = target - number
    if(remainder in hash){ 
      return [remainder, number]
    } else { 
      hash[number] = i
    }
  }
  return false
}
console.log(twoSum(numbers))


const twoSum2 = (input) => { 
  const target = 10
  for(let i = 0; i < input.length; i++){ 
    for(let j = i + 1; j < input.length; j++){ 
      if(input[i] + input[j] === target){ 
        return [input[i], input[j]]
      }
    }
  }
return false
}

console.log(twoSum2(numbers))