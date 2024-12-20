// Given a string, find the most commonly occurring letter.

// Input: “peter piper picked a peck of pickled peppers”
// Output: “p”

var input = 'peter piper picked a peck of pickled peppers'

const commonLetter = (input) => { 
  var str = input.split(' ').join('')
  var letters = '';
  var maxInteger = 0;
  var count = {};
  for(let i = 0; i < str.length; i++){ 
    var letter = str[i]
    if(letter in count){ 
      count[letter] += 1
      if(maxInteger < count[letter]){ 
        maxInteger = count[letter]
        letters = letter
      }
    } else { 
      count[letter] = 1
    }
  }
return letters
}

console.log(commonLetter(input))