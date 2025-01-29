var nums = [1,1,1,0,0,0,1,1,1,1,0]
var k = 2

const maxOne = (nums, k) => { 
  var zeroesCount = 0;
  var maxOnes = 0;
  var left = 0; 
  for(let right = 0; right < nums.length; right++){ 
    if(nums[right] === 0){ 
      zeroesCount += 1
    }
    while(zeroesCount > k){ 
      if(nums[left] === 0){ 
        zeroesCount--
      }
      left++
    }
    maxOnes = Math.max(maxOnes, right - left + 1)
  }
return maxOnes 
}

console.log(maxOne(nums, k))