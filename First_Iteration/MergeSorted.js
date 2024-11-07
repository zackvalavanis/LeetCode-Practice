
var nums1 = [1, 2, 3, 4, 0, 0]
m = 4;
nums2 = [2,5,6]
n = 3;


var merge = function(nums1, m, nums2, n) {
  var i = m - 1;
  var j = n - 1;
  var k = m + n - 1;
  while(i >= 0 && j >= 0){ 
    if(nums1[i] > nums2[j]){ 
      nums1[k] = nums1[i]
      i--
    } else { 
      nums1[k] = nums2[j]
      j--
    }
    k--
  }
  while (j >= 0){ 
    nums1[k] = nums2[j];
    j--;
    k--;
  }
}

console.log(merge(nums1, m, nums2, n))