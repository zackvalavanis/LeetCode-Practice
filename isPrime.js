var number = 17

const primeNumber = (number) => { 
  if(number < 2 ){ 
    return false
  }
  for(let i = 2; i < Math.sqrt(number); i++){ 
    if(number % i === 0){ 
      return false
    } else { 
      return true
    }
  }
}
console.log(primeNumber(number))

