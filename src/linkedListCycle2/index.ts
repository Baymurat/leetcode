import { Optional } from "../../types";
import { ListNode } from "../ListNode";

export const linkedListCycle2 = (head: Optional<ListNode<number>>): Optional<ListNode<number>> => {
  let current: any = head

  if (current && !current.visited) {
    current.visited = true
    current = current.next
  }

  return current
}