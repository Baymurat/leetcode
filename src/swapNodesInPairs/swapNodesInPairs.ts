import { Optional } from "../../types";
import { ListNode } from "../ListNode";

export const swapNodesInPairs = (head: Optional<ListNode<number>>): Optional<ListNode<number>> => {
  return versionLinear(head)
}

const versionLinear = (head: Optional<ListNode<number>>): Optional<ListNode<number>> => {
  const dummy = new ListNode(0, head)
  let tail = head
  let prev = dummy

  while (tail && tail.next) {
    const temp1 = tail.next.next
    const temp2 = tail.next


    tail.next.next = tail
    tail.next = temp1
    prev.next = temp2
    prev = tail
    tail = tail.next
  }

  return dummy.next
}

const versionRecursive = (head: Optional<ListNode<number>>): Optional<ListNode<number>> => {
  return swapNodes(head, head?.next)
}

const swapNodes = (node1: Optional<ListNode<number>>, node2: Optional<ListNode<number>>): Optional<ListNode<number>> => {
  if (!node2 || !node1) {
    return node1
  }

  const returnHead = node1.next
  const temp = node2.next
  node2.next = node1
  node1.next = swapNodes(temp, temp?.next)

  return returnHead
}