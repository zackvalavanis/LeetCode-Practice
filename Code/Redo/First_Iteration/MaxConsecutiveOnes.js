var nums = [1,1,1,0,0,0,1,1,1,1,0]
var k = 2

//sliding window technique

const longestOnes = (nums, k) => { 
  let left = 0;
  let maxOnesCount = 0;
  let zeroesCount = 0;

  for(let right = 0; right < nums.length; right++){ 
    if(nums[right] === 0){
      zeroesCount++
    }
    while(zeroesCount > k){ 
      if(nums[left] === 0){ 
        zeroesCount--
      } 
      left++
    }
    maxOnesCount = Math.max(maxOnesCount, right-left + 1)
  }
return maxOnesCount
}

console.log(longestOnes(nums, k))