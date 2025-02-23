// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

 

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

var arr = ["flower","flow","flight"]

const LongestCommonPrefix = (arr) => { 
  if(arr.length === 0 ) return ''
  var prefix = arr.reduce((shortest, current) => current.length < shortest.length ? shortest : current)
  for(let i = 0; i < arr.length; i++){ 
    while(arr[i].indexOf(prefix) !== 0){ 
      prefix = prefix.slice(0, -1)
      if(prefix === ''){ 
        return ''
      } 
    }
  }
return prefix
} 

console.log(LongestCommonPrefix(arr))