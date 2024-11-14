var x = [1, 2, 3, 4]

const sumOfAll = (x) => { 
  var sum = 1;
  for(let i = 0; i < x.length;i++){ 
    var number = x[i]
    sum *= number
  }
  return sum
}

console.log(sumOfAll(x))