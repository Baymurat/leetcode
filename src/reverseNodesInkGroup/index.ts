import { Optional } from "../../types";
import { ListNode } from "../ListNode";

export const reverseNodesInkGroup = (head: Optional<ListNode<number>>, k: number): Optional<ListNode<number>> => {
  return variant1(head, k)
}

const variant1 = (head: Optional<ListNode<number>>, k: number): Optional<ListNode<number>> => {
  if (!head || !head.next) {
    return head
  }

  let tail = head
  let i = 0

  while (++i !== k && tail.next) {
    tail = tail.next
  }

  if (i === k) {
    const newHead = tail.next
    tail.next = null
    const reversed = reverseList(head)
    head.next = reverseNodesInkGroup(newHead, k)
    return reversed
  } else {
    return head
  }
}

const reverseList = (head: Optional<ListNode<number>>): Optional<ListNode<number>> => {
  if (!head || !head.next) {
    return head
  }

  const newHead = reverseList(head.next)
  head.next.next = head
  head.next = null

  return newHead
}