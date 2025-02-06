var number = 121

const isPalindrome = (number) => { 
  var str = number.toString()
  var i = 0;
  var j = str.length - 1;
  while(i < j){ 
    if(str[i] !== str[j]){ 
      return false
    }
    i++
    j--
  }
  return true
}

console.log(isPalindrome(number))