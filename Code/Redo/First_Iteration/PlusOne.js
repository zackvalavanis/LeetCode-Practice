let digits = [9]

var plusOne = function(digits) {
  var i = digits.length - 1
  while (i >= 0 ){ 
    if(digits[i] < 9){ 
      digits[i] += 1;
      return digits
    }
    digits[i] = 0
    i--
  }
  digits.unshift(1)
  return digits

};

console.log(plusOne(digits))