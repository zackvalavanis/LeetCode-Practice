x = [4, 2, 5, 99, -4]

var double = (x) => { 
  for(let i = 0; i < x.length; i++){ 
    x[i] *= 2
  }
  return x
}

console.log(double(x))