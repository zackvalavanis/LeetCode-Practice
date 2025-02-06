var nums = [1,3,5,6]
var target = 2


var searchInsert = function(nums, target) {
  let index = nums.indexOf(target);
  if(index >= 0){ 
    return index;
  }
  for(let i = 0; i < nums.length; i++){ 
    let num = nums[i];
    if (target < num){ 
      return i 
    }
  }
  return nums.length
};


console.log(searchInsert(nums, target))