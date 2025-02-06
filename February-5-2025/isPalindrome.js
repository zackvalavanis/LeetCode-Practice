// Given a string, write a function that returns true if it is a palindrome, and false if it is not. (A palindrome is a word that reads the same both forward and backward.)

// Input: “racecar”
// Output: true

// Input: “baloney”
// Output: false

var input = 'racecar'

const isPalindrome = (input) => { 
  var i = 0
  var j = input.length - 1
  while(i < j){ 
    if(input[i] !== input[j]){ 
      return false
    } else { 
      i++
      j--
    }
  }
  return true
}

console.log(isPalindrome(input))