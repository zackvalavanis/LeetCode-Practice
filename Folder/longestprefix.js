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

var input = ["flower","flow","flight"]

const longestCommonPrefix = (input) => { 
  if(!input.length) return ""
  let prefix = ''

  for(let i = 0; i < input[0].length; i++){
    var char = input[0][i] 
    for(let j = 1; j < input.length; j++){ 
      if(i >= input[j].length || input[j][i] !== char){ 
        return prefix
      }
    }
    prefix += char
  }
return ''
}

console.log(longestCommonPrefix(input))