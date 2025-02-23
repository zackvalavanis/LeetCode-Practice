// Input: nums = [1,12,-5,-6,50,3], k = 4
// Output: 12.75000
// Explanation: Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75
// Example 2:

var nums = [1,12,-5,-6,50,3]
var k = 4

const maxAverageSubArray = (nums, k) => { 
  var currentSum = 0;
  for(let i = 0; i < k; i++){ 
    currentSum += nums[i]
  }
  var maxSum = currentSum
  for(let i = k; i < nums.length; i++){ 
    currentSum += nums[i] - nums[i-k]
    maxSum = Math.max(maxSum, currentSum)
  }
return maxSum / k
}

console.log(maxAverageSubArray(nums, k))