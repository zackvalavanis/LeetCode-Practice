// Given a string, write a function that returns a copy of the original string that has every other character capitalized. (Capitalization should begin with the second character.)

// Input: “hello, how are your porcupines today?”
// Output: “hElLo, HoW ArE YoUr pOrCuPiNeS ToDaY?”
          // hElLo,hOwArEyOuRpOrCuPiNeStOdAy?      



var input = 'hello, how are your porcupines today?'

const altCap = (input) => { 
  let result = ''
  for(let i = 0; i < input.length; i++){ 
    if(i % 2 !== 0 && /[a-zA-z]/.test(input[i])){ 
      result += input[i].toUpperCase()
    } else { 
      result += input[i]
    }
  }
return result
}

console.log(altCap(input))