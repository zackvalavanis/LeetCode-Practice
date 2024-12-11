class ListNode {
   constructor(val = 0, next = null) {
    this.val = val 
    this.next = next;
   }
}

const list1 = new ListNode(1);
list1.next = new ListNode(2);
list1.next.next = new ListNode(4)

const list2 = new ListNode(1);
list2.next = new ListNode(3);
list2.next.next = new ListNode(4);

//recursive

// const mergeLists = (list1, list2) => { 
//   if (!list1) return list2; // Base case: if list1 is empty
//   if (!list2) return list1; // Base case: if list2 is empty

//   if (list1.val < list2.val) {
//     list1.next = mergeLists(list1.next, list2);
//     return list1;
//   } else {
//     list2.next = mergeLists(list1, list2.next);
//     return list2;
//   }
// }

//iterative

function mergeLists(list1, list2) {
  const dummy = new ListNode(); // Create a dummy node to simplify edge cases
  let current = dummy;

  // Merge while both lists have nodes
  while (list1 !== null && list2 !== null) {
    if (list1.val < list2.val) {
      current.next = list1; // Point to the smaller node
      list1 = list1.next;   // Move to the next node in list1
    } else {
      current.next = list2; // Point to the smaller node
      list2 = list2.next;   // Move to the next node in list2
    }
    current = current.next; // Move to the next position in the merged list
  }

  // Append the remaining nodes from either list1 or list2
  current.next = list1 !== null ? list1 : list2;

  return dummy.next; // Return the head of the merged list
}

function printLinkedList(head) {
  let current = head;
  const result = [];
  while (current !== null) {
    result.push(current.val);
    current = current.next;
  }
  console.log(result.join(" -> ") + " -> null");
}

printLinkedList(mergeLists(list1, list2));


