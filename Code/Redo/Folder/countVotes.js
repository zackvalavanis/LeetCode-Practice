// Description
// Given an array of strings, return a hash that provides of a count of how many times each string occurs.

// Input: ["Dewey", "Truman", "Dewey", "Dewey", "Truman", "Truman", "Dewey", "Truman", "Truman", "Dewey", "Dewey"]

// Output: {"Dewey" => 6, "Truman" => 5}

// Explanation: "Dewey" occurs 6 times in the array, while "Truman" occurs 5 times.

var input = ["Dewey", "Truman", "Dewey", "Dewey", "Truman", "Truman", "Dewey", "Truman", "Truman", "Dewey", "Dewey"]

const countVotes = (input) => { 
  var i = 0;
  var hash = {}
  while(i < input.length) { 
    if(input[i] in hash){ 
      hash[input[i]] += 1
    } else { 
      hash[input[i]] = 1
    }
    i++
  }
  return hash
}

console.log(countVotes(input))