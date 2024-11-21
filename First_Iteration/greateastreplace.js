// Given an array arr, replace every element in that array with the greatest element among the elements to its right, and replace the last element with -1.

// After doing so, return the array.

var arr = [17,18,5,4,6,1]
var maxRight = -1;

const replaceElements = (arr) => { 
  for(let i = arr.length - 1; i >= 0; i--) { 
    num = arr[i]
    arr[i] = maxRight
    maxRight = Math.max(maxRight, num)
  }
  return arr

}

console.log(replaceElements(arr))
