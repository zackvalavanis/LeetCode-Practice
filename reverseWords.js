// Description
// Given a string of words, write a function that returns a new string that contains the words in reverse order.

var input = 'popcorn is so cool isn’t it yeah i thought so'
// Output: “so thought i yeah it isn’t cool so is popcorn”

const reverseWords = (input) => { 
  var words = input.split(' ')
  console.log(words)
  var i = 0;
  var j = words.length -1; 
  while(i < j) { 
    var temp = words[i]
    words[i] = words[j]
    words[j] = temp
    i++
    j--
  }
  return words.join(' ')
}

console.log(reverseWords(input))