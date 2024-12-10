// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

var string =  "(]"

const validInput = (string) => { 
  var stack = []
  var p = {
    '(' : ')', 
    '{' : '}', 
    '[' : ']'
  }

  for(let i = 0; i < string.length; i++){ 
    const letter = string[i]
    if(p[letter]){ 
      stack.push(letter)
    } else if(stack.length === 0 || p[stack.pop()] !== letter){ 
      return false
    }
  }
  return stack.length === 0
}

console.log(validInput(string))