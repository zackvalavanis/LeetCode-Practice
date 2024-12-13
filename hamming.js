// Given two strings of equal length, write a function that returns the number of characters that are different between the two strings.

// Input: "ABCDEFG", "ABCXEOG"
// Output: 2

// Explanation: While the A, B, C, E, and G are in the same place for both strings, they have different characters in the other spaces. Since there are 2 such spaces that are different (the D and F in the first string), we return 2.

// Input: "ABCDEFG", "ABCDEFG",
// Output: 0

var input1 = "ABCDFAG"
var input2 = "ABCDEFG"

const diffLetters = (input) => { 
  var letterDiff = 0;
  for(let i = 0; i < input1.length; i++){ 
    if(input1[i] !== input2[i]){ 
      letterDiff += 1
    }
  }
  return letterDiff
}

console.log(diffLetters(input1, input2))