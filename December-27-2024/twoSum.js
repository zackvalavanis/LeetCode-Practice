var nums = [2,7,11,15]
var target = 9

const twoSum = (nums, target) => { 
  var hash = {}
  for(let i = 0; i < nums.length; i++){ 
    var number = nums[i]
    var remainder = target - number
    if(remainder in hash){ 
      return [hash[remainder], i]
    }
    hash[number] = i
  }
  return hash
}
console.log(twoSum(nums, target))