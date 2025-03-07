// A pangram is a sentence where every letter of the English alphabet appears at least once.

// Given a string sentence containing only lowercase English letters, return true if sentence is a pangram, or false otherwise.

 

// Example 1:

// Input: sentence = "thequickbrownfoxjumpsoverthelazydog"
// Output: true
// Explanation: sentence contains at least one of every letter of the English alphabet.

var sentence = "thequickbrownfoxjumpsoverthelazydog"

const isPanagram = (sentence) => { 
  var letters = 'abcdefghijklmnopqrstuvwxyz'
  var set = new Set(sentence)
  for(let c of letters){ 
    if(!set.has(c)){ 
      return false
    }
  }
  return true
}

console.log(isPanagram(sentence))