// // Given a string, find the first non-repeating character in it and return its index. If it doesn't exist, return -1.

// // NOTE: You must accomplish this in O(n) time. This is also known as linear time.

// // Examples:

// // s = "leetcode"
// // return 0.
// // (The "l" is the first character that only appears once in the string, and appears at index 0.)

// // s = "loveleetcode",
// // return 2.
// // (The "l" and "o" are repeated, so the first non-repeating character is the "v", which is at index 2.)

// // Note: You may assume the string contain only lowercase letters.

var input = "abb"

const firstUnique = (input) => { 
  var charCount = {}

  for(let char of input){ 
    charCount[char] = (charCount[char] || 0) + 1
  }
  for(let i = 0; i < input.length; i++){ 
    if(charCount[input[i]] === 1){ 
      return input[i]
    }
  }
return -1
}

console.log(firstUnique(input))