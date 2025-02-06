// Given a string, find the first non-repeating character in it and return its index. If it doesn't exist, return -1.

// NOTE: You must accomplish this in O(n) time. This is also known as linear time.

// Examples:

// s = "leetcode"
// return 0.
// (The "l" is the first character that only appears once in the string, and appears at index 0.)

// s = "loveleetcode",
// return 2.
// (The "l" and "o" are repeated, so the first non-repeating character is the "v", which is at index 2.)

// Note: You may assume the string contain only lowercase letters.

var input = "loveleetcode"


const firstNonrepeating = (input) => { 
  var seen = {}
  for(let letter of input){ 
    if(!(letter in seen)){ 
      seen[letter] = 1
    } else { 
      seen[letter] += 1
    }
  }
  for(let i = 0; i < input.length; i++){ 
    if(seen[input[i]] === 1){ 
      return i 
    }
  }
  return null
}

console.log(firstNonrepeating(input))