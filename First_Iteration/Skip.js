x = [2, 1, 3, 2, 5, 1, 2, 6, 2, 7, 1, 5, 6, 3, 2, 6, 2, 1, 2]

var skip = (x) => { 
  let j = 0;
  for(let i = 0; i < x.length;i += x[i]) { 
    x[j] = x[i]
    j++
  }
  x.length = j;
  return x
}

console.log(skip(x))