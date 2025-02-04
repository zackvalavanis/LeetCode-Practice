var array = [1, 2, 3, 4, 5]

const reverse = (array) => { 
  var i = 0
  var j = array.length - 1
  while(i < j) { 
    var temp = array[i]
    array[i] = array[j]
    array[j] = temp
    i++
    j--
  }
  return array

}

console.log(reverse(array))