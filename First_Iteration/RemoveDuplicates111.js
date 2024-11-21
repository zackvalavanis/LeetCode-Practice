nums = [1,1,2]

// var removeDuplicates = function(nums) { 
//   var object = {};
//   var uniquenums = []
//   for(let i = 0; i < nums.length; i++){ 
//     var num = nums[i];
//     if(!(num in object)){ 
//       object[num] = true
//       uniquenums.push(num)
//     }
//     for(let i = 0; i < uniquenums.length;i++){ 
//       nums[i] = uniquenums[i]
//     }
//   }
//   // return uniquenums
//   return nums
// }

nums = [1,1,2]

// var removeDuplicates = function(nums) { 
//   var object = {};
//   for(let i = 0; i < nums.length; i++){ 
//     var num = nums[i];
//     var x = 1
//     if(!(num in object)){ 
//       object[num] = 1
//     } else { 
//       object[num] +=1
//     }
//   }
//   var uniqueArray = Object.keys(object).map(Number)
//   return uniqueArray
// }

var removeDuplicates = function(nums) { 
  let index = 0;
  for(let i = 1; i < nums.length; i++){ 
    if(nums[i] !== nums[index]){ 
      index++
      nums[index] = nums[i]
    }
  }
  nums.length = index + 1
  return nums
}


console.log(removeDuplicates(nums))