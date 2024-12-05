// Find the largest product of any two numbers within a given array.

var numbers = [5, -2, 1, -9, -7, 2, 6]
// Output: 63 (-9 * -7)

const largestProduct = (numbers) => { 
  var i = 0;
  var j = 0;
  maxProduct = 1;
  while(i < numbers.length){ 
    var number = numbers[i]
    j = 0;
    while(j < numbers.length){ 
      var number2 = numbers[j]
      if(number !== number2){ 
        let multiply = number * number2
        if(maxProduct < multiply){ 
          maxProduct = multiply
        }
      }
      j++
    }
    i++
  }
return maxProduct
}

console.log(largestProduct(numbers))