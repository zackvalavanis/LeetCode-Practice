var nums = [1,1,1,0,0,0,1,1,1,1,0]
var k = 2

const maxConsecutiveOnes = (nums, k) => { 
  var left = 0;
  var maxOnesCount = 0;
  var zeroesCount = 0;
  for(right = 0; right < nums.length; right++){ 
    if(nums[right] === 0){ 
      zeroesCount++
    }
    while(zeroesCount > k){
      if(nums[left] === 0){ 
        zeroesCount--
      }
      left++
    }
    maxOnesCount = Math.max(maxOnesCount, right - left + 1)
  }
  return maxOnesCount
}

console.log(maxConsecutiveOnes(nums, k))