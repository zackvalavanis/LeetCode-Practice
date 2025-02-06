// Given a string of words, write a function that returns a new string that contains the words in reverse order.

// Input: “popcorn is so cool isn’t it yeah i thought so”
// Output: “so thought i yeah it isn’t cool so is popcorn”


var words = 'popcorn is so cool isn’t it yeah i thought so'

const reverseWords = (words) => { 
  var word = words.split(' ')
  var i = 0;
  var j = word.length -1
  while(i < j){ 
    var temp = word[i]
    word[i] = word[j]
    word[j] = temp
    i++
    j--
  }
  return word.join(' ')

}

console.log(reverseWords(words))