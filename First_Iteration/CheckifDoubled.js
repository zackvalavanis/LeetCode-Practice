var arr = [10,2,5,3]

const checkDouble = (arr) => { 
  var seen = new Set();
  for(let num of arr){ 
    if (seen.has(2 * num) || (num % 2 === 0 && seen.has(num / 2))) { 
      return true
    }
    seen.add(num)
  }
  return false
}

console.log(checkDouble(arr))
