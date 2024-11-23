var nums = [-4,-1,0,3,10]

const orderNumberSquares = (nums) => { 
  for(let i = 0; i < nums.length;i++){ 
    var num = nums[i]
    nums[i] = num * num
  }
let left = 0;
let right = nums.length -1;
let result = new Array(nums.length)
let resultIndex = nums.length - 1;
  while(left <= right){ 
    if(nums[left] > nums[right]){ 
      result[resultIndex] = nums[left]
      left++;
    } else { 
      result[resultIndex] = nums[right];
      right--;
    }
    resultIndex--
  }
  for(let i = 0; i < nums.length; i++){ 
    nums[i] = result[i]
  }
  return nums
}

console.log(orderNumberSquares(nums))