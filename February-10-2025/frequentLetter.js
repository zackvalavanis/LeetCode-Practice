// Given a string, find the most commonly occurring letter.

// Input: “peter piper picked a peck of pickled peppers”
// Output: “p”

var sentence = 'peter piper picked a peck of pickled peppers'

const commonLetter = (sentence) => { 
  var hash = {}
  var mostCommon = 0;
  var MostCommonLetter = ''
  for(let i = 0; i < sentence.length; i++){ 
    var letter = sentence[i]
    if(letter === ' ') continue;
    if(hash[letter]){ 
      hash[letter] += 1
    } else { 
      hash[letter] = 1
    }
    if(hash[letter] > mostCommon){ 
      mostCommon = hash[letter]
      MostCommonLetter = letter
    }
  }
  return MostCommonLetter
}

console.log(commonLetter(sentence))