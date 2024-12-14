// Given a string of words, write a function that returns a new string that contains the words in reverse order.

// Input: “popcorn is so cool isn’t it yeah i thought so”
// Output: “so thought i yeah it isn’t cool so is popcorn”

var input = 'popcorn is so cool isn’t it yeah i thought so'

const revWords = (input) => { 
  var arr = input.split(' ')
  var i = 0; 
  var j = arr.length -1
  while(i < j){ 
    var temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
    i++
    j--
  }
  return arr.join(' ')

}

console.log(revWords(input))