// Given two arrays of strings, return a new string that contains every combination of a string from the first array concatenated with a string from the second array.

var array1 = ["a", "b", "c"]
var array2 = ["d", "e", "f", "g"]
// Output: ["ad", "ae", "af", "ag", "bd", "be", "bf", "bg", "cd", "ce", "cf", "cg"]


const concatArrays =(array1, array2) =>{ 
  var i = 0;
  var j = 0;
  var string = []
  while(i < array1.length){ 
    var letter = array1[i]
    var j = 0;
    while(j < array2.length){ 
      var letter2 = array2[j]
      j++
      string.push(letter + letter2)
    }
    i++
  }
 return string
}

console.log(concatArrays(array1, array2))