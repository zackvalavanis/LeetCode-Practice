

class ListNode { 
  constructor(val = 0, next = null){ 
    this.val = val;
    this.next = null
  }
}

const list1 = new ListNode(1);
list1.next = new ListNode(2);
list1.next.next = new ListNode(3)

const list2 = new ListNode(2);
list2.next = new ListNode(3);
list2.next.next = new ListNode(4)


const mergeLists = (list1, list2) => { 
  const dummy = new ListNode();
  let current = dummy 

  while(list1 !== null && list2 !== null) { 
    if(list1.val < list2.val) { 
      current.next = list1
      list1 = list1.next
    } else { 
      current.next = list2
      list2 = list2.next
    }
    current = current.next
  }

  current.next = list1 !== null ? list1 : list2
  return dummy.next
}

const print = (head) => { 
  var current = head;
  let result = []
  while(current !== null){ 
    result.push(current.val);
    current = current.next
  }
  console.log(result.join('-->') + "--> null")
}

// console.log(mergeLists(list1, list2))

print(mergeLists(list1, list2));

