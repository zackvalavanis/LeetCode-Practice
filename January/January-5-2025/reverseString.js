var string = 'hello'

const reverseString = (string) => { 
  var arr = string.split('')
  var i = 0;
  var j = arr.length - 1
  while(i < j){ 
    var temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
    i++
    j--
  }
  return arr.join('')
}

console.log(reverseString(string))