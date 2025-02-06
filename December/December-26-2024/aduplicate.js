// A given array has one pair of duplicate values. Return the first duplicate value.

// NOTE: You must accomplish this in O(n) time. This is also known as linear time.

// Input: [5, 2, 9, 7, 2, 6]
// Output: 2

var input = [5, 2, 9, 7, 2, 6]

const arrayDuplicate = (input) => { 
  var set = new Set() 
  for(let num of input){ 
    if(set.has(num)){ 
      return num 
    }else { 
      set.add(num)
    }
  }
return 0
}

console.log(arrayDuplicate(input))