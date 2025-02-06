// Given two arrays of strings, return a new string that contains every combination of a string from the first array concatenated with a string from the second array.

// Input: ["a", "b", "c"], ["d", "e", "f", "g"]
// Output: ["ad", "ae", "af", "ag", "bd", "be", "bf", "bg", "cd", "ce", "cf", "cg"]


var array1 = ["a", "b", "c"]
var array2 = ["d", "e", "f", "g"]

const mesh = (array1, array2) => { 
  var meshedArray = []
  for(let i = 0; i < array1.length; i++){ 
    j = 0;
    for(let j = 0; j < array2.length; j++){ 
      meshedArray.push(array1[i] + array2[j])
    }
  }
  return meshedArray
}

console.log(mesh(array1, array2))