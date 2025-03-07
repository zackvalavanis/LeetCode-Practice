// Given an array of positive integers nums and a positive integer target, return the minimal length of a subarray whose sum is greater than or equal to target. If there is no such subarray, return 0 instead.


// Example 1:

// Input: target = 7, nums = [2,3,1,2,4,3]
// Output: 2

var target = 7
var nums = [2,3,1,2,4,3]

const minSub = (target, nums) => { 
  var minLength = Infinity
  var left = 0; 
  var curr = 0;
  for(let i = 0; i < nums.length; i++){ 
    curr += nums[i]
    while(curr >= target){ 
      minLength = Math.min(minLength, i - left + 1)
      curr -= nums[left]
      left++
    }
  }
  return minLength === Infinity ? 0 : minLength
}

console.log(minSub(target, nums))