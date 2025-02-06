// Given an array of numbers, write a function that returns a new array whose values are the original array’s value doubled.

var input = [4, 2, 5, 99, -4]
// Output: [8, 4, 10, 198, -8]

// new array 

const nArray = (input) => { 
  var newArray = [];
  for(let i = 0; i < input.length; i++){ 
    var number = input[i];
    newArray.push(number * 2)
  }
  return newArray
}

console.log(nArray(input))

// update current array

const uArray = (input) => { 
  return input.map((number) => { 
    return number * 2
  })
}

console.log(uArray(input))

