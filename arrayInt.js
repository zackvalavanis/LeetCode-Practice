// Given two arrays, return a new array that contains the intersection of the two arrays. The intersection means the values that are contained in both of the arrays. Do not use the "&", or any built-in intersection methods.

// NOTE: You must accomplish this in O(n) time. This is also known as linear time.

// Input: [1, 2, 3, 4, 5], [1, 3, 5, 7, 9]
// Output: [1, 3, 5]

var input1 = [1, 2, 3, 4, 5]
var input2 = [1, 3, 5, 7, 9]

const arrayInt = (input1, input2) => { 
  var set = new Set(input2)
  var arrayNew = []
  for(let num of input1)
  if(set.has(num)){ 
    arrayNew.push(num)
  }
return arrayNew
}

console.log(arrayInt(input1, input2))