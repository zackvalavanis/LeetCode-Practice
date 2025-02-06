// Given two strings, return true if they are anagrams of each other, and false if they are not. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

// Do not use any built-in sort methods.

// Input: “silent”, “listen”
// Output: true

// Input: “frog”, “bear”
// Output: false

var input1 = 'silent'
var input2 = 'listen'

const anagram = (input1, input2) => { 

  
  const countChars = str => { 
    const counts = {};
    for(const char of str){ 
      counts[char] = (counts[char] || 0) + 1
    }
    return counts
  }
  const count1 = countChars(input1)
  const count2 = countChars(input2)

  for(char in count1){ 
    if(count1[char] !== count2[char]){ 
      return false
    }
  }
  return true
}

console.log(anagram(input1, input2))