import { ListNode } from '../ListNode'
import { Optional } from '../../types'
import { displayLinkedList } from '../utils'

export const mergeKSortedLists = (lists: ListNode<number>[]): Optional<ListNode<number | null>> => {
  return variant2(lists)
}

const varian1 = (lists: ListNode<number>[]): Optional<ListNode<number>> => {
  const mapOfHeads = new Map<number, Optional<ListNode<number>>>()
  let arrayLength = 0
  lists.forEach((head) => {
    mapOfHeads.set(arrayLength++, head)
  })

  const dummy = new ListNode(0)
  let tail: Optional<ListNode<number>> = dummy
  let minIndex = 0

  while (tail) {
    let min: Optional<ListNode<number>> = mapOfHeads.get(minIndex)

    for (let i = 0; i < arrayLength; i++) {
      const next = mapOfHeads.get(i)
      if (next == null || next.data == null) {
        continue
      }

      if (min == null || min.data == null || next.data < min.data) {
        min = next
        minIndex = i
      }
    }

    mapOfHeads.set(minIndex, mapOfHeads.get(minIndex)?.next)
    tail.next = min
    tail = min
  }

  return dummy.next
}

const variant2 = (lists: Optional<ListNode<number>[]>): Optional<ListNode<number | null>> => {
  const dummy: Optional<ListNode<number | null>> = new ListNode(Number.MIN_SAFE_INTEGER)

  if (!lists) return null

  lists.forEach((head) => {
    while (head) {
      let tail: Optional<ListNode<number | null>> = dummy
      let prevTail: Optional<ListNode<number | null>> = dummy
      while (tail && tail.data! < head.data!) {
        prevTail = tail
        tail = tail.next
      }

      prevTail.next = new ListNode(head.data, prevTail.next)
      head = head.next as any
    }
  })

  return dummy.next
}