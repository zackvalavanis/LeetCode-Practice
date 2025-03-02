//Prefix Sum 

var nums = [1, 6, 3, 2, 7, 2]
var queries = [[0,3], [2,5], [2, 4]]
var k = 13

const q = (nums, queries, k) => { 
  var prefix = [nums[0]]
  for(let i = 1; i < nums.length; i++){ 
    prefix.push(nums[i] + prefix[prefix.length -1])
  }
  var ans = []
  for(let [x, y] of queries){ 
    var curr = prefix[y] - prefix[x] + nums[x]
    ans.push(curr < k) 
  }
  return ans
}

console.log(q(nums, queries, k))