var s = 'abccbaacz'

var firstDuplicate = (s) => { 
  var set = new Set()
  for(let c of s){ 
    if(set.has(c)){ 
      return c
    }
    set.add(c)
  }
  return ''
}

console.log(firstDuplicate(s))