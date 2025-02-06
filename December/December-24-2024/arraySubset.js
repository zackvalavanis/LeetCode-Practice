// Given two arrays, determine whether one is a subset of the other. It is considered a subset if all the values in one array are contained within the other.

// NOTE: You must accomplish this in O(n) time. This is also known as linear time.

// Input: [1, 2, 3, 4, 5, 6], [6, 3, 2]
// Output: true

// Input: [1, 2, 3, 4, 5, 6], [6, 3, 7]
// Output: false

var input1 = [1, 2, 3, 4, 5, 6]
var input2 = [6, 3, 7]

const isSubset = (input1, input2) => { 
  var set = new Set(input1)
  for(let num of input2){
    if(!set.has(num)){ 
      return false
    }
  }
    return true
}

console.log(isSubset(input1, input2))

