var values = [4, 6, 7, 8, 1, 3, 7]


const duplicate = (values) => { 
  var hash = {}
  for(let i = 0; i < values.length; i++){ 
  if(values[i] in hash){ 
    hash[values[i]] += 1
  } else { 
    hash[values[i]] = 1
  }
  if(hash[values[i]] > 1){ 
    return(values[i])
  }
}
return null
}

console.log(duplicate(values))