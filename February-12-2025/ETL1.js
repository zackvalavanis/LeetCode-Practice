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

var first = ["a", "e", "i", "o", "u"]
var second = 1

const combine = (first, second) => { 
  var hash = {}
  for(let i = 0; i < first.length; i++){ 
    hash[first[i]] = second
  }
return hash
}


console.log(combine(first, second))