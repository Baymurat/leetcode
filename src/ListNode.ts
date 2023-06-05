import { Optional } from '../types'

export class ListNode<T> {
  public data: Optional<T>
  public next: Optional<ListNode<T>>
  public extra: string

  constructor(data: Optional<T>, next: Optional<ListNode<T>> = null, extra: string = '') {
    this.data = data
    this.next = next
    this.extra = extra
  }
}