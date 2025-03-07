// Given an array of positive integers nums and a positive integer target, return the minimal length of a subarray whose sum is greater than or equal to target. If there is no such subarray, return 0 instead.


// Example 1:

// Input: target = 7, nums = [2,3,1,2,4,3]
// Output: 2

var target = 7
var nums = [2,3,1,2,4,3]

const minSub = (target, nums) => { 
  var count = 0;
  var left = 0; 
  var lengthArr = Infinity;
  for(let right = 0; right < nums.length; right++){ 
    count += nums[right]
    while(count >= target){ 
      lengthArr = Math.min(lengthArr, right - left + 1)
      count -= nums[left]
      left++
    }
  }
  return lengthArr === Infinity ? 0 : lengthArr
}

console.log(minSub(target, nums))