// Input: [1, 2, 3, 4, 5]
// Output: [5, 4, 3, 2, 1]

var input = [1, 2, 3, 4, 5]

const reverseArray = (input) => { 
  let i = 0;
  let j = input.length - 1;

  while(i < j){ 
    const temp = input[i]
    input[i] = input[j]
    input[j] = temp
    i++
    j--
  }
  return input
}

console.log(reverseArray(input))