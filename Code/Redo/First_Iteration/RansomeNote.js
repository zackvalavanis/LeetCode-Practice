var ransomNote = 'aa'
var magazine = 'aab'

var canConstruct = function(ransomNote, magazine) {
  var magCount = {}

  for(let char of magazine){ 
    magCount[char] = (magCount[char] || 0) + 1
  }

  for( let char of ransomNote){ 
    if(!magCount[char] || (magCount[char] === 0)){ 
      return false
    }
    magCount[char]--
  }
  return true
};

console.log(canConstruct(ransomNote, magazine))