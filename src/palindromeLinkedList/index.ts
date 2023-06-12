import { Optional } from "../../types";
import { ListNode } from "../ListNode";

export const isPalindromeList = (head: Optional<ListNode<number>>): boolean => {
  let slow = head
  let fast = head?.next

  while (slow && fast && fast.next) {
    slow = slow.next
    fast = fast.next.next
  }

  slow = slow?.next
  let current: Optional<ListNode<number>> = null
  while (slow) {
    current = new ListNode(slow.val, current)
    slow = slow.next
  }


  while (current && head) {
    if (current.val !== head.val) {
      return false
    }

    current = current.next
    head = head.next
  }

  return true
}