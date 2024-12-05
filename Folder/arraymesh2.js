// Given ONE array of strings, return a new array that contains every combination of each string with every other string in the array.

// Input: ["a", "b", "c", "d"]
// Output: ["ab", "ac", "ad", "ba", "bc", "bd", "ca", "cb", "cd", "da", "db", "dc"]

var letters = ["a", "b", "c", "d"]

const arraymesh = (letters) => { 
  var i = 0;
  var j = 0;
  var array = [];
  while(i < letters.length){ 
    var letter1 = letters[i]
    j = 0;
    while(j < letters.length){ 
      var letter2 = letters[j]
      if(letter1 !== letter2){ 
        array.push(letter1 + letter2)
        j++
      } else { 
        j++
      }
    }
 
    i++
  }
  return array
}

console.log(arraymesh(letters))