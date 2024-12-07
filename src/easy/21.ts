//  Definition for singly-linked list.
class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
  }
}

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  if (list1 === null && list2 === null) {
    return null;
  }
  else if (list1 === null) {
    return list2;
  }
  else if (list2 === null) {
    return list1;
  }

  function toList(list: ListNode): number[] {
    let elem = list.val
    let arr = [elem]

    let nextList = list.next
    while (nextList) {
      elem = nextList.val
      arr.push(elem)
      nextList = nextList.next
    }

    return arr
  }

  let arr1 = toList(list1);
  let arr2 = toList(list2);

  let mergedList = arr1.concat(arr2);
  mergedList = mergedList.sort((a, b) => a - b);

  let finalList: ListNode | null = null;

  while (mergedList.length > 0) {
    let item = mergedList.pop()
    console.log(item)
    if (finalList) {
      finalList = new ListNode(item, finalList)
    }
    else {
      finalList = new ListNode(item)
    }
  }

  return finalList
}


