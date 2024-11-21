var number = 121

const palindrome = (number) => { 
  let i = 0;
  let str = number.toString()
  let j = str.length -1 
  while(str[i] <= str[j]) { 
    if(str[i] !== str[j]){ 
      return false
    }
    i++
    j--
  }
  return true
}

console.log(palindrome(number))