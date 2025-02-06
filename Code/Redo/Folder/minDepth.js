// Given a binary tree, find its minimum depth.

// The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

// Note: A leaf is a node with no children.

function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

root = new TreeNode(3)
root.left = new TreeNode(9)
root.right = new TreeNode(20)
root.right.right = new TreeNode(7)
root.right.left = new TreeNode(15)


const minDepth = (root) => { 
  const height = (node) => { 
    if(!node) return 0
    if(!node.left && !node.right) return 1;

    if(!node.left) return height(node.right) + 1
    if(!node.right) return height(node.left) + 1

    return Math.min(height(node.left), height(node.right)) + 1
  }
  return height(root)
}

console.log(minDepth(root))