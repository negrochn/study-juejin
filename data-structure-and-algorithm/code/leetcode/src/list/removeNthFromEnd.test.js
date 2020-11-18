import removeNthFromEnd from './removeNthFromEnd'
import ListNode from './listNode'

class List {
  constructor(arr) {
    this.arr = arr.map(val => new ListNode(val))
    for (let i = 0; i < this.arr.length - 1; i++) {
      this.arr[i].next = this.arr[i + 1]
    }
    return this.arr[0]
  }
}

test('removeNthFromEnd', () => {
  expect(removeNthFromEnd(new List([1, 2, 3, 4, 5]), 2)).toEqual(new List([1, 2, 3, 5]))
  expect(removeNthFromEnd(new List([1, 2, 3, 4, 5]), 1)).toEqual(new List([1, 2, 3, 4]))
  expect(removeNthFromEnd(new List([1, 2, 3, 4, 5]), 5)).toEqual(new List([2, 3, 4, 5]))
})