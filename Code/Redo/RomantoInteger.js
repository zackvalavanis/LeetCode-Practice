s = 'IV'

var romanToInt = function(s) {
    var roman = {
      'M' : 1000, 
      'D' : 500, 
      'C' : 100,
      'L' : 50, 
      'X' : 10, 
      'V' : 5, 
      'I' : 1 
    }
    let total = 0;

    for(let i = 0; i < s.length; i++) { 
        const current = roman[s[i]]
        const next = roman [s[i+1]]

        if (next && current < next) { 
            total -=current
        } else { 
            total += current
        }
    }
    return total 
};

console.log(romanToInt(s))