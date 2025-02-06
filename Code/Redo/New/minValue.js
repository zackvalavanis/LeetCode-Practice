var nums = [-3, 2, -3, 4, 2]

const minSum = (nums) => { 
  let runningSum = 0;
  let minSum = 0;

  for(let num of nums) { 
    runningSum += num;
    minSum = Math.min(minSum, runningSum )
  }
  return 1 - minSum 
}

console.log(minSum(nums))