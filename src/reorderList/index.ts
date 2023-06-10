import { Optional } from "../../types";
import { ListNode } from "../ListNode";
import { displayLinkedList } from "../utils";

export const reorderList = (head: Optional<ListNode<number>>): any => {
  let secondList = head
  let fast = head?.next

  while (secondList && fast && fast.next) {
    secondList = secondList.next
    fast = fast.next.next
  }

  if (secondList) {
    const temp = secondList.next
    secondList.next = null
    secondList = temp
  }

  let prev = null
  while (secondList) {
    const temp = secondList.next
    secondList.next = prev
    prev = secondList
    secondList = temp
  }
  secondList = prev

  let firstListTail = head
  while (firstListTail && secondList) {
    const temp1 = firstListTail.next
    const temp2: any = secondList.next
    firstListTail.next = secondList
    secondList.next = temp1
    firstListTail = temp1
    secondList = temp2
  }

  return head
}