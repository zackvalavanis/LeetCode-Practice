// // Given two sorted arrays, merge the second array into the first array while ensuring that the first array remains sorted. Do not use any built-in sort methods.

// // Input :
// // A : [1, 5, 8]
// // B : [6, 9]

// Modified A : [1, 5, 6, 8, 9]

var a = [1, 5, 8]
var b = [6, 9]

const mergeSorted = (a, b) => {
  var i = 0;
  var j = 0;
  while(j < b.length) { 
    var number = b[j]
    console.log(number)
    if(i >= a.length || a[i] >= number){ 
      a.splice(i, 0, number)
      j++
    } else { 
      i++
    }
  }
return a
}

console.log(mergeSorted(a, b))