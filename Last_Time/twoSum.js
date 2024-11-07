nums = [2,7,11,15];
target = 9;

var twoSum = function(nums, target) {
  indicies = {}

  for (let i = 0; i < nums.length; i++){ 
    var num = nums[i];
    var remainder = target - num;
    if(remainder in indicies ){ 
      return  [indicies[remainder], i]
    } 
    indicies[num] = i;
  }
  return []
}

console.log(twoSum(nums, target))