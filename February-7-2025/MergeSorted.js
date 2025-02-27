// Given two sorted arrays, merge the second array into the first array while ensuring that the first array remains sorted. Do not use any built-in sort methods.

// Input :
// A : [1, 5, 8]
// B : [6, 9]

// Modified A : [1, 5, 6, 8, 9]


var a = [1, 5, 8]
var b = [6, 9]

const merge = (a, b) => { 
  var sortedArray = []
  var i = 0;
  var j = 0;
  while(i < a.length && j < b.length){ 
    if(a[i] < b[j]){ 
      sortedArray.push(a[i])
      i++
    } else { 
      sortedArray.push(b[j])
      j++
    }
  }
  while(i < a.length){ 
    sortedArray.push(a[i])
    i++
  }
  while(j < b.length){ 
    sortedArray.push(b[j])
    j++
  }
return sortedArray
}

console.log(merge(a, b))