// Given two strings, return true if they are anagrams of each other, and false if they are not. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

// Do not use any built-in sort methods.

// Input: “silent”, “listen”
// Output: true

// Input: “frog”, “bear”
// Output: false


var word = 'silent'
var word2 = 'listen'

// const isAnagram = (word, word2) => { 
//   var set = new Set(word2)
//   for(let i = 0; i < word.length; i++){ 
//     if(!(set.has(word[i]))){ 
//       return false
//     } 
//   }
//   return true
// }


const isAnagram = (word, word2) => { 
  return word.split('').sort().join('') === word2.split('').sort().join('')
}

console.log(isAnagram(word, word2))