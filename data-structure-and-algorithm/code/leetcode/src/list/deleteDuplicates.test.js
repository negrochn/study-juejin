import ListNode from './listNode'
import deleteDuplicates from './deleteDuplicates'

class List {
  constructor(arr) {
    this.arr = arr.map(val => new ListNode(val))
    for (let i = 0; i < this.arr.length - 1; i++) {
      this.arr[i].next = this.arr[i + 1]
    }
    return this.arr[0]
  }
}

test('deleteDuplicates', () => {
  expect(deleteDuplicates(new List([1, 2, 3, 3, 4, 4, 5]))).toEqual(new List([1, 2, 5]))
  expect(deleteDuplicates(new List([1, 1, 1, 2, 3]))).toEqual(new List([2, 3]))
})