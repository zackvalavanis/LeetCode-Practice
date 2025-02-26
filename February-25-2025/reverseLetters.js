// Given a string s, reverse the string according to the following rules:

// All the characters that are not English letters remain in the same position.
// All the English letters (lowercase or uppercase) should be reversed.
// Return s after reversing it.

var s = "ab-cd"
// Output: "dc-ba"

const reverse = (s) => { 
  var arr = s.split('')
  var left = 0; 
  var right = arr.length - 1
  while(left < right){ 
    if(!/[a-zA-Z]/.test(arr[left])) { 
      left++
    } else if(!/[a-zA-Z]/.test(arr[right])){ 
      right--
    } else { 
      var temp = arr[left]
      arr[left] = arr[right]
      arr[right] = temp
      left++
      right--
    }
  }
  return arr.join('')
}

console.log(reverse(s))