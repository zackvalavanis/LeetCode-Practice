var x = 121

// Output: true

const isPalindrome = (x) => {
  var arr = x.toString()
  var j = arr.length - 1
  var i = 0;
  while(i < j){ 
    if(arr[i] !== arr[j]){ 
      return false
    } else{ 
      i++ 
      j--
    }
  }
  return true
}

console.log(isPalindrome(x))