var nums = [2, 7, 8, 6, 2];
var target = 9

var twoSum = function(nums, target) {
  var object = {}
  for(let i = 0; i < nums.length; i++ ){
    var num = nums[i];
    var remainder = target - num;
    if(remainder in object){ 
      return [object[remainder], i]
    }
    object[num] = i
  }
}

console.log(twoSum(nums, target))