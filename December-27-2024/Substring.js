// Given a string s, find the length of the longest 
// substring
//  without repeating characters.

var s = "abcabcbb"

const longestSubString = (s) => { 
  var numSet = new Set()
  let left = 0;
  let maxLength = 0
  for(let right = 0; right < s.length; right++){ 
    while(numSet.has(s[right])){ 
      numSet.delete(s[left])
      left++
    }
    numSet.add(s[right])
    maxLength = Math.max(maxLength, right - left + 1)
  }
  return maxLength
}

console.log(longestSubString(s))