import { Optional } from "../../types";
import { ListNode } from "../ListNode";

export const rotateListRight = (head: Optional<ListNode<number>>, k: number): Optional<ListNode<number>> => {
  if (!head || k === 0) {
    return head
  }

  let listLength = 1
  let last: Optional<ListNode<number>> = head

  while (last.next) {
    last = last.next
    listLength++
  }

  k %= listLength

  if (k === 0) {
    return head
  }

  let current: Optional<ListNode<number>> = head
  let headReturn: Optional<ListNode<number>> = head
  let prev = null

  while (k-- > 0 && current.next) {
    current = current.next
  }

  while (current) {
    prev = headReturn
    headReturn = headReturn!.next
    current = current.next
  }

  last.next = head
  prev!.next = null

  return headReturn
}