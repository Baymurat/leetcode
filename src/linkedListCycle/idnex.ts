import { Optional } from "../../types"
import { ListNode } from "../ListNode"

export const hasCycle = (head: Optional<ListNode<number>>): boolean => {
  const map = new WeakMap()
  let current = head

  while (current) {
    if (map.get(current)) {
      return true
    } else {
      map.set(current, true)
    }
    current = current.next
  }

  return false
}