var s = ["h","e","l","l","o"]

const reverseString = (s) => { 
  var i = 0;
  var j = s.length - 1;
  while(i < j){
    const temp = s[i]
    s[i] = s[j]
    s[j] = temp
    j--
    i++
  }
  
return s

}

console.log(reverseString(s))