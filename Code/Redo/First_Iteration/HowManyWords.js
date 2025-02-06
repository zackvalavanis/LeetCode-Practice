s = 'how many eggs are in a half-dozen, 13?'


// var wordCount = function (s) { 
//   var words = s.split(" ")
//   console.log(words)
//   var cleaned = words.filter((word) => !/\d/.test(word))
//   console.log(cleaned)
//   return cleaned.length
// }

// console.log(wordCount(s))

var wordCount = function (s) { 
  // Match words that can include hyphens and ignore digits
  var words = s.match(/\b[a-zA-Z]+(-[a-zA-Z]+)*\b/g);
  // If there are no matches, return 0; otherwise, return the count of matched words
  return words ? words.length : 0;
}

var s = 'how many eggs are in a half-dozen, 13?';
console.log(wordCount(s)); // Output: 7
