// A given string contains all the letters from the alphabet except for one. Return the missing letter.

// NOTE: You must accomplish this in O(n) time. This is also known as linear time.

// Input: “The quick brown box jumps over a lazy dog”
// Output: “f”

var input = 'The quick brown box jumps over a lazy dog'

const missingLetter = (input) => { 
  var set = new Set(input.toLowerCase().replace(/[^a-z]/g, '')) 

  for(let char of 'abcdefghijklmnopqrstuvwxyz') { 
    if(!set.has(char)){ 
      return char
    }
  }
return ''
}

console.log(missingLetter(input))