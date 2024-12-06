// A given array has one pair of duplicate values. Return the first duplicate value.

// NOTE: You must accomplish this in O(n) time. This is also known as linear time.

// Input: [5, 2, 9, 7, 2, 6]
// Output: 2

var input1 = [5, 2, 9, 7, 2, 6]

const duplicate = (input1) => { 
  var set = new Set()
  for(let i = 0; i < input1.length; i++){ 
    if(set.has(input1[i])){ 
      return input1[i]
    } else { 
      set.add(input1[i])
    }
  }
  return null
}

console.log(duplicate(input1))