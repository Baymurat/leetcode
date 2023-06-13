import { ListNode } from "../ListNode";
import { Optional } from "../../types";

export const removeElements = (head: Optional<ListNode<number>>, val: number): Optional<ListNode<number>> => {
  let current = head
  const dummy = new ListNode(0)
  let prev = dummy
  while (current) {
    if (current.val === val) {
      prev.next = current.next
    } else {
      prev.next = current
      prev = current
    }
    current = current.next
  }

  return dummy.next
};