// var hash = {}

// hash['age'] = 15;
// hash['name'] = 'bob'

// console.log(hash['age'])

var names = ['zack', 'steve', 'zack']

const nameInVoted = (names) => { 
  var voted = {}
  for(let i = 0; i < names.length; i++){ 
    var name = names[i]
    if(name in voted){ 
      voted[name] += 1
    } else { 
      voted[name] = 1
    }
  }
return voted
}

console.log(nameInVoted(names))