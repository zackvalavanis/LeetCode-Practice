// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Find the sum of all the multiples of 3 or 5 below 1000.


var x = 10

const variablesbelow = (x) => { 
  var list = []
  var number = 1;
  while(number < x){ 
    if(number % 3 === 0 || number % 5 === 0){ 
      list.push(number)
    }
    number++
  }
  var sum = 0;
  for(let i = 0; i < list.length; i++){ 
    sum += list[i]
  }
return sum
}

console.log(variablesbelow(x))