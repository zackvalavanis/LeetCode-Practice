// Given two arrays, return a new array that contains the intersection of the two arrays. The intersection means the values that are contained in both of the arrays. Do not use the "&", or any built-in intersection methods.

// NOTE: You must accomplish this in O(n) time. This is also known as linear time.

// Input: [1, 2, 3, 4, 5], [1, 3, 5, 7, 9]
// Output: [1, 3, 5]

var array = [1, 2, 3, 4, 5]
var array2 = [1, 3, 5, 7, 9]

const intersect = (array, array2) => { 
  var set = new Set(array2)
  var newArray = []
  for(let i = 0; i < array.length;i++){ 
    if(set.has(array[i])){ 
      newArray.push(array[i])
    }
  }
  return newArray
}

console.log(intersect(array, array2))