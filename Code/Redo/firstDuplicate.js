// Given a string, write a function that returns the first occurence of two duplicate characters in a row, and return the duplicated character.

// Input: “abcdefghhijkkloooop”
// Output: “h”

var input = 'abcdefghhijkkloooop'

const twoDuplicates = (input) => { 
  var i = 0;
  var j = 1;
  while(j < input.length) { 
    if(input[i] === input[j]){ 
      return input[i]
    } else{ 
      i++ 
      j++
    }
  }
  return false
}

console.log(twoDuplicates(input))