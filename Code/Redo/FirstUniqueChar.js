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

var s = "leetcode"

const nonRepeated = (s) => { 
  const charCount = {}
  for(let i = 0; i < s.length; i++){ 
    if(s[i] in charCount){ 
      charCount[s[i]] += 1;
    } else { 
      charCount[s[i]] = 1
    }
  }
  for(let i = 0; i < s.length;i++){ 
    if(charCount[s[i]] === 1){ 
      console.log(charCount)
      return i
    }
  }
  return null
}

console.log(nonRepeated(s))