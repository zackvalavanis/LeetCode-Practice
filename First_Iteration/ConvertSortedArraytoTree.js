

function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

var nums = [-10,-3,0,5,9]

var sortedArrayToBST = function(nums) {
  if(!nums.length) return null;

  const convertToBST = (start, end) => { 
    if (start > end ) return null;

    let mid = Math.floor((start + end) / 2);
    let node = new TreeNode(nums[mid]);

    node.left = convertToBST(start, mid - 1);
    node.right = convertToBST(mid + 1, end);

    return node 
  }
return convertToBST(0, nums.length -1)
};

console.log(sortedArrayToBST(nums));