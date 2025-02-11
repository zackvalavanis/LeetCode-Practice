// Description
// Given a hash, where the keys are strings representing food items, and the values are numbers representing the price of each food, return the amount someone would pay if they'd order one of each food from the entire menu.

// Input: {"hot dog" => 2, "hamburger" => 3, "steak sandwich" => 5, "fries" => 1, "cole slaw" => 1, "soda" => 2}

// Output: 14

// Explanation: If someone would order one of everything on the menu, they'd pay a total of 14 (the sum of all the hash's values).

// Activity


var input = {"hot dog": 2, "hamburger": 3, "steak sandwich": 5, "fries": 1, "cole slaw": 1, "soda": 2}

const orderMenu = (input) => { 
  var maxSum = 0
  for(let key in input) {
    maxSum += input[key]
  }
  return maxSum
}

console.log(orderMenu(input))