var string = 'hello'

const reverseString = (string) => { 
  var i = 0;
  var str = string.split('')
  var j = str.length - 1;
  while(i < j){ 
    var temp = str[i]
    str[i] = str[j]
    str[j] = temp
    i++ 
    j--
  }
 return str.join('')
}

console.log(reverseString(string))

//alternatively 

const reverse = (string) => { 
  return string.split('').reverse().join('')
}

console.log(reverse(string))