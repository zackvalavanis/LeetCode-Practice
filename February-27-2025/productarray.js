// Given an array of integers nums and an integer k, return the number of contiguous subarrays where the product of all the elements in the subarray is strictly less than k.

var nums = [10,5,2,6]
var k = 100

const productLarger = (nums, k) => { 
  var left = 0; 
  var curr = 1; 
  var ans = 0;

  for(let right = 0; right < nums.length; right++) { 
    curr *= nums[right]

    while(curr >= k) { 
      curr /= nums[left]
      left++
    }
    ans += right - left + 1
  }
  return ans
}

console.log(productLarger(nums, k))