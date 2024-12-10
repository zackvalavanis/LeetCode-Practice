var num = [2,7,11,15]
var target = 9

const twoSum = (num, target) => { 
  var hash = {}

  for(let i = 0; i < num.length; i++){ 
    var number = num[i]
    var remainder = target - number
    if(remainder in hash) { 
      return [hash[remainder], i]
    }
    hash[number] = i
  }
  return []
}

console.log(twoSum(num, target))