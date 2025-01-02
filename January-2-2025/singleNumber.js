// // Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// // You must implement a solution with a linear runtime complexity and use only constant extra space.

// Input: nums = [2,2,1]
// Output: 1

var input = [1,2,1,2,4]

const singleNum = (input) => { 
  var hash = {}
  for(let num of input){ 
    hash[num] = (hash[num] || 0) + 1
  }
  for(let num in hash){ 
    if(hash[num] === 1){ 
      return parseInt(num)
    }
  }
}

console.log(singleNum(input))




