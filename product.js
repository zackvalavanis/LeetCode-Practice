// Input: [1, 2, 3, 4]
// Output: 24


var input = [1, 2, 3, 4];

const product = (input) => { 
  var product = 1;
  for(let i = 0; i < input.length; i++){ 
    product *= input[i]
  }
return product
}

console.log(product(input))
