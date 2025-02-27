// Given two arrays, determine whether one is a subset of the other. It is considered a subset if all the values in one array are contained within the other.

// NOTE: You must accomplish this in O(n) time. This is also known as linear time.

// Input: [1, 2, 3, 4, 5, 6], [6, 3, 2]
// Output: true

// Input: [1, 2, 3, 4, 5, 6], [6, 3, 7]
// Output: false

var input1 = [1, 2, 3, 4, 5, 6]
var input2 = [6, 3, 2]

const subset = (input1, input2) => { 
  var set = new Set(input1)
  for(let i = 0; i < input2.length; i++){ 
    if(!(set.has(input2[i]))){ 
      return false
    }
  }
  return true
}

console.log(subset(input1, input2))