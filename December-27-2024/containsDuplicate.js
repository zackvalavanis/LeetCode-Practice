var numbers = [1,2,3,2]

const containsDuplicate = (numbers) => { 
  var hash = {}

  for(let i = 0; i < numbers.length; i++){ 
    var number = numbers[i]
    if(number in hash){ 
      return number
    }else {
      hash[number] = 1
    }
  }
}

console.log(containsDuplicate(numbers))