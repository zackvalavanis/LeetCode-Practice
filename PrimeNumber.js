// Write a function that returns whether a given number is a prime number.

var n = 11;

const isPrime = (n) => { 
if(n <= 1) return false;
if(n === 2) return true
if(n % 2 === 0) return false

for(let i = 3; i <= Math.sqrt(n); i+= 2){ 
  if(n % i === 0){ 
    return false
  }
}
return true
}

console.log(isPrime(n))

