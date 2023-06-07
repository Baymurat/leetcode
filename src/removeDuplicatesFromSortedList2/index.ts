import { Optional } from "../../types";
import { ListNode } from "../ListNode";

export const removeDuplicatesFromSortedList2 = (head: Optional<ListNode<number>>): Optional<ListNode<number>> => {
  let dummy = new ListNode(null, head)
  if (head) {
    let prev = dummy
    let current: Optional<ListNode<number>> = head

    while (current && current.next) {
      if (current.val === current.next.val) {
        current = deleteDuplicates(prev, current.val ?? -1)
        prev.next = current
      } else {
        prev = current
        current = current.next
      }
    }
  }

  return dummy.next
}

const deleteDuplicates = (head: ListNode<number>, deleteVal: number): ListNode<number> => {
  let current = head

  while (current.next && current.next.val === deleteVal) {
    current.next = current.next.next
  }

  return head.next!
}
