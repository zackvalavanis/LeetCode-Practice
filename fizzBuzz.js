// Write a function that prints out every number from 1 to N, with the following exceptions:

// If the number is divisible by 3, print out "FIZZ".
// If the number is divisible by 5, print out "BUZZ".
// If the number is divisible by both 3 and 5, print out "FIZZBUZZ".


n = 20;

const fizzbuzz = (n) => { 
for(i = 1; i <= n; i++){
if(i % 3 === 0 && i % 5 === 0) { 
  console.log('FIZZBUZZ')
} else if(i % 3 === 0){ 
  console.log("FIZZ")
} else if(i % 5 === 0){ 
  console.log("BUZZ")
} else { 
  console.log(i)
}
}
} 

console.log(fizzbuzz(n))