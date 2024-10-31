nums = [1, 2, 3, 3, 4]


var removeDuplicates = function(nums) {
  var object = {} 
  var uniqueNums = []
  for(let i = 0; i < nums.length; i++){ 
    const num = nums[i];
    console.log(num)
    if(!(num in object)){ 
      object[num] = true;
      uniqueNums.push(num);
    }
  }
  return uniqueNums
};

console.log(removeDuplicates(nums));