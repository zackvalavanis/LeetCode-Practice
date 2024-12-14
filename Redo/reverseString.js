// Input: “abcde”
// Output: “edcba”

var input = 'abcde'

const reverseString = (input) => {
  var i = 0;
  var arr = input.split('')
  var j = arr.length -1;
  
  while(i < j){ 
    var temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
    i++
    j--
  }
return arr.join('')
}

console.log(reverseString(input))