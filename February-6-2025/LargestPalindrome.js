// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

// Find the largest palindrome made from the product of two 3-digit numbers.




function isPalindrome(num) { 
  return num.toString() === num.toString().split('').reverse().join('')
}

function largestPalindrome() { 
  let largestPalindrome = 0;

  for(let i = 999; i >= 100; i--){ 
    for(let j = i; j >= 100; j--){ 
      const product = i * j
      if(isPalindrome(product) && product > largestPalindrome){ 
        largestPalindrome = product
      }
    }
  }
  return largestPalindrome
}

console.log(largestPalindrome())