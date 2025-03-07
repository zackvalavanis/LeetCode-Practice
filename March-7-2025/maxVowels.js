// Example 1:

// Input: s = "abciiidef", k = 3
// Output: 3
// Explanation: The substring "iii" contains 3 vowel letters.

var s = "abciiidef"
var k = 3

const maxVowels = (s, k) => { 
  var set = new Set('aeiou')
  var vowelCount = 0;
  for(let i = 0; i < k; i++){ 
    if(set.has(s[i])){ 
      vowelCount++
    }
  }
  var maxVowel = vowelCount
  for(let right = k; right < s.length; right++){ 
    if(set.has(s[right])) vowelCount++
    if((set.has(s[right - k]))) vowelCount--
    maxVowel = Math.max(maxVowel, vowelCount)
  }
  return maxVowel 
}

console.log(maxVowels(s,k))