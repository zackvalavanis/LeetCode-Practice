nums = [2, 11, 7, 15]
target = 9;

const twoSum = function (nums, target) { 
  hash = {}
for(let i = 0; i < nums.length; i++){ 
  var num = nums[i];
  var remainder = target - num;
  if(remainder in hash){ 
    return [hash[remainder], i]
  }
  hash[num] = i
}
return []
}

console.log(twoSum(nums, target))