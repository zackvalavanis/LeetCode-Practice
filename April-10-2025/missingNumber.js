// Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.
// Example 1:

// Input: nums = [3,0,1]

// Output: 2

// Explanation:

// n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.

var nums = [3,2,1]

const missingLetter = (nums) => { 
  var set = new Set(nums)
  let i = 1;
  while(i <= nums.length){ 
    if(!set.has(i)){ 
      return i 
    }
    i++
  }
  return -1
}

console.log(missingLetter(nums))