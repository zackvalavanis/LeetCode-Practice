// Given a string, write a function that returns true if the “$” character is contained within the string or false if it is not.

var input = 'i hate $ but i love money i know i know im crazy'
// Output: true


const money = (input) => { 
  var string = input.split(' ')
  console.log(string)
  for(let i = 0; i < string.length; i++){
    var letter = string[i];
     if(letter.includes('$')){ 
      return true
     } 
  }
  return false
}

console.log(money(input))