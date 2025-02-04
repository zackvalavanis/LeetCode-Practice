// Description
// Given a string, write a function that returns true if the “$” character is contained within the string or false if it is not.

// Input: “i hate $ but i love money i know i know im crazy”
// Output: true

// Input: “abcdefghijklmnopqrstuvwxyz”
// Output: false

var input =  'i hate $ but i love money i know i know im crazy'

const showMe = (input) => { 
  var str = input.split(' ').join('')
  console.log(str)
  for(let i = 0; i < str.length; i++){ 
    if(str[i] === '$'){ 
      return true
    } 
  }
return false
}

console.log(showMe(input))