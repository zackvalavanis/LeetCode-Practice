var s = "ab-cd"

const reverseLetters = (s) => {
  var split = s.split('')
  var left = 0;
  var right = split.length - 1
  while(left < right){ 
    if(!/[a-zA-Z]/.test(split[left])) { 
      left++
    } else if(!/[a-zA-Z]/.test(split[right])) { 
      right--
    } else { 
      var temp = split[left]
      split[left] = split[right]
      split[right] = temp
      left++
      right--
  }
}
return split.join('')
}

console.log(reverseLetters(s))