// Given ONE array of strings, return a new array that contains every combination of each string with every other string in the array.

// Input: ["a", "b", "c", "d"]
// Output: ["ab", "ac", "ad", "ba", "bc", "bd", "ca", "cb", "cd", "da", "db", "dc"]

var x = ["a", "b", "c", "d"]

const mesh = (x) => { 
  var newArray = [];
  for(let i = 0; i < x.length; i++){ 
    j = 0;
    for(let j = 0; j < x.length; j++){ 
      if(x[i] !== x[j]){ 
        newArray.push(x[i] + x[j])
      }
    }
  }
return newArray
}

console.log(mesh(x))