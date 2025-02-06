x = 121

var isPalindrome = function(x) {
  var str = x.toString()
  console.log(x)
  let i = 0;
  let j = str.length - 1;
  console.log(x, j)
  while(i < str.length){ 
    num = str[i]
    num2 = str[j]
    console.log(num, num2)
    if (!(num === num2)){ 
      return false
    } else{ 
      i++ 
      j--
    }
  }
  return true
};

console.log(isPalindrome(x))