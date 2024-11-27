var nums = [1,2,3,4]

const runningSum = (nums) => { 
  let sum = [nums[0]]

  for(let i = 1; i < nums.length; i++){ 
    sum.push(sum[i - 1] + nums[i])
  }
  return sum
}

console.log(runningSum(nums))