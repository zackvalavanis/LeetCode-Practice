var number = 1221

const palindrome = (number) => { 
  var i = 0;
  var str = number.toString()
  console.log(str)
  var j = str.length - 1
  while(i < j ){ 
    if(str[i] !== str[j]){ 
      return false
    } else { 
      i++ 
      j--
    }
  }
  return true
}


console.log(palindrome(number))