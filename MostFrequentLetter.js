// Given a string, find the most commonly occurring letter.

// Input: “peter piper picked a peck of pickled peppers”
// Output: “p”

var input =  'peter piper picked a peck of pickled peppers'

const frequentLetter = (input) => { 
  var string = input.split(' ').join('')
  console.log(string)
  var hash = {}
  var max = 0
  var maxLetter = ''
  for(let i = 0; i < string.length; i++){ 
    var letter = string[i]
    if(letter in hash){ 
      hash[letter] += 1
      if(max < hash[letter]){ 
        max = hash[letter]
        maxLetter = letter
      }
    } else { 
      hash[letter] = 1
    }
  }
return maxLetter
}

console.log(frequentLetter(input))