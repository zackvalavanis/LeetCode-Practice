// Given two arrays, return a new array that contains the intersection of the two arrays. The intersection means the values that are contained in both of the arrays. Do not use the "&", or any built-in intersection methods.

// NOTE: You must accomplish this in O(n) time. This is also known as linear time.

// Input: [1, 2, 3, 4, 5], [1, 3, 5, 7, 9]
// Output: [1, 3, 5]

array1 = [1, 2, 3, 4, 5]
array2 = [1, 3, 5, 7, 9]

const intersection = (array1, array2) => { 
  let set = new Set(array2)
  let array = []
  for(let num of array1) { 
    if(set.has(num)){ 
      array.push(num)
    }
  }
  return array
}

console.log(intersection(array1, array2))