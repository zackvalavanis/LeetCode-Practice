// Given a string, write a function that returns the first occurence of two duplicate characters in a row, and return the duplicated character.

// Input: “abcdefghhijkkloooop”
// Output: “h”

var input = 'abcdefghhijkkloooop'

const firstDup = (input) => { 
  for(let i = 0; i < input.length; i++){ 
    var letter = input[i]
    var j = i + 1
    if(input[i] === input[j]){ 
      return letter
    }
  }
}

console.log(firstDup(input))
