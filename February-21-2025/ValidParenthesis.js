// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

var input = "()"

const validParenthesis = (input) => { 
  var arr = []
  var p = { 
    "(" : ")", 
    "{" : "}", 
    "[" : "]"
  }
  for(let i = 0; i < input.length; i++){ 
    var letter = input[i]
    if(p[letter]){ 
      arr.push(letter)
    } else if (arr.length === 0 || p[arr.pop()] !== letter) { 
      return false
    }
  }
  return arr.length === 0
}

console.log(validParenthesis(input))