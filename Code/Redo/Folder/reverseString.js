// Write a function that returns the reverse of a given string.

var input = 'abcde'
// Output: “edcba”

const reverseString = (input) => { 
  let i = 0;
  let j = input.length -1;
  array = input.split('')
  while(i < j) { 
  var temp = array[i];
      array[i] = array[j]
      array[j] = temp
      i++
      j--
  }
  return array.join('')
}

console.log(reverseString(input))