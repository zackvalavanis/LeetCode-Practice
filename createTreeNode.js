class TreeNode { 
  constructor(val, left = null, right = null){
    this.val = val;
    this.left = left
    this.right = right
  }
}

tree = new TreeNode(1)
tree.right = new TreeNode(4);
tree.left = new TreeNode(2)
tree.right.right = new TreeNode(6)
tree.right.left = new TreeNode(5)

subTree = new TreeNode(4)
subTree.right = new TreeNode(6)
subTree.left = new TreeNode(5)

// console.log(tree)

const isSameTree = (tree1, tree2) => { 
  if(!tree1 && !tree2) return true;
  if(!tree1 || !tree2) return false;

  return ( 
    tree1.val === tree2.val &&
    isSameTree(tree1.left, tree2.left) &&
    isSameTree(tree1.right, tree2.right)
  )
}
function isSubtree(root, subRoot) {
  if (!root) return false; // Main tree is empty
  if (isSameTree(root, subRoot)) return true; // Check if current trees match
  // Otherwise, check left and right subtrees
  return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
}

console.log(isSubtree(tree, subTree)); // This should return true
