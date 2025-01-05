// Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

// Input: nums = [-4,-1,0,3,10]
// Output: [0,1,9,16,100]

var nums = [-4,-1,0,3,10]

// okay so i need to square everything & then I need to sort it all 

const sorted = (nums) => { 
  for(let i = 0; i < nums.length; i++){ 
    var num = nums[i]
    nums[i] = num * num
  }
  var i = 0;
  while(i < nums.length -1){ 
    if(nums[i] > nums[i + 1]){ 
      var temp = nums[i]
      nums[i] = nums[i + 1]
      nums[i + 1] = temp
      i = 0
    } else { 
      i++
    }
  }
  return nums
}

console.log(sorted(nums))