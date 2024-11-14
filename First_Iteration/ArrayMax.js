var x = [5, 17, -4, 20, 12]

var max = function(x) { 
  var max = 0;
  for(let i = 0; i < x.length; i++){ 
    if(x[i] > max){ 
       max = x[i]
    } 
  }
  return max 
}

console.log(max(x))