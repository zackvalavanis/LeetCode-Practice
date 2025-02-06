
// var removeElement = function(nums, val) {
//   numbers = []
  
//   for(i=0; i < nums.length; i++){ 
//     var num = nums[i];
//     if(num !== val){ 
//       numbers.push(num);
//     }
//   }
//   return numbers
// };

// console.log(removeElement(nums, val))


const nums = [3, 2, 2, 3];
const val = 3;


var removeElement = function(nums, val) {
  let numbers = 0; 
  for (let i = 0; i < nums.length; i++) { 
    if (nums[i] !== val) { 
      nums[numbers] = nums[i];
      numbers++;
    }
  }
  return numbers;
};


const newLength = removeElement(nums, val);
console.log(newLength); // Expected output: 2
console.log(nums.slice(0, newLength)); // Expected output: [2, 2]

