var nums = [1,3,5,60]
var target =  40

var searchInsert = function(nums, target) {
  let index = nums.indexOf(target);
  if(index >= 0 ){ 
    return index;
  }
  for(let i = 0; i < nums.length; i++ ){ 
    num = nums[i];
    if(num > target){ 
      return i;
    } 
  }
  return nums.length
}

console.log(searchInsert(nums, target))