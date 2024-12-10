// Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

var nums = [0,1]

const missingNumber = (nums) => { 
  var set = new Set(nums)

  for(let i = 0; i <= nums.length; i++){ 
    console.log(i)
    if(!(set.has(i))){ 
      return i
    }
  }

}

console.log(missingNumber(nums))