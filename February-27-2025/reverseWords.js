var s = "Let's take LeetCode contest"

const reverse = (s) => { 
  return s.split(' ')
          .map((a) => a.split('').reverse().join(''))
          .join(' ')
}

console.log(reverse(s))