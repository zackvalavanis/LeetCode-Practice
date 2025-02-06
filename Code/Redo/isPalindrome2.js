x = 121

var isPalindrome = function(x) {
  var str = x.toString();
  var i = 0;
  var j = str.length - 1
  console.log(i, j)
  while( i < j ){ 
    if(str[i] !== str[j]){ 
      return false
    }
    i++
    j--
  }
  return true;
};

console.log(isPalindrome(x))