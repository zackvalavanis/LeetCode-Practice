// Write a function that gives the Nth number of the Fibonacci Sequence. The Fibonacci sequence begins with 0 and 1, and every number thereafter is the sum of the previous two numbers. So the sequence goes like this:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, and so on until infinity...

// Input: 9
// Output: 21 (as this is the 9th number of the Fibonacci Sequence)

var input = 9;


const Fibonacci = (input) => { 
  var i = 0; 
  var j= 1;
  var sequence = [0,1]
  while(sequence.length < input){ 
    let next = sequence[sequence.length - 1] + sequence[sequence.length - 2]
    sequence.push(next)
  }
return sequence
}

console.log(Fibonacci(input))