// Input: nums = [-3,2,-3,4,2]
// Output: 5

var nums = [-3,2,-3,4,2]

const minPos = (nums) => { 
  let sum = 0;
  let minSum = 0;
  for(let i = 0; i < nums.length; i++){ 
    sum += nums[i]
    minSum = Math.min(minSum, sum)
  }
  return 1 - minSum
}

console.log(minPos(nums))