// You are given a 0-indexed array nums of n integers, and an integer k.

// The k-radius average for a subarray of nums centered at some index i with the radius k is the average of all elements in nums between the indices i - k and i + k (inclusive). If there are less than k elements before or after the index i, then the k-radius average is -1.

// Build and return an array avgs of length n where avgs[i] is the k-radius average for the subarray centered at index i.

// The average of x elements is the sum of the x elements divided by x, using integer division. The integer division truncates toward zero, which means losing its fractional part.

// For example, the average of four elements 2, 3, 1, and 5 is (2 + 3 + 1 + 5) / 4 = 11 / 4 = 2.75, which truncates to 2.

var index = [7,4,3,9,1,8,5,2,6];
var k = 3;

var index = [7,4,3,9,1,8,5,2,6];
var k = 3;

const averageArray = (index, k) => { 
  const n = index.length
  const avgs = Array(n).fill(-1)
  const windowSize = 2 * k + 1

  if (windowSize > n) return avgs  // Early return if the window size is larger than the array length

  let currentSum = 0

  for(let i = 0; i < n; i++) { 
    currentSum += index[i]  // Add the current element to the sum

    // Remove the element that is sliding out of the window
    if(i >= windowSize) { 
      currentSum -= index[i - windowSize]
    }

    // Check if we're within the valid bounds to compute an average
    if(i >= k && i + k < n) { 
      avgs[i] = Math.floor(currentSum / windowSize)  // Compute the average
    }
  }
  return avgs
}

console.log(averageArray(index, k));


console.log(averageArray(index, k))
