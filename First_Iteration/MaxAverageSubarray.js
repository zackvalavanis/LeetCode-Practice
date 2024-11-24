var nums = [1,12,-5,-6,50,3]
var k = 4


const maxAverageSubarray = (nums, k) => { 
let currentSum = 0 
for(let i = 0; i < k; i++){ 
  currentSum += nums[i]
}
let max = currentSum
console.log(max)

for(let i = k; i< nums.length; i++){ 
  currentSum += nums[i] - nums[i -k];
  max = Math.max(max, currentSum)
}
return max / k
}

console.log(maxAverageSubarray(nums, k))