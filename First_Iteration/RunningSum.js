nums = [3,1,2,10,1]

var runningSum = function(nums) {
  if(nums === null || nums.length === 0) return 0;
  let newArray = []
  var sum = 0;

  for(let i = 0; i < nums.length; i++){ 
    var current = nums[i]
    newArray.push(sum += current)
  }
  return newArray
};


console.log(runningSum(nums))

// Changing the current array
// nums = [3,1,2,10,1]

// var runningSum = function(nums) {
//   for(let i = 1; i < nums.length; i++){ 
//     nums[i] += nums[i-1]
//   }
//   return nums
// }

// console.log(runningSum(nums))


// For both the time complexity = O(n)
// and the space complexity = O(1) since your not adding any additional data structures