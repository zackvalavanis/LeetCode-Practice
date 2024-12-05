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

var input1 = ["a", "e", "i", "o", "u"]
var input2 = 1

const arrayToHash = (input1, input2) => { 
 let hash = {}
  for (let i = 0; i < input1.length; i++){ 
    if(!(input1[i] in hash)){ 
      hash[input1[i]] = input2
    }
  }
return hash
}

console.log(arrayToHash(input1, input2))