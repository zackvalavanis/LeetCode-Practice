// Description
// Given an array, write a function that returns an array that contains the original array’s values in reverse.

var input = [1, 2, 3, 4, 5]
// Output: [5, 4, 3, 2, 1]

// two pointer method 


const reverseArray = (input) => { 
  let i = 0;
  let j = input.length -1;
  while(i < j) { 
    let temp = input[i];
    input[i] = input[j]
    input[j] = temp
    i++
    j--
  }
return input
}

console.log(reverseArray(input))