// Input: [5, 17, -4, 20, 12]
// Output: 20

var input = [5, 17, -4, 20, 12]

const max = (input) => { 
  var max = 0;
  for(let i = 0; i < input.length; i++) { 
    if(max < input[i]){ 
      max = input[i]
    }
  }
return max
}

console.log(max(input))