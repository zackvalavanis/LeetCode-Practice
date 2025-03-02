var s = "Let's take LeetCode contest"

const reverseWords = (s) => { 
  return s.split(' ')
          .map((word) => word.split('').reverse().join(''))
          .join(' ')
}

console.log(reverseWords(s))