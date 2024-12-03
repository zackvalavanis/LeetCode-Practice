// Write a function that gives the Nth number of the Fibonacci Sequence. The Fibonacci sequence begins with 0 and 1, and every number thereafter is the sum of the previous two numbers. So the sequence goes like this:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, and so on until infinity...

var input = 9;
// Output: 21 (as this is the 9th number of the Fibonacci Sequence)


const fib = (input) => { 
  if(input === 0) return 0;
  if(input === 1) return 1;

  let a = 0, b = 1;

  for(let i = 2; i < input; i++){ 
    const temp = a + b
    a = b
    b = temp
  }
return b
}

console.log(fib(input))