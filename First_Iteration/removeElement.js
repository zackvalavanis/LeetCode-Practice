var nums = [3,2,2,3]
var val = 3

var removeElement = function(nums, val) { 
  var numbers = 0;
  for(let i = 0; i < nums.length; i++){ 
   var num = nums[i]
   if(num !== val){ 
    nums[numbers] = num
    numbers++
   }
  }
  return numbers
}

console.log(removeElement(nums, val))