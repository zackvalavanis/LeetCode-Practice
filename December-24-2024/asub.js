// A given array has one pair of duplicate values. Return the first duplicate value.

// NOTE: You must accomplish this in O(n) time. This is also known as linear time.

// Input: [5, 2, 9, 7, 2, 6]
// Output: 2

var input = [5, 2, 9, 7, 2, 6]

const duplicateValues = (input) => { 
  const seen = new Set()
  for(let num of input){ 
    if(seen.has(num)){ 
      return num
    }
    seen.add(num)
  }
return false
}

console.log(duplicateValues(input))