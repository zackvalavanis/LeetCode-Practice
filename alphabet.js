// A given string contains all the letters from the alphabet except for one. Return the missing letter.

// NOTE: You must accomplish this in O(n) time. This is also known as linear time.

// Input: “The quick brown box jumps over a lazy dog”
// Output: “f”

var input = 'The quick brown box jumps over a lazy dog'
var alpha = 'abcdefghijklmnopqrstuvwxyz'

const lettersAlpha = (input, alpha) => { 
  var removeSpace = input.toLowerCase().split(' ').join('')
  var set = new Set(removeSpace);
  for(let i = 0; i < alpha.length; i++){ 
    if(!(set.has(alpha[i]))){ 
      return alpha[i]
    }
  }
}

console.log(lettersAlpha(input, alpha))