// Given an integer array arr, count how many elements x there are, such that x + 1 is also in arr. If there are duplicates in arr, count them separately.

 

// Example 1:

// Input: arr = [1,2,3]
// Output: 2

var arr = [1,2,3]

var countElements = (arr) => { 
  var count = 0;
  var set = new Set(arr)
  for(let num of arr){ 
    if(set.has(num + 1)){ 
      count++
    }
  }
  return count
}

console.log(countElements(arr))