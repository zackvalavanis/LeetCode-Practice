// A given array has one pair of duplicate values. Return the first duplicate value.

// NOTE: You must accomplish this in O(n) time. This is also known as linear time.

// Input: [5, 2, 9, 7, 2, 6]
// Output: 2

var array = [5, 2, 9, 7, 2, 6]

const duplicate = (array) => { 
  var set = new Set()
  for(let i = 0; i < array.length; i++){ 
    if(set.has(array[i])){ 
      return array[i]
    }
    set.add(array[i])
  }
  return -1
}

console.log(duplicate(array))