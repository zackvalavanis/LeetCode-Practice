// Input: nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2
// Output: 6
// Explanation: [1,1,1,0,0,1,1,1,1,1,1]
// Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.

var nums = [1,1,1,0,0,0,1,1,1,1,0]
var k = 2

const maxones = (nums, k) => { 
  let left = 0;
  let maxOners = 0;
  let zeroesCount = 0;
  for(let right = 0; right < nums.length; right++){ 
    if(nums[right] === 0){ 
      zeroesCount++
    }
    while(zeroesCount > k){ 
      if(nums[left] === 0){ 
        zeroesCount--
      }
    left++
  }
  maxOners = Math.max(maxOners, right - left + 1)
  }
return maxOners
}

console.log(maxones(nums, k))