var array = [
  {hello:'yo', age: 12}, 
  {steve: 'howdy', age:50}
]

// array.forEach((element) => { 
//   if(element.age > 13)
//   console.log(element)
// })

array.map((item) => {
  if(item.age > 13) { 
    console.log(item)
  }
})