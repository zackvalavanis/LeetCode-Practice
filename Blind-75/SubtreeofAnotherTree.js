// Given the roots of two binary trees root and subRoot, return true if there is a subtree of root with the same structure and node values of subRoot and false otherwise.

// A subtree of a binary tree tree is a tree that consists of a node in tree and all of this node's descendants. The tree tree could also be considered as a subtree of itself.

class TreeNode {
  constructor(val, left = null, right = null) {
      this.val = val;
      this.left = left;
      this.right = right;
  }
}

// Build the main tree
const root = new TreeNode(3);
root.left = new TreeNode(4);
root.right = new TreeNode(5);
root.left.left = new TreeNode(1);
root.left.right = new TreeNode(2);

// Build the subtree
const subRoot = new TreeNode(4);
subRoot.left = new TreeNode(1);
subRoot.right = new TreeNode(2);

function isSameTree(tree1, tree2) {
  if (!tree1 && !tree2) return true; // Both are null
  if (!tree1 || !tree2) return false; // One is null
  // Compare current values and check left/right subtrees
  return (
      tree1.val === tree2.val &&
      isSameTree(tree1.left, tree2.left) &&
      isSameTree(tree1.right, tree2.right)
  );
}
  function isSubtree(root, subRoot) {
    if (!root) return false; // Main tree is empty
    if (isSameTree(root, subRoot)) return true; // Check if current trees match
    // Otherwise, check left and right subtrees
    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
}

console.log(isSubtree(root, subRoot));
