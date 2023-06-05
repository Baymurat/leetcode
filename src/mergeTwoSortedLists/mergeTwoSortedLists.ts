import { ListNode } from "../ListNode"
import { Optional } from "../../types"

export const mergeTwoSortedLists = (list1: Optional<ListNode<number>>, list2: Optional<ListNode<number>>): Optional<ListNode<number>> => {
  const dummy = new ListNode(0)
  let tail = dummy

  while (list1 && list2) {
    if (list1.data! < list2.data!) {
      tail.next = new ListNode(list1.data, list1.next)
      list1 = list1.next
    } else {
      tail.next = new ListNode(list2.data, list2.next)
      list2 = list2.next
    }
    tail = tail.next
  }

  return dummy.next
}