import { ListNode } from "../ListNode"
import { Optional } from "../../types"

const deleteNode = (node: ListNode<number>) => {
  while (node.next && node.next.next) {
    node.val = node.next.val
    node = node.next
  }
  node.val = node.next!.val
  node.next = null
};