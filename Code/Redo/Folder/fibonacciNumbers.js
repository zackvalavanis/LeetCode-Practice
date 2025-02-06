// Write a function that gives the Nth number of the Fibonacci Sequence. The Fibonacci sequence begins with 0 and 1, and every number thereafter is the sum of the previous two numbers. So the sequence goes like this:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, and so on until infinity...

// Input: 9
// Output: 21 (as this is the 9th number of the Fibonacci Sequence)

var n = 10

//iterative

const isFib = (n) => { 
  if(n <= 1) return n;

  let prev = 0;
  let curr = 1;

  for(let i = 2; i <= n; i++){ 
    const next = prev + curr;
    prev = curr;
    curr = next 
  }
return curr
}

console.log(isFib(n))



//recursive call

const isFibRecursive = (n) => { 
  if(n<=1) return n;
  return isFibRecursive(n-1) + isFibRecursive(n-2)
}

console.log(isFibRecursive(n))
