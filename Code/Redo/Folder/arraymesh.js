// Description
// Given two arrays of strings, return a new string that contains every combination of a string from the first array concatenated with a string from the second array.

// Input: ["a", "b", "c"], ["d", "e", "f", "g"]
// Output: ["ad", "ae", "af", "ag", "bd", "be", "bf", "bg", "cd", "ce", "cf", "cg"]

var input1 = ["a", "b", "c"]
var input2 = ["d", "e", "f", "g"]

const arrayMesh = (input1, input2) => { 
  var meshed = []
  for(let i = 0; i < input1.length; i++){ 
    var number1 = input1[i]
    for(let j = 0; j < input2.length; j++){ 
      var number2 = input2[j]
      meshed.push(number1 + number2)
    }
  }
  return meshed
}

console.log(arrayMesh(input1, input2))