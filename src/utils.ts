import { ListNode } from "./ListNode"
import { Optional } from '../types'

export const buildLinkedList = <T>(arr: T[], extra = ''): ListNode<T> | null => {
  return arr.reduceRight<ListNode<T> | null>((acc, curr) => new ListNode(curr, acc, extra), null)
}

export const displayLinkedList = <T>(head: Optional<ListNode<T>>) => {
  if (head === null) {
    return 'null'
  }

  let current: Optional<ListNode<T>> = head
  let result = ''

  while (current != null) {
    result += `${current.val} -> `
    current = current.next
  }

  result += 'null'

  console.log(result);

  return result
}