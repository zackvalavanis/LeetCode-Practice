n = 6;

const fibNumbers = (n) => { 
  if (n <= 0) return 0;  
  if (n === 1) return 1;

  var a = 0;
  var b = 1;
  for(let i = 2; i <= n; i++){ 
    let temp = a + b;
    a = b;
    b = temp
  }
return b
}

console.log(fibNumbers(n))