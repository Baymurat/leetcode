import { ListNode } from "../ListNode"
import { Optional } from "../../types"

export const oddEvenList = (head: Optional<ListNode<number>>) => {
  let odd = head
  const headEven = head?.next
  let even = headEven

  while (odd && even && odd.next && even.next) {
    odd.next = even.next
    odd = odd.next

    even.next = odd?.next
    even = even.next
  }

  if (odd) {
    odd.next = headEven
  }

  return head
};