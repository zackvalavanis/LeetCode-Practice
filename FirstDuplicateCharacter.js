// Given a string, write a function that returns the first occurence of two duplicate characters in a row, and return the duplicated character.

// Input: “abcdefghhijkkloooop”
// Output: “h”

var input = 'abcdefghhijkkloooop'

const duplicate = (input) => { 
  var i = 0;
  var j = 1;
  var letter = '';
  while(j < input.length){ 

    if(input[i] === input[j]) { 
      letter = input[i]
      return letter
    } else { 
      i++ 
      j++
    }
  }
  return 'tyo'
}

console.log(duplicate(input))