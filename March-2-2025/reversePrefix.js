// Given a 0-indexed string word and a character ch, reverse the segment of word that starts at index 0 and ends at the index of the first occurrence of ch (inclusive). If the character ch does not exist in word, do nothing.

// For example, if word = "abcdefd" and ch = "d", then you should reverse the segment that starts at 0 and ends at 3 (inclusive). The resulting string will be "dcbaefd".
// Return the resulting string.

 


var word = "abcdefd"
var ch = "d"

const reverseWord = (word, ch) => {  
  var index = word.indexOf(ch)

  if(index === -1) return word

  const reversedSegment = word.slice(0, index + 1).split('').reverse().join('')

  return reversedSegment + word.slice(index + 1)
}

console.log(reverseWord(word, ch))