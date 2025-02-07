// Input: [5, -2, 1, -9, -7, 2, 6]
// Output: 63 (-9 * -7)

var x = [5, -2, 1, -9, -7, 2, 6]

const largestProduct = (x) => { 
  var maxProduct = 0
  for(let i = 0; i< x.length;i++){ 
    for(let j = i + 1; j < x.length; j++){ 
      let currentProduct = x[i] * x[j]
      if(currentProduct > maxProduct){ 
        maxProduct = currentProduct
      }
    }
  }
  return maxProduct
}

console.log(largestProduct(x))