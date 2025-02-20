var n = 121


const isPalindrome = (n) => { 
  var arr = n.toString()
  var i = 0; 
  var j = arr.length - 1
  while(i < j) { 
    if(arr[i] !== arr[j]){ 
      return false
    } else { 
      i++
      j--
    }
  }
return true
}

console.log(isPalindrome(n))