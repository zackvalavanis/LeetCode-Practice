// Minimum Value to Get Positive Step by Step Sum
// Given an array of integers nums, you start with an initial positive value startValue.

// In each iteration, you calculate the step by step sum of startValue plus elements in nums (from left to right).

// Return the minimum positive value of startValue such that the step by step sum is never less than 1.



var nums = [-3,2,-3,4,2]


const minValuePos = (nums) => { 
  let sum = 0; 
  let minSum = 0; 
  for(let num of nums){ 
    sum += num
    minSum = Math.min(minSum, sum)
  }
  return 1 - minSum
}

console.log(minValuePos(nums))