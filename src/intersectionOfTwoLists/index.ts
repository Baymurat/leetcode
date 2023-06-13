import { ListNode } from "../ListNode"
import { Optional } from "../../types"

export const intersectionOfTwoLists = (list1: Optional<ListNode<number>>, list2: Optional<ListNode<number>>): Optional<ListNode<number>> => {
  const map = new Map()

  while (list1 || list2) {
    if (list1 === list2) {
      return list1
    }

    if (map.has(list1)) {
      return list1
    }

    if (map.has(list2)) {
      return list2
    }

    map.set(list1, true)
    map.set(list2, true)
    list1 = list1?.next
    list2 = list2?.next

    // if (list1) {
    //   if (map.has(list1)) {
    //     return list1
    //   }
    //   map.set(list1, true)
    //   list1 = list1.next
    // }

    // if (list2) {
    //   if (map.has(list2)) {
    //     return list2
    //   }
    //   map.set(list2, true)
    //   list2 = list2.next
    // }
  }

  return null
}
