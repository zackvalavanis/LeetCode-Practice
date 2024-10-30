s = '()'


var isValid = function(s) {
  stack = [];
  object = {
   '(' : ')', 
   '{' : '}', 
   '[' : ']'
  }
  for(let i = 0; i < s.length; i++) {
    letter = s[i]
      if (object[letter]) { 
      stack.push(letter);
      } else { 
      if (stack.length === 0 || object[stack.pop()] !== letter) { 
        return false 
      }
    }
  }
  return stack.length === 0 
};

console.log(isValid(s))