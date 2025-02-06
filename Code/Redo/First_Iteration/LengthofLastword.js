s = "luffy is still joyboy"


var lengthOfLastWord = function(s) {
  if(s === '') return 0
  let words =  s.match(/\b[a-zA-Z]+(-[a-zA-Z]+)*\b/g);
  let i = words.length - 1
  return words[i].length    
};

console.log(lengthOfLastWord(s));