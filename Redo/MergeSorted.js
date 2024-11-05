
var nums1 = [1, 2, 3, 4, 0, 0]
m = 4;
nums2 = [2,5,6]
n = 3;


var merge = function(nums1, m, nums2, n) {
  result = [];
  var i = 0;
  var j = 0;

  while(i < m && j < n){ 
    var num1 = nums1[i]
    var num2 = nums2[j]
    if(num1 < num2){ 
      result.push(num1);
      i++
    } else { 
      result.push(num2)
      j++
    }
  }
    while( i < m ){ 
      result.push(nums1[i]);
      i++
    }
    while(j < n ){ 
      result.push(nums2[j]);
      j++
    }
    return result
  };

console.log(merge(nums1, m, nums2, n))