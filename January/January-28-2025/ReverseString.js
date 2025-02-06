var input = 'olleh'

const reverse = (input) => { 
  var str = input.split('');
  var j = str.length - 1;
  var i = 0;
  while(i < j){ 
    var temp = str[i]
    str[i] = str[j]
    str[j] = temp 
    i++
    j--
  }
  return str.join('')
}

console.log(reverse(input))