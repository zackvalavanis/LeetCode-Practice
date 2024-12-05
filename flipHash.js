// Given a hash, create a new hash that has the keys and values switched.

// Input: {"a" => 1, "b" => 2, "c" => 3}
// Output: {1 => "a", 2 => "b", 3 => "c"}

var input = {"a": 1, "b": 2, "c": 3}

const flipHash = (input) => { 
  var hash = {}
  for(let key in input) { 
    hash[input[key]] = key
  }
  return hash
}

console.log(flipHash(input))