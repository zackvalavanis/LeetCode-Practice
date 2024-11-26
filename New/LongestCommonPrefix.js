var strs = ["flower","flow","flight"]

var longestCommonPrefix = (strs) => { 
  if(strs.length === 0){ 
    return '';
  }
  var prefix = strs.reduce((shortest, current) => current.length < shortest.length ? current : shortest)
  for(let i = 0; i < strs.length; i++){ 
    while(strs[i].indexOf(prefix) !== 0){ 
      prefix = prefix.slice(0, -1)
      if(prefix === ""){ 
        return ""
      }
    }
  }
return prefix 
}

console.log(longestCommonPrefix(strs))