var x = ["Dewey", "Truman", "Dewey", "Dewey", "Truman", "Truman", "Dewey", "Truman", "Truman", "Dewey", "Dewey", 'rick', 'rick', 'steve', 'randy']

var countVotes = (x) => { 
  object = {}
  var y = 0;

  for(let i = 0; i < x.length; i++){ 
    var name = x[i];
    if(object[name]){
      object[name]++;
    } else { 
      object[name] = 1;
    }
  }
  return object
}

console.log(countVotes(x))