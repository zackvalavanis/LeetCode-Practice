
var head = [1,1,2]

var deleteDuplicates = function(head) {
  var indicies = {}
  var result = []

  for(let i = 0; i < head.length; i++){ 
    var num = head[i]
    if(!(num in indicies)){ 
      result.push(num);
      indicies[num] = true
    }
  } 
  return result
};

console.log(deleteDuplicates(head))