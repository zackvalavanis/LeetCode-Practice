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

console.log(tree)