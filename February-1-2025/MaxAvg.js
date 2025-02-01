var nums = [1,12,-5,-6,50,3]
var k = 4

const maxAverage = (nums, k) => { 
  var currentSum = 0;
  for(let i = 0; i < k; i ++){ 
    currentSum += nums[i]
  }
  maxSum = currentSum 
  for(let i = k; i < nums.length; i++){ 
    currentSum = nums[i] - nums[i-k]
    maxSum = Math.max(maxSum, currentSum)
  }
  return maxSum / k
}

console.log(maxAverage(nums, k))