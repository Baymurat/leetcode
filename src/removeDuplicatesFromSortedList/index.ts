import { Optional } from "../../types";
import { ListNode } from "../ListNode";

export const removeDuplicatesFromSortedList = (head: Optional<ListNode<number>>, k: number): Optional<ListNode<number>> => {
  let current = head
  while (current && current.next) {
    if (current.val === current.next.val) {
      current.next = current.next.next
    } else {
      current = current.next
    }
  }

  return head
}