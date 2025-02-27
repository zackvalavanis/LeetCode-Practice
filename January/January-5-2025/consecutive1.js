// Given a binary array nums and an integer k, return the maximum number of consecutive 1's in the array if you can flip at most k 0's.

 

// Example 1:

// Input: nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2
// Output: 6
// Explanation: [1,1,1,0,0,1,1,1,1,1,1]
// Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.

var nums = [1,1,1,0,0,0,1,1,1,1,0]
var k = 2
  

const consecutive = (nums, k) => { 
  var left = 0;
  var max = 0;
  var zeroCount = 0;
  for(let right = 0; right < nums.length; right++){
    if(nums[right] === 0){ 
      zeroCount++
    }
    while(zeroCount > k){ 
      if(nums[left] === 0){ 
        zeroCount--
      }
      left++
    }
    max = Math.max(max, right - left + 1)
  }
  return max
}

console.log(consecutive(nums, k))