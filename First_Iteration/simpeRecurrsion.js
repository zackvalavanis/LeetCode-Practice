// function fn(i) { 
//   if (i > 3){ 
//     return
//   }
 
//   console.log(i)
//   fn(i + 1) 
//   return console.log(`End of call where i = ${i}`);
// }

// fn(1)


function F(n) { 
  if(n <= 1) { 
    return n
  }
  var oneBack = F(n - 1)
  var twoBack = F(n - 2)
  return oneBack + twoBack
}

console.log(F(7))