var numbers = [1, 7, 3, 9, 5]

const maxNumber = (numbers) => { 
  if(numbers.length === 1){ 
    return numbers[0];
  }
  const restMax = maxNumber(numbers.slice(1))
  return numbers[0] > restMax ? numbers[0] : restMax;
}

console.log(maxNumber(numbers))

// iteration
// var numbers = [1, 2, 3, 5, 4]

// const maxNumber = (numbers) => {
//   var max = 0;
//   for(let i = 0; i < numbers.length; i++){ 
//     var num = numbers[i];
//     if(max < num){ 
//       max = num;
//     }
//   } 
//   return max
// }

// console.log(maxNumber(numbers))