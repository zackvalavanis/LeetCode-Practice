// Input: {"a" => 1, "b" => 2, "c" => 3}
// Output: {1 => "a", 2 => "b", 3 => "c"}

var input = {"a": 1, "b": 2, "c": 3}

const flipHash = (input) => { 
  var flipped = {}
  for(let key in input) { 
    let value = input[key]
    flipped[value] = key
  }
return flipped
}

console.log(flipHash(input))