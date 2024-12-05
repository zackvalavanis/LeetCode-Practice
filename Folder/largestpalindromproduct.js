const isPalindrome = (number) => {
  const str = number.toString();
  return str === str.split('').reverse().join('');
};

const largestPalindrome = () => {
  let maxPalindrome = 0;
  let n1 = 0;
  let n2 = 0;

  for (let i = 999; i >= 100; i--) {
    for (let j = i; j >= 100; j--) { 
      const product = i * j;
      if (product > maxPalindrome && isPalindrome(product)) {
        maxPalindrome = product;
        n1 = i;
        n2 = j;
      }
    }
  }
  return { maxPalindrome, n1, n2 };
};

const result = largestPalindrome();
console.log(`Largest palindrome is ${result.maxPalindrome}, made from ${result.n1} * ${result.n2}`);
