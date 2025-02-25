var nums = [1,1,1,0,0,0,1,1,1,1,0]
var k = 2


const maxOnes = (nums, k) => { 
  var zeroesCount = 0;
  var maxOnes = 0;
  var i = 0; 
  for(let j = 0; j < nums.length; j++){ 
    if(nums[j] === 0){ 
      zeroesCount++
    } 
    while(zeroesCount > k){ 
    if(nums[i] === 0) { 
      zeroesCount--
    }
    i++
  }
  maxOnes = Math.max(maxOnes, j - i + 1)
}
return maxOnes
}

console.log(maxOnes(nums, k))