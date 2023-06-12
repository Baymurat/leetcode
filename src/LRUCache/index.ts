import { Optional } from "../../types";

class DoubleLinkedListNode<T> {
  public val: T
  public left: DoubleLinkedListNode<T> | null
  public right: DoubleLinkedListNode<T> | null

  constructor(
    val: T,
    left: DoubleLinkedListNode<T> | null = null,
    right: DoubleLinkedListNode<T> | null = null
  ) {
    this.val = val
    this.left = left
    this.right = right
  }
}

interface TListNode<K, V> {
  key: K
  value: V
}

export class LRUCache<K, V> {
  private map: Map<K, DoubleLinkedListNode<TListNode<K, V>>>
  private capacity: number
  private size: number
  private tail: DoubleLinkedListNode<TListNode<K, V>> | null
  private head: DoubleLinkedListNode<TListNode<K, V>> | null

  constructor(capacity: number) {
    this.map = new Map()
    this.capacity = capacity
    this.size = 0
    this.tail = null
    this.head = null
  }

  get(key: K): V | -1 {
    let node = this.map.get(key)
    if (!node) {
      return -1
    }

    node = this.removeNode(node)
    node = this.appendToTail(node)
    return node.val.value
  }

  put(key: K, value: V) {
    const node = new DoubleLinkedListNode<TListNode<K, V>>({ key, value })

    if (this.map.has(key)) {
      const evictNode = this.map.get(key)!
      this.removeNode(evictNode)
    } else if (this.size === this.capacity) {
      this.map.delete(this.head!.val.key)
      this.removeNode(this.head!)
    } else {
      this.size++
    }

    this.appendToTail(node)
    this.map.set(key, node)
  }

  private removeNode(node: DoubleLinkedListNode<TListNode<K, V>>): DoubleLinkedListNode<TListNode<K, V>> {
    if (this.head === node) {
      this.head = this.head.right
    }

    if (this.tail === node) {
      this.tail = this.tail.left
    }

    if (node.left) {
      node.left.right = node.right
    }

    if (node.right) {
      node.right.left = node.left
    }

    node.left = null
    node.right = null

    return node
  }

  private appendToTail(node: DoubleLinkedListNode<TListNode<K, V>>): DoubleLinkedListNode<TListNode<K, V>> {
    if (this.head && this.tail) {
      this.tail.right = node
      node.right = null
      node.left = this.tail
      this.tail = node
    } else {
      this.head = node
      this.tail = node
    }

    return node
  }
}