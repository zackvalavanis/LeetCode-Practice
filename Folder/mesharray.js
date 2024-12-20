// Given ONE array of strings, return a new array that contains every combination of each string with every other string in the array.

// Input: ["a", "b", "c", "d"]
// Output: ["ab", "ac", "ad", "ba", "bc", "bd", "ca", "cb", "cd", "da", "db", "dc"]

var input = ["a", "b", "c", "d"]


const combo = (input) => { 
  var i = 0
  var j = 0
  var meshed = []
  while(i < input.length){ 
    letter1 = input[i]
    j = 0
    while(j < input.length){ 
      letter2 = input[j]
      if(letter1 === letter2){
        j++
      } else { 
        meshed.push(letter1 + letter2)
        j++
      }
     
    }
    i++
  }
return meshed
}

console.log(combo(input))