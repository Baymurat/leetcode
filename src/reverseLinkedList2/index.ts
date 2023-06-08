import { Optional } from "../../types";
import { ListNode } from "../ListNode";

export const reverseLinkedList2 = (head: Optional<ListNode<number>>, left: number, right: number): Optional<ListNode<number>> => {
  return variant2(head, left, right)
}

const variant2 = (head: Optional<ListNode<number>>, left: number, right: number): Optional<ListNode<number>> => {
  if (left === right) {
    return head
  }

  let current = head
  const dummy = new ListNode(null, head)
  let prev = dummy
  let currentPosition = 1

  while (current && current.next && currentPosition < left) {
    currentPosition++
    prev = current
    current = current.next
  }

  let temp = null
  let subHead = null
  while (current && currentPosition <= right) {
    currentPosition++
    temp = current.next
    current.next = subHead
    subHead = current
    current = temp
  }

  if (prev?.next) {
    prev.next.next = current
  }

  if (prev !== subHead) {
    prev!.next = subHead
  }
  return dummy.next
}

const variant1 = (head: Optional<ListNode<number>>, left: number, right: number): Optional<ListNode<number>> => {
  let current = head
  const dummy = new ListNode(null, head)
  let prev = dummy

  let leftPosition = 1
  while (current && leftPosition++ < left) {
    prev = current
    current = current.next
  }
  const [next] = reverse(current, right, leftPosition)
  prev.next = next

  return dummy.next
}

export const reverse = (head: Optional<ListNode<number>>, right: number, leftPosition: number): any => {
  if (!head || !head.next || leftPosition > right) {
    return [head, head?.next]
  }

  const [newHead, next] = reverse(head.next, right, leftPosition + 1)
  head.next.next = head
  head.next = next
  return [newHead, next]
}