// Given an array of strings, return a hash that provides of a count of how many times each string occurs.

// Input: ["Dewey", "Truman", "Dewey", "Dewey", "Truman", "Truman", "Dewey", "Truman", "Truman", "Dewey", "Dewey"]

// Output: {"Dewey" => 6, "Truman" => 5}

// Explanation: "Dewey" occurs 6 times in the array, while "Truman" occurs 5 times.

var votes = ["Dewey", "Truman", "Dewey", "Dewey", "Truman", "Truman", "Dewey", "Truman", "Truman", "Dewey", "Dewey"]

// okay so i need to hash the votes to count them. 

const votesCount = (votes) => { 
  var count = {}
  for(let i = 0; i < votes.length; i++){ 
    var names = votes[i]
    if(names in count){ 
      count[names] += 1
    } else { 
      count[names] = 1
    }
  }
  return count
}

console.log(votesCount(votes))
