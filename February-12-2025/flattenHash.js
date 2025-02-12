// Given a hash, return a flat array containing all the hash’s keys and values.

// Input: {“a” => 1, “b” => 2, “c” => 3, “d” => 4}
// Output: [“a”, 1, “b”, 2, “c”, 3, “d”, 4]

var input = {'a': 1, 'b':  2, 'c': 3, 'd': 4}

const flatten = (input) => { 
  var array = []
  for(let key in input) { 
    array.push(key, input[key])  
  }
  return array
}

console.log(flatten(input))