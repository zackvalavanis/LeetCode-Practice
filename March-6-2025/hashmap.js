// practice creating a hashmap for the first time 


let hashmap = new Map([
  [1, 2], 
  [5, 3], 
  [7,2]
])

hashmap.set(9,15)
hashmap.delete(9)
console.log(hashmap.size)
console.log(hashmap.has(1))

console.log(hashmap)

for(let [key, value] of hashmap){ 
  console.log(key + " " + value)
}