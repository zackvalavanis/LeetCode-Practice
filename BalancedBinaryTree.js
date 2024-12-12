// Given a binary tree, determine if it is 
// height-balanced.


function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

root = new TreeNode(5)
root.left = new TreeNode(9)
root.right = new TreeNode(20)
root.right.right = new TreeNode(7)
root.right.left = new TreeNode(15)

const isBalanced = (root) => { 
 const height = (node) => { 
  console.log(height)

  if(!node) return 0
  const leftHeight = height(node.left)
  const rightHeight = height(node.right)

  console.log(`node value: ${leftHeight}`, `node value: ${rightHeight}`)

  if(leftHeight === -1 || rightHeight === -1 || Math.abs(leftHeight - rightHeight) > 1){ 
    return -1
  }
  return Math.max(leftHeight, rightHeight) + 1
 }
return height(root) !== -1
}

console.log(isBalanced(root))