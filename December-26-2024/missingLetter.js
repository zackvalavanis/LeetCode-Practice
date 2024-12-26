// A given string contains all the letters from the alphabet except for one. Return the missing letter.

// NOTE: You must accomplish this in O(n) time. This is also known as linear time.

// Input: “The quick brown box jumps over a lazy dog”
// Output: “f”

var input = 'The quick brown box jumps over a lazy dog';

const missingLetter = (input) => {
  const alphabet = new Set('abcdefghijklmnopqrstuvwxyz');
  const inputSet = new Set(input.toLowerCase().split(' ').join(''))
  
  for (let letter of alphabet) {
    if (!inputSet.has(letter)) {
      return letter; // Return the first missing letter
    }
  }
  
  return ''; // If no letter is missing
};

console.log(missingLetter(input)); // Output: "f"

