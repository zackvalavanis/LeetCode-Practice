// Description
// Given a string, write a function that returns a copy of the original string that has every other character capitalized. (Capitalization should begin with the second character.)
var input = 'hello, how are your porcupines today?'
// Output: “hElLo, HoW ArE YoUr pOrCuPiNeS ToDaY?”
           
const capitalizeEveryOther = (input) => { 
  var string = input.split('')

  for(let i = 0; i < string.length; i ++){ 
    if(i % 2 !== 0){ 
      string[i] = string[i].toUpperCase();
    }
  }
  return string.join('')
}

console.log(capitalizeEveryOther(input))