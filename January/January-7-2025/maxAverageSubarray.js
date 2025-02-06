// Input: nums = [1,12,-5,-6,50,3], k = 4
// Output: 12.75000
// Explanation: Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75

var nums = [1,12,-5,-6,50,3]
var k = 4

const maxSubarray = (nums, k) => { 
  var currentSum = 0 
  for(let i = 0; i < k; i++){ 
    currentSum += nums[i]
  }
  var max = currentSum
  for(let i = k; i < nums.length; i++){ 
    currentSum += nums[i] - nums[i - k]
    max = Math.max(max, currentSum)
  }
  return max / k
}

console.log(maxSubarray(nums, k))