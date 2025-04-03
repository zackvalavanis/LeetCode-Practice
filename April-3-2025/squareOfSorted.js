// Input: nums = [-4,-1,0,3,10]
// Output: [0,1,9,16,100]
// Explanation: After squaring, the array becomes [16,1,0,9,100].
// After sorting, it becomes [0,1,9,16,100].

var nums = [-4,-1,0,3,10]

const squareSorted = (nums) => { 
  for(let i = 0; i < nums.length;i++){ 
    nums[i] = nums[i] * nums[i]
  } 
  let i = 0;
  let j = nums.length - 1;
  let sortedArray = new Array(nums.length);
  let result = nums.length -1
  while(i <= j){ 
    if(nums[i] > nums[j]){ 
    sortedArray[result] = nums[i]
    i++
    } else { 
      sortedArray[result] = nums[j]
      j--
    }
    result--
  }
  return sortedArray
}

console.log(squareSorted(nums))
