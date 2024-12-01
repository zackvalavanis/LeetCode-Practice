var input = [1, 2, 3, 4]
var output = 10;

const sumArray = (input) => { 
  var sum = 0;
  for(let i = 0; i < input.length; i++){ 
    number = input[i]
    sum += number
  }
return sum
}

console.log(sumArray(input))