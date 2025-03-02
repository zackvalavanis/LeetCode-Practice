// Given two integer arrays nums1 and nums2, sorted in non-decreasing order, return the minimum integer common to both arrays. If there is no common integer amongst nums1 and nums2, return -1.

// Note that an integer is said to be common to nums1 and nums2 if both arrays have at least one occurrence of that integer.

 

// Example 1:

// Input: nums1 = [1,2,3], nums2 = [2,4]
// Output: 2
// Explanation: The smallest element common to both arrays is 2, so we return 2.

var nums1 = [1,2,3]
var nums2 = [8, 4]

const minValue = (nums1, nums2) => { 
  var set = new Set(nums1)
  var ans = Infinity
  for(let num of nums2){ 
    if(set.has(num)){ 
      ans = Math.min(ans, num)
    }
  }
  return ans === Infinity ? -1: ans
}

console.log(minValue(nums1, nums2))