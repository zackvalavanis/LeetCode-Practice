x = [1, 2, 3, 4, 5];

var reverseArray = function(x) {
  let left = 0;
  let right = x.length-1;
  while (left < right){ 
    let temp = x[left]
    x[left] = x[right]
    x[right] = temp
    left++
    right--
  }
 return x
}

console.log(reverseArray(x))