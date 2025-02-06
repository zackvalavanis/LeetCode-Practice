// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

// You must write an algorithm that runs in O(n) time.

// I need to sort the elements first 

var nums = [100,4,200,1,3,2]

const sort = (nums) => { 
  if(nums.length === 0) return 0;
  var numSet = new Set(nums);
  let longestStreak = 0;

  for(const num of numSet) { 
    if(!numSet.has(num-1)){ 
      let currentNum = num
      let currentStreak = 1
      while(numSet.has(currentNum + 1)) { 
        currentNum++
        currentStreak++
      }
      longestStreak = Math.max(longestStreak, currentStreak)
    }
  }
return longestStreak
}

console.log(sort(nums))
