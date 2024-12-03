
var input = 'racecar'
// Output: true

const isPalindrome = (input) => { 
  var i = 0;
  var j = input.length -1;
  while(i < j){
    if(input[i] !== input[j]){ 
      return false
    } else { 
      i++ 
      j--
    }
  }
return true
}

console.log(isPalindrome(input))