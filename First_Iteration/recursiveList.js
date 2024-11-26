var list = ['hello', 'bye', 'yo']

const sumList = (list) => { 
  if(list.length === 0){ 
    return 0;
  }
  return 1 + sumList(list.slice(1))
}

console.log(sumList(list))