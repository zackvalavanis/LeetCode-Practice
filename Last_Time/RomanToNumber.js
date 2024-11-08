s = 'IV'

var romanToInt = function(s) {
  roman = {    
      M: 1000, 
      D: 500, 
      C: 100,
      L: 50, 
      X: 10, 
      V: 5, 
      I: 1
  }
  var total = 0 
  for(let i = 0; i < s.length; i++){ 
    f = roman[s[i]]
    n = roman[s[i+1]]
    if(n && f < n){ 
      total -= f
    } else { 
      total += f
    }
  }
 return total
};

console.log(romanToInt(s))