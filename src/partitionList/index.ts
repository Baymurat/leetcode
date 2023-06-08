import { Optional } from "../../types";
import { ListNode } from "../ListNode";

export const partition = (head: Optional<ListNode<number>>, x: number) => {
  let current = head
  const leftDummy = new ListNode(0)
  const rightDummy = new ListNode(0)
  let leftTail: Optional<ListNode<number>> = leftDummy
  let rightTail: Optional<ListNode<number>> = rightDummy

  while (current) {
    if (current.val! < x) {
      leftTail.next = new ListNode(current.val)
      leftTail = leftTail.next
    } else {
      rightTail.next = new ListNode(current.val)
      rightTail = rightTail.next
    }
    current = current.next
  }

  leftTail.next = rightDummy.next

  return leftDummy.next
};