x = 121


var isPalindrome = function(x) {
  if( x.length === 0) return '';
  var str = x.toString();
  i = 0;
  j = str.length - 1;
  console.log(j)

  while (i < j) { 
    if (str[i] !== str[j]) { 
      return false
    } 
    i++ 
    j--
  }
  return true 
};

console.log(isPalindrome(x));x