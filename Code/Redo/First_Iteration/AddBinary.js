var a = '1010'
var b = '1011'


var addBinary = function(a, b) {
    let result = '';
    let carry = 0;
    var i = a.length - 1;
    var j = b.length - 1;
    while(i >= 0 || j >= 0 || carry){ 
      var sum = carry;
      if(i >= 0){ 
        sum += parseInt(a[i--]);
      }
      if(j >= 0){ 
        sum += parseInt(b[j--]);
      }
      result = (sum % 2) + result
      carry = Math.floor(sum / 2);
    }
    return result
};


console.log(addBinary(a, b))