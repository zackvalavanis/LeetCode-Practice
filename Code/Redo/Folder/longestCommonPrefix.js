// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: ["dog","racecar","car"]
// Output: ""


var input = ["flower","flow","flight"]

const longestCommonPrefix = (input) => { 
  let prefix = input[0]
  for(let i = 1; i < input.length; i++){ 
    while(input[i].indexOf(prefix) !== 0){ 
      prefix = prefix.slice(0, -1);
      if(prefix === ""){ 
        return ''
      }
    }
  }
  return prefix
}


console.log(longestCommonPrefix(input))



