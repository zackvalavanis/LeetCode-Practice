var array = [2, 4, 6]

// Iterative loop 

// const sumIterate = (array) => { 
//   var sum = 0;
//   for(let i = 0; i < array.length;i++){
//     let num = array[i]
//     sum += num
//   }
// return sum
// }

// console.log(sumIterate(array))

//recursive loop 

const sumRecursive = (array) => { 
  if (array.length === 0) { 
    return 0;
  }

  return array[0] + sumRecursive(array.slice(1))

}

console.log(sumRecursive(array))