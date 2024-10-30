list1 = [1,2,4]
list2 = [1,3,4]

var mergeTwoLists = function(list1, list2) { 
  let dummy = new ListNode();
  let current = dummy 
  while (list1 !== null && list2 !== null) {
    if (list1.val <= list2.val) {
        current.next = list1;
        list1 = list1.next;
    } else {
        current.next = list2;
        list2 = list2.next;
    }
    current = current.next; // Move to the next position
}

// If there are remaining nodes in either list, add them
if (list1 !== null) {
    current.next = list1;
} else if (list2 !== null) {
    current.next = list2;
}

return dummy.next; // Return the merged list, excluding the dummy node
};

console.log(mergeTwoLists(list1, list2))


// Arrays
// var mergeTwoLists = function(list1, list2) {
//   var array = [];
//   let i = 0;
//   let j = 0;
//   while( i < list1.length && j < list2.length) { 
//     num1 = list1[i];
//     num2 = list2[j];
//     if (num1 <= num2) { 
//       array.push(num1);
//       i++
//     } else { 
//       array.push(num2);
//       j++
//     }
//   }
//     while (i < list1.length){ 
//       array.push(list1[i])
//       i++
//     }
//     while( j < list2.length){ 
//       array.push(list2[j])
//       j++
//     }
  
//   return array
// };

// console.log(mergeTwoLists(list1,list2));


