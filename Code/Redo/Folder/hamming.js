// Given two strings of equal length, write a function that returns the number of characters that are different between the two strings.

// Input: "ABCDEFG", "ABCXEOG"
// Output: 2

// Explanation: While the A, B, C, E, and G are in the same place for both strings, they have different characters in the other spaces. Since there are 2 such spaces that are different (the D and F in the first string), we return 2.

var input = "ABCDEFG" 
var letters = "ABCXEOG"

const sameLetters = (input, letters) => { 
  var i = 0;
  var count = 0;
  while(i < input.length){ 
    if(input[i] === letters[i]){ 
     i++
    } else { 
      count += 1
      i++
    }
  }
  return count
}

console.log(sameLetters(input, letters))