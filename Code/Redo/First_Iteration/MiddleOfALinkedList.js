
function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

function arrayToLinkedList(arr){ 
  let head = new ListNode(arr[0]);
  let current = head;
  for(let i = 1; i < arr.length; i++){ 
    current.next = new ListNode(arr[i]);
    current = current.next
  }
  return head
}

let head = arrayToLinkedList([1, 2, 3, 4, 5]);

var middleNode = function(head) {
  let slow = head;
  let fast = head;

  while(fast !== null && fast.next !== null){ 
    slow = slow.next;
    fast = fast.next.next
  }
  return slow
};

console.log(middleNode(head))