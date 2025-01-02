var input = [1,2,1,2,4]


const singleNumber2 = (input) => { 
  let result = 0;
  for(let num of input){ 
    result ^= num
  }
return result 
}

console.log(singleNumber2(input))