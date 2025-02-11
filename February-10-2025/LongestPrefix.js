// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
// Note:

// All given inputs are in lowercase letters a-z.

var input = ['flower', 'flow', 'flight']

const longestPrefix = (input) => { 
  if(input.length === 0) return ''
  var currentPrefix = input[0]
  for(let i = 1; i < input.length; i++){ 
    while(input[i].indexOf(currentPrefix) !== 0){ 
      currentPrefix = currentPrefix.slice(0, -1)
      if(currentPrefix === "") return ""
    }
  }
  return currentPrefix
}

console.log(longestPrefix(input))