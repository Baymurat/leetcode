import { Optional } from "../../types";

export class ListNodeWithRandom<T> {
  public val: Optional<T>
  public next: Optional<ListNodeWithRandom<T>>
  public random: Optional<ListNodeWithRandom<T>>
  public extra: string

  constructor(data: Optional<T>, next: Optional<ListNodeWithRandom<T>> = null, random = null, extra: string = '') {
    this.val = data
    this.next = next
    this.random = random
    this.extra = extra
  }
}

export const copyListWithRandomPointer = (head: Optional<ListNodeWithRandom<number>>): Optional<ListNodeWithRandom<number>> => {
  return variant1(head)
}

const variant1 = (head: Optional<ListNodeWithRandom<number>>): Optional<ListNodeWithRandom<number>> => {
  const dummy = new ListNodeWithRandom(0)
  let tail = dummy
  let current = head
  const map = new WeakMap()

  while (current) {
    let node
    let random
    if (!map.has(current)) {
      node = new ListNodeWithRandom(current.val)
      map.set(current, node)
    } else {
      node = map.get(current)
    }

    if (current.random) {
      if (!map.has(current.random)) {
        random = new ListNodeWithRandom(current.random.val)
        map.set(current.random, random)
      } else {
        random = map.get(current.random)
      }
    }

    node.random = random
    tail.next = node
    tail = node
    current = current.next
  }

  return dummy.next
}

export const displayNodesWithRandomPointer = <T>(head: Optional<ListNodeWithRandom<T>>) => {
  if (head === null) {
    return 'null'
  }

  let current: Optional<ListNodeWithRandom<T>> = head
  let result = ''

  while (current != null) {
    result += `[${current.val},${current.random?.val ?? null}] -> `
    current = current.next
  }

  result += 'null'

  console.log(result);

  return result
}