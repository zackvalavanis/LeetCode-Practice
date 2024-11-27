var nums = [1,12,-5,-6,50,3]
var k = 4

//sliding window

const maxAverage = (nums, k) => { 
  let currentSum = 0;
  for(let i = 0; i < k; i++){ 
    currentSum += nums[i]
  }
  console.log(currentSum)
  let max = currentSum;
  for(i = k; i < nums.length;i++){
    currentSum += nums[i] - nums[i-k]
    max = Math.max(max, currentSum)
  }
return max / k
}

console.log(maxAverage(nums, k))