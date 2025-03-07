// Given a string s and an integer k, return the maximum number of vowel letters in any substring of s with length k.

// Vowel letters in English are 'a', 'e', 'i', 'o', and 'u'.

 

// Example 1:

// Input: s = "abciiidef", k = 3
// Output: 3
// Explanation: The substring "iii" contains 3 vowel letters.

var s = "abciiidef"
var k = 3

const maxVowels = (s, k) => { 
  var vowels = new Set('aeiou') 
  var vowelCount = 0;

  for(let i = 0; i < k; i++){ 
    if(vowels.has(s[i])){ 
      vowelCount++
    }
  }
  var maxVowels = vowelCount
  for(let right = k; right < s.length; right++){ 
    if(vowels.has(s[right])) vowelCount++
    if(vowels.has(s[right - k])) vowelCount--
    maxVowels = Math.max(maxVowels, vowelCount)
  }
  
  return maxVowels
}

console.log(maxVowels(s, k))