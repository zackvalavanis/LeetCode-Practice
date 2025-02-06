nums = [2, 7, 11, 15]
target = 9;

var twoSum = function(nums, target) {
  indicies = {}
  console.log(indicies)
  
  for ( let i = 0; i < nums.length; i++) { 
    const num = nums[i]
    const remainder = target - num
    if (remainder in indicies){ 
      return [indicies[remainder], i]
    }
    indicies[num] = i;
  }
  return [] 
};

console.log(twoSum(nums, target))