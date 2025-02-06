var nums = [10,4,-8,7]

const numWays = (nums) => { 
  var prefix = [nums[0]];
  for(let i = 1; i < nums.length; i++){ 
    prefix.push(nums[i] + prefix[i - 1])
  }
  const totalSum = prefix[prefix.length -1]
  let ans = 0;
  for(i = 0; i < nums.length -1; i++){ 
    const leftSum = prefix[i]
    const rightSum = totalSum - leftSum
    if(leftSum > rightSum){ 
      ans++
    }
  }
return ans 
}

console.log(numWays(nums))