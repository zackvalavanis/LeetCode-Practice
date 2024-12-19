// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

// Find the largest palindrome made from the product of two 3-digit numbers.

function isPalindrome(num) { 
  var str = num.toString()
  return str === str.split('').reverse().join('')
}


function largestPalindromeProduct() {
  let largestPalindrome = 0;

  for (let i = 99; i >= 10; i--) {
      for (let j = i; j >= 100; j--) { // Start j from i to avoid redundant calculations
          const product = i * j;
          if (product <= largestPalindrome) {
              break; // No need to continue if the product is smaller than the largest found
          }
          if (isPalindrome(product)) {
              largestPalindrome = product;
          }
      }
  }
  return largestPalindrome;
}

console.log(largestPalindromeProduct())
