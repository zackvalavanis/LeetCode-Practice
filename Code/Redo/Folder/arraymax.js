// Write a function that returns the greatest value from an array of numbers.

var input = [5, 17, -4, 20, 12]
// Output: 20

const maxNumber = (input) => {
  var max = 0;
  for(let i = 0; i < input.length; i++){ 
    var number = input[i];
    if(max < number){ 
      max = number
    }
  }
  return max
}

console.log(maxNumber(input))