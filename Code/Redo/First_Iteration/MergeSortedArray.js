var nums1 = [1,2,3,0,0,0];
var m = 3;
var nums2 = [2,5,6];
var n = 3;

var merge = function(nums1, m, nums2, n) {
  var i = m - 1
  var j = n - 1
  var k = m + n - 1
  while( i >= 0 && j >= 0){ 
    if(nums1[i] > nums2[j]){ 
      nums1[k] = nums1[i]
      i--
    } else { 
      nums1[k] = nums2[j]
      j--
    }
    k--
  }
  while( j >= 0 ){ 
    nums1[k] = nums2[j]
    j--
    k--
  }
  return nums1
}


console.log(merge(nums1, m, nums2, n))



