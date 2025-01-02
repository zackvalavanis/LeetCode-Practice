// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.

function ListNode(val, next) { 
  this.val = (val===undefined ? 0 : val), 
  this.next = (next===undefined ? null: next)
}

const node = new ListNode(1)
node.next = new ListNode(2)
node.next.next = new ListNode(4)

const node2 = new ListNode(2)
node2.next = new ListNode(3)
node2.next.next = new ListNode(5)


const mergeLists = (node, node2) => { 
  if(!node) return node2
  if(!node2) return node
  if(node.val < node2.val){ 
    node.next = mergeLists(node.next, node2)
    return node
  } else { 
    node2.next = mergeLists(node, node2.next)
    return node2
  }
}

// Utility Function 

function printList (head) { 
  let result = []
  while(head){ 
    result.push(head.val)
    head = head.next
  }
  return result.join(' -> ')
}

const mergeList = (mergeLists(node, node2))

console.log(printList(mergeList))