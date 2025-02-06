// Given two strings of equal length, write a function that returns the number of characters that are different between the two strings.

// Input: "ABCDEFG", "ABCXEOG"
// Output: 2

// Explanation: While the A, B, C, E, and G are in the same place for both strings, they have different characters in the other spaces. Since there are 2 such spaces that are different (the D and F in the first string), we return 2.

// Input: "ABCDEFG", "ABCDEFG",

var word1 = 'abcdefg'
var word2 = 'abcdlfg'

const hamming = (word1, word2) => { 
  var hamSum = 0;
  for(let i = 0; i < word1.length; i++){ 
    if(word1[i] !== word2[i]){ 
      hamSum++
    }
  }
return hamSum
}

console.log(hamming(word1, word2))