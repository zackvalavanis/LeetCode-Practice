// Input: sentence = "thequickbrownfoxjumpsoverthelazydog"
// Output: true

var sentence = "thequickbrwnfoxjsoverthelazydog"


const isPanagram = (sentence) => { 
  var set = new Set(sentence.toLowerCase())
  var string = 'abcdefghijklmnopqrstuvwxyz'
  for(let letter of string){ 
    if(!set.has(letter)){ 
      return false
    } 
  }
  return true
}

console.log(isPanagram(sentence))