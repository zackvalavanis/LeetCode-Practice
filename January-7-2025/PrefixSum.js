// 2270. Number of Ways to Split Array
// Medium
// Topics
// Companies
// Hint
// You are given a 0-indexed integer array nums of length n.

// nums contains a valid split at index i if the following are true:

// The sum of the first i + 1 elements is greater than or equal to the sum of the last n - i - 1 elements.
// There is at least one element to the right of i. That is, 0 <= i < n - 1.
// Return the number of valid splits in nums.


var nums = [10, 3, -8, 7]

var waystosplitarray = (nums) => { 
  let n = nums.length
  let prefix = [nums[0]]
  for(let i = 1; i < n; i++){ 
    prefix.push(nums[i] + prefix[prefix.length -1])
  }
  let ans = 0;
  for(let i = 0; i < n -1; i++){ 
    let leftSection = prefix[i]
    let rightSection = prefix[n - 1] - prefix[i]
    if(leftSection > rightSection){ 
      ans++
    }
  }
  return ans
}

console.log(waystosplitarray(nums))