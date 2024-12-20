// Find the largest product of any two numbers within a given array.


// Output: 63 (-9 * -7)

var input = [5, -2, 1, -9, -7, 2, 6]

const largestProduct = (input) => { 
  var largestProducts = 1
  for(let i = 0; i < input.length; i++){ 
    var number = input[i]
    j = 0
    for(let j = 0; j < input.length; j++){ 
      var number2 = input[j]
      var product = 1
      if(number !== number2){ 
        product = number * number2 
        if(largestProducts < product){ 
          largestProducts = product
        }
      }
    }
  }
return largestProducts
}

console.log(largestProduct(input))