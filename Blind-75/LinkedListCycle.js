// Given head, the head of a linked list, determine if the linked list has a cycle in it.

// There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

// Return true if there is a cycle in the linked list. Otherwise, return false.


var val = [3, 2, 0, -4]

function ListNode(val) { 
  this.val = val
  this.next = null
}

let head = new ListNode(3);
let second = new ListNode(2);
let third = new ListNode(0);
let fourth = new ListNode(-4);

head.next = second 
second.next = third
third.next = fourth 
fourth.next = second


var hasCycle = function(head) { 
  if(!head || !head.next){ 
    return false
  }

  let slow = head
  let fast = head

  while(fast && fast.next){ 
    slow = slow.next;
    fast = fast.next.next

    if(slow === fast){ 
    return true
    }
  }
  return false
}







console.log(hasCycle(head))