// Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
// Example 1:

// Input: haystack = "sadbutsad", needle = "sad"
// Output: 0
// Explanation: "sad" occurs at index 0 and 6.
// The first occurrence is at index 0, so we return 0.

var string1 = "sadbutsad"
var string2 = "sad"

const needleinhaystack = (string1, string2) => { 
  for(let i = 0; i <= string1.length - string2.length; i++){ 
    var j = 0;  
    while(j < string2.length && string1[i + j] === string2[j]){ 
      j++
    }
    if(j === string2.length)
    return i
    }
  return -1
}

console.log(needleinhaystack(string1, string2))
