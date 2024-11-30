// Given a string, find the most commonly occurring letter.

// Input: “peter piper picked a peck of pickled peppers”
// Output: “p”



var words = 'peter piper picked a peck of pickled peppers'

const iterationWords = (words) => {
  var splitString = words.split(' ').join('')
  var hash = {}
  var maxInteger = 0;
  var maxLetter = '';
  for(let i = 0; i < splitString.length; i++){ 
    var letter = splitString[i]
    if(letter in hash) { 
      hash[letter] += 1
      if(maxInteger < hash[letter]){ 
        maxInteger = hash[letter]
        maxLetter = letter;
      }
    } else { 
      hash[letter] = 1
    }
  }
  return maxLetter
}

console.log(iterationWords(words))


// var output = 'p'

