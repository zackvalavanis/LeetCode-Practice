// Given an integer n, return an array ans of length n + 1 such that for each i (0 <= i <= n), ans[i] is the number of 1's in the binary representation of i.

var number = 2
//output = [0,1,1]


const countBits = (number) => { 
  const ans = [0]
  for(let i = 1; i <= number; i++){ 
    ans[i] = ans[i >> 1] + (i & 1)
  }
  return ans
}

console.log(countBits(number))