// Write a function that returns the sum of all numbers in a given array.

// NOTE: Do not use any built-in language functions that do this automatically for you.

// Input: [1, 2, 3, 4]
// Output: 10

// Explanation: (1 + 2 + 3 + 4) = 10

var input = [1, 2, 3, 4]

const sum = (input) => { 
  var sum = 0;
  for(let i = 0; i < input.length;i++){ 
    sum += input[i]
  }
return sum
}

console.log(sum(input))


function recursiveSum(arr, index = 0) { 
  if(index === input.length){ 
    return 0
  }
  return arr[index] + recursiveSum(arr, index + 1)
}

console.log(recursiveSum(input))
//Recursive 