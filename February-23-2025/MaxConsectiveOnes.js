
var nums = [1,1,1,0,0,0,1,1,1,1,0]
var k = 2


const maxConsecutiveOnes = (nums, k) => { 
  let left = 0; 
  let maxOnes = 0;
  let zeroesCount = 0;
  for(let i = 0; i < nums.length; i++){ 
    if(nums[i] === 0){ 
      zeroesCount++
    }
    while(zeroesCount > k){ 
      if(nums[left] === 0) { 
        zeroesCount--

      }
      left++
    }
    maxOnes = Math.max(maxOnes, i - left + 1)
  }
  return maxOnes
}

console.log(maxConsecutiveOnes(nums, k))