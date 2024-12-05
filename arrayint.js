// Given two arrays, return a new array that contains the intersection of the two arrays. The intersection means the values that are contained in both of the arrays. Do not use the "&", or any built-in intersection methods.

// NOTE: You must accomplish this in O(n) time. This is also known as linear time.

// Input: [1, 2, 3, 4, 5], [1, 3, 5, 7, 9]
// Output: [1, 3, 5]

var input = [1, 2, 3, 4, 5]
var input2 = [1, 3, 5, 7, 9]

const intArray = (input, input2) => { 
  var set = new Set(input2)
  var result = [];
  for(let i = 0; i < input.length;i++){ 
    var number = input[i]
    if(set.has(number)){ 
      result.push(number)
    }
  }
return result
}

console.log(intArray(input, input2))

// const intArray = (input, input2) => { 
//   var i = 0;
//   var j = 0;
//   var array = []
//   while(i < input.length) { 
//     var number = input[i]
//     j = 0
//     while(j < input2.length){
//     if(number !== input2[j]){ 
//       j++
//     }else { 
//       array.push(number)
//       i++
//       j++
//     }
//     }
//   i++
//   }
//   return array
// }

// console.log(intArray(input, input2))
