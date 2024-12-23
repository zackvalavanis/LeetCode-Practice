// Given a hash, return a flat array containing all the hash’s keys and values.

// Input: {“a” => 1, “b” => 2, “c” => 3, “d” => 4}
// Output: [“a”, 1, “b”, 2, “c”, 3, “d”, 4]

var input = {"a": 1, "b": 2, "c": 3, "d": 4}

const flattenHash = (input) => { 
  var array = []
  for(key in input){ 
    array.push(key)
    array.push(input[key])
  }
return array
}

console.log(flattenHash(input))