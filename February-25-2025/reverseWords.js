// Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

// Output: "s'teL ekat edoCteeL tsetnoc"

var s = "Let's take LeetCode contest"

const reverseWords = (s) => { 
 return arr = s.split(' ')
  .map((word) => word.split('').reverse().join(''))
  .join(' ')
}

console.log(reverseWords(s))
