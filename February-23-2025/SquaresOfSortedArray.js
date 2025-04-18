// Input: nums = [-4,-1,0,3,10]
// Output: [0,1,9,16,100]
// Explanation: After squaring, the array becomes [16,1,0,9,100].
// After sorting, it becomes [0,1,9,16,100].

var nums = [-4,-1,0,3,10]


const squareSorted = (nums) => { 
  for(let i = 0; i < nums.length; i++){ 
    nums[i] = nums[i] * nums[i]
  }
  var i = 0;
  var j = nums.length - 1
  let result = new Array(nums.length)
  let resultIndex = nums.length - 1;
  while(i <= j) { 
    if(nums[i] > nums[j]){ 
      result[resultIndex] = nums[i]
      i++
    } else { 
      result[resultIndex] = nums[j]
      j--
    }
    resultIndex--
  }
  for(let i = 0; i < nums.length; i++){ 
    nums[i] = result[i]
  }
  return nums
  
}

console.log(squareSorted(nums))