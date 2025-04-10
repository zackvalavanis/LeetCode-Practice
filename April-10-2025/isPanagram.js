// sentence = "thequickbrownfoxjumpsoverthelazydog"
// Output: true
// Explanation: sentence contains at least one of every letter of the English alphabet.

var sentence = "thequickbrownfojumpsoverthelazydog"

const isPanagram = () => { 
  var set = new Set(sentence)
  for(let letter of 'abcdefghijklmnopqrstuvwxyz'){ 
    if(!set.has(letter)){ 
      return [false, letter]
    }
  }
  return true
}

console.log(isPanagram(sentence))