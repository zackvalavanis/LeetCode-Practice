// Write a function that prints out every number from 1 to N, with the following exceptions:

// If the number is divisible by 3, print out "FIZZ".
// If the number is divisible by 5, print out "BUZZ".
// If the number is divisible by both 3 and 5, print out "FIZZBUZZ".

var n = 10

const fizzbuzz = (n) => { 
  for(let i = n; i >= 0; i--){ 
    if(i % 3 === 0 && i % 5 === 0){ 
      console.log('FIZZBUZZ', i) 
    } else if (i % 3 === 0){ 
      console.log('FIZZ', i) 
    } else if (i % 5 === 0){ 
      console.log('BUZZ', i) 
    } else { 
      console.log(i)
    }
  }
}

console.log(fizzbuzz(n))