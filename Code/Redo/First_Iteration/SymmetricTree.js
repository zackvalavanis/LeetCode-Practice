

 function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
     this.right = (right===undefined ? null : right)
 }

root = [1,2,2,3,4,4,3]

var isSymmetric = function(root) {
  if(!root) return false;

  function isMirror(t1, t2){ 
    if(!t1 && !t2) return true;
    if(!t1 || !t2) return false;

    return ( 
      t1.val === t2.val && 
      isMirror(t1.left, t2.right) && 
      isMirror(t1.right, t2.left)
    )
  }
  return isMirror(root.left, root.right)
    
};