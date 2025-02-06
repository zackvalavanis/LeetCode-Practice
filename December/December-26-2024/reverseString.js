var string = 'hello'

const reverse = (string) => { 
  var str = string.split('')
  var i = 0
  var j = str.length -1
  while(i < j) { 
    var temp = str[i]
    str[i] = str[j]
    str[j] = temp
    i++
    j--
  }
  return str.join('')
}

console.log(reverse(string))