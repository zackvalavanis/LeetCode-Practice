// Input: nums = [-4,-1,0,3,10]
// Output: [0,1,9,16,100]

var nums =  [-4,-1,0,3,10]

const squared = (nums) => { 
  for(let i =0; i < nums.length; i++){ 
    nums[i] = nums[i] * nums[i]
  }
  for(let i = 0; i < nums.length; i++){ 
    for(let j = i + 1; j < nums.length; j++){ 
      if(nums[i] > nums[j]){ 
        let temp = nums[i]
        nums[i] = nums[j]
        nums[j] = temp
      }
    }
  }
  return nums
}

console.log(squared(nums))