// Description
// Given an array of numbers, return true if the array is a "100 Coolio Array", or false if it is not.

// A "100 Coolio Array" meets the following criteria:

// Its first and last numbers add up to 100,
// Its second and second-to-last numbers add up to 100,
// Its third and third-to-last numbers add up to 100,
// and so on and so forth.

// Here are examples of 100 Coolio Arrays:

var coolio = [1, 2, 3, 97, 98, 99]
// [90, 20, 70, 100, 30, 80, 10]

const coolioArray = (coolio) => { 
  for(let i = 0; i < Math.floor(coolio.length/2); i++){ 
    if(coolio[i] + coolio[coolio.lenght -1 - i !== 100]){ 
      return false
    }
  }
  return true

}

console.log(coolioArray(coolio))

