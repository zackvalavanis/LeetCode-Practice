// You are given two parameters, an array and a number. Return a hash whose keys are each of the values from the array parameter, and whose values are the number parameter.

// Input:

// First argument: ["a", "e", "i", "o", "u"]
// Second argument: 1

// Output:

// {
// 'a' => 1,
// 'e' => 1,
// 'i' => 1,
// 'o' => 1,
// 'u' => 1
// }

var input =  ["a", "e", "i", "o", "u"]
var number = 1

const ETL = (input, number) => { 
  console.log(input, number)
  var hash = {}
  for(let i = 0; i < input.length; i++){ 
    var letter = input[i]
    hash[letter] = number
  }
  return hash
}

console.log(ETL(input, number))