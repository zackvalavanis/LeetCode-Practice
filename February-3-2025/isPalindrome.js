var x = 121

const isPalindrome = (x) => { 
  var str = x.toString()
  var i = 0;
  var j = str.length - 1
  while(i < j){ 
    if(str[i] !== str[j]){ 
      return false
    } else { 
      i++
      j--
    }
  }
  return true
}

console.log(isPalindrome(x))