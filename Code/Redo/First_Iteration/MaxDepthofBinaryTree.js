
function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
 }
 
let root = new TreeNode(1)
root.left = new TreeNode(2)
root.right = new TreeNode(7)
root.right.right = new TreeNode(8)

console.log(root) 

var maxDepth = function(root) {
  if(!root) { 
    return 0;
  }
  maxLeft = maxDepth(root.left);
  maxRight = maxDepth(root.right);

  return Math.max(maxLeft, maxRight) + 1

};

console.log(maxDepth(root))