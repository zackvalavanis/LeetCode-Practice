var input = 'abcdefghijklmnopqrs$tuvwxyz'

const contained = (input) => { 
  var arr = input.split('')
  for(let i = 0; i < arr.length;i++){ 
    if(arr[i] === '$'){
      return true
    }
  }
  return false
}

console.log(contained(input))