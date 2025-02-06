var strs = ["flower","flow","flight"]

var longestCommonPrefix = function(strs) {
  if(strs.length === 0) return '';

  var prefix = strs.reduce((shortest, current) => current.length < shortest.length ? current : shortest)
  for( let i = 0; i < strs.length;i++){ 
    while(strs[i].indexOf(prefix)){ 
      prefix = prefix.slice(0, -1);
      if (prefix === '') return 0;
    }

  }
  return prefix
};

console.log(longestCommonPrefix(strs))