// Output: 3
// Explanation: The answer is "abc", with the length of 3.


var s = "abcabcbb"

const longestSub = (s) => {
  var set = new Set()
  var left = 0
  var maxSum = 0
  for(let right = 0; right < s.length; right++){ 
    while(set.has(s[right])){ 
      set.delete(s[left])
      left++
    }
    set.add(s[right])
    maxSum = Math.max(maxSum, right - left + 1)
  }
  return maxSum
}

console.log(longestSub(s))

