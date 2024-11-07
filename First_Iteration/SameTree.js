
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
   this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
  }

let p = new TreeNode(1, new TreeNode(2), new TreeNode(3));
let q = new TreeNode(1, new TreeNode(2), new TreeNode(3));


var isSameTree = function(p, q) {
  console.log(p);
  console.log(q);
  if(!q && !p) return true;
  if(!q || !p ) return false;

  return(p.val === q.val) && isSameTree(p.left, q.left) && isSameTree(p.right, q.right);

  // array to tree 

  function arrayToTree(arr, index = 0){ 
    if(index >= arr.length || arr[index] === null) return null;
    let node = new TreeNode(arr[index]);
    node.left = arrayToTree(arr, 2 * index + 1);
    node.left = arrayToTree(arr, 2 * index + 2);
    return node
  }

};

console.log(isSameTree(p, q));